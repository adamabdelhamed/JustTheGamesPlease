@echo off
setlocal

cd /d "%~dp0"

echo Installing dependencies...
call npm ci
if errorlevel 1 exit /b %errorlevel%

echo Building NeonFactory and NeonSwarm...
call npm run build
if errorlevel 1 exit /b %errorlevel%

echo Stopping any existing server on port 4173...
powershell -NoProfile -ExecutionPolicy Bypass -Command "$listeners = Get-NetTCPConnection -LocalPort 4173 -State Listen -ErrorAction SilentlyContinue; if ($listeners) { $listeners | Select-Object -ExpandProperty OwningProcess -Unique | ForEach-Object { Stop-Process -Id $_ -Force } }"
if errorlevel 1 exit /b %errorlevel%

echo Starting http://127.0.0.1:4173/NeonSwarm.html?dev=1
call npm run serve -- -p 4173
