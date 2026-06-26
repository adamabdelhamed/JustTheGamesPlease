@echo off
setlocal EnableExtensions

cd /d "%~dp0"

echo.
echo Building SfxGenerator...
dotnet build JustTheGamesPlease.sln
if errorlevel 1 goto :failed

echo.
echo Starting ElevenLabs sound effect curation tool...
dotnet run --project tools\SfxGenerator\SfxGenerator.csproj
if errorlevel 1 goto :failed

exit /b 0

:failed
echo.
echo BuildAndRunDotNet failed with exit code %errorlevel%.
echo Review the error above.
pause
exit /b 1
