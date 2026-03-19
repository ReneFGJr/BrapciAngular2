import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import cookieParser from 'cookie-parser';
import express from 'express';
import session from 'express-session';
import { join } from 'node:path';

type AuthUser = {
  id: number;
  username: string;
  name: string;
  role: 'admin' | 'user';
};

declare module 'express-session' {
  interface SessionData {
    user?: AuthUser;
  }
}

const browserDistFolder = join(import.meta.dirname, '../browser');
const sessionSecret = process.env['SESSION_SECRET'] ?? 'brapci-dev-secret-change-in-production';

const users: Array<AuthUser & { password: string }> = [
  {
    id: 1,
    username: 'admin',
    password: 'admin123',
    name: 'Administrador Brapci',
    role: 'admin'
  },
  {
    id: 2,
    username: 'user',
    password: 'user123',
    name: 'Usuario Brapci',
    role: 'user'
  }
];

const app = express();
const angularApp = new AngularNodeAppEngine();

app.set('trust proxy', 1);
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    name: 'brapci.sid',
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env['NODE_ENV'] === 'production',
      maxAge: 1000 * 60 * 60 * 8
    }
  })
);

app.get('/auth/me', (req, res) => {
  const user = req.session.user ?? null;
  res.json({ authenticated: !!user, user });
});

app.post('/auth/login', (req, res) => {
  const { username, password } = req.body as { username?: string; password?: string };

  if (!username || !password) {
    res.status(400).json({ authenticated: false, user: null });
    return;
  }

  const match = users.find((item) => item.username === username && item.password === password);

  if (!match) {
    res.status(401).json({ authenticated: false, user: null });
    return;
  }

  req.session.user = {
    id: match.id,
    username: match.username,
    name: match.name,
    role: match.role
  };

  res.json({ authenticated: true, user: req.session.user });
});

app.post('/auth/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('brapci.sid');
    res.status(204).send();
  });
});

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
