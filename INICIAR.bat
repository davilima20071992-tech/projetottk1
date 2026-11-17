@echo off
chcp 65001 >nul
title Lar Bom Samaritano - Iniciar site
color 0A

echo ==================================================
echo   RESIDENCIAL SENIOR - INICIAR SITE
echo ==================================================
echo.

rem --- Localiza o Node.js instalado neste computador ---
set "NODE_DIR=%LOCALAPPDATA%\Programs\nodejs"
if not exist "%NODE_DIR%\node.exe" set "NODE_DIR=C:\Program Files\nodejs"
if not exist "%NODE_DIR%\node.exe" set "NODE_DIR=C:\Program Files (x86)\nodejs"

if not exist "%NODE_DIR%\node.exe" (
  echo [ERRO] Node.js nao encontrado.
  echo        Instale em https://nodejs.org e tente novamente.
  echo.
  pause
  exit /b 1
)

set "PATH=%NODE_DIR%;%PATH%"

rem --- 1) Gera a versao final do site (pasta dist) ---
echo [1/2] Gerando o site (npm run build)...
call npm.cmd run build
if errorlevel 1 (
  echo.
  echo [ERRO] Falha ao gerar o site. Verifique as mensagens acima.
  pause
  exit /b 1
)

echo.
echo [2/2] Iniciando o servidor local...
echo       Abra no navegador: http://localhost:3000
echo       Para encerrar, feche esta janela (Ctrl+C).
echo.

rem --- 2) Serva a pasta dist ---
node servidor.js

pause
