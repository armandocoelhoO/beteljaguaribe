@echo off
set SCRIPT_DIR=%~dp0
set TARGET_FILE=%SCRIPT_DIR%index.html
set SHORTCUT_PATH=%USERPROFILE%\Desktop\Site_Igreja_Betel_Jaguaribe.url

echo [InternetShortcut] > "%SHORTCUT_PATH%"
echo URL=file:///%TARGET_FILE:\=/% >> "%SHORTCUT_PATH%"
echo IconFile=%SCRIPT_DIR%assets\favicon.svg >> "%SHORTCUT_PATH%"
echo IconIndex=0 >> "%SHORTCUT_PATH%"

echo ========================================================
echo Atalho criado na sua Area de Trabalho com sucesso!
echo Nome: Site_Igreja_Betel_Jaguaribe
echo ========================================================
pause
