@echo off
set "HTML_PATH=%~dp0clawd-app\index.html"
set "HTML_URL=file:///%HTML_PATH:\=/%"

start "" msedge.exe --app="%HTML_URL%" --window-size=910,850 2>nul || start "" chrome.exe --app="%HTML_URL%" --window-size=910,850 2>nul || start "" "%HTML_PATH%"