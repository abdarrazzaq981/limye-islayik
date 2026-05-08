@echo off
cd /d "%~dp0"
set PORT=3002
if not exist node_modules call npm install
echo Limye Islayik -^> http://localhost:%PORT%
call npm run dev -- -p %PORT%
