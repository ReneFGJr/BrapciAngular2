@echo off
setlocal

echo ==========================================
echo Building Angular app for /dist/
echo ==========================================

cd /d "%~dp0"
cmd /c npm run build
if errorlevel 1 (
  echo.
  echo Build failed.
  exit /b 1
)

echo.
echo Build finished successfully.
echo Output: dist\brapci
exit /b 0
