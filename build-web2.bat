@echo off
setlocal

echo ==========================================
echo Building Angular app for /dist/
echo ==========================================

cd /d "%~dp0"
where npm.cmd >nul 2>&1
if errorlevel 1 if exist "%ProgramFiles%\nodejs\npm.cmd" set "PATH=%ProgramFiles%\nodejs;%PATH%"
where npm.cmd >nul 2>&1
if errorlevel 1 (
  echo npm nao encontrado. Instale o Node.js com npm e reabra o terminal.
  exit /b 1
)

call npm.cmd run build
if errorlevel 1 (
  echo.
  echo Build failed.
  exit /b 1
)

echo.
echo Build finished successfully.
echo Output: dist\brapci
exit /b 0
