@echo off
setlocal EnableExtensions

cd /d "%~dp0"

echo.
echo Installing dependencies...
call npm ci
if errorlevel 1 goto :failed

echo.
echo Building NeonFactory and NeonSwarm...
call npm run build
if errorlevel 1 goto :failed

echo.
echo Stopping any existing server on port 4173...
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$listeners = Get-NetTCPConnection -LocalPort 4173 -State Listen -ErrorAction SilentlyContinue;" ^
  "if ($listeners) {" ^
  "  $listeners | Select-Object -ExpandProperty OwningProcess -Unique | ForEach-Object { Stop-Process -Id $_ -Force -ErrorAction SilentlyContinue };" ^
  "  $deadline = (Get-Date).AddSeconds(5);" ^
  "  while ((Get-NetTCPConnection -LocalPort 4173 -State Listen -ErrorAction SilentlyContinue) -and (Get-Date) -lt $deadline) { Start-Sleep -Milliseconds 100 };" ^
  "  if (Get-NetTCPConnection -LocalPort 4173 -State Listen -ErrorAction SilentlyContinue) { exit 1 }" ^
  "};" ^
  "exit 0"
if errorlevel 1 (
  echo ERROR: Port 4173 could not be released.
  goto :failed
)

echo.
echo Server running at:
echo http://127.0.0.1:4173/NeonSwarm.html?dev=1
echo.
echo Keep this window open. Press Ctrl+C to stop the server.
echo.
call "%~dp0node_modules\.bin\http-server.cmd" docs -c-1 -p 4173

if errorlevel 1 goto :failed
exit /b 0

:failed
echo.
echo BuildAndRun failed with exit code %errorlevel%.
echo Review the error above.
pause
exit /b 1
