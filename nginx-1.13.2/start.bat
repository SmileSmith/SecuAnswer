====================================================
@echo off
rem ��ǰbat������

echo ==================begin========================

cls 
SET NGINX_PATH=D:
SET NGINX_DIR=D:\WorkSet\nginx-1.13.2\
color 0a 
TITLE Nginx �������������

CLS 

ECHO. 
ECHO. * Nginx ������� * 
ECHO. * ����2013-10-15 * 
ECHO. 

:MENU 

ECHO. * nginx ����list * 
tasklist|findstr /i "nginx.exe"

ECHO. 
ECHO. [1] ����Nginx 
ECHO. [2] �ر�Nginx 
ECHO. [3] ����Nginx 
ECHO. [4] �� �� 
ECHO. 

ECHO.������ѡ����Ŀ�����:
set /p ID=
IF "%id%"=="1" GOTO start 
IF "%id%"=="2" GOTO stop 
IF "%id%"=="3" GOTO restart 
IF "%id%"=="4" EXIT
PAUSE 

:start 
call :startNginx
GOTO MENU

:stop 
call :shutdownNginx
GOTO MENU

:restart 
call :shutdownNginx
call :startNginx
GOTO MENU

:shutdownNginx
ECHO. 
ECHO.�ر�Nginx...... 
taskkill /F /IM nginx.exe > nul
ECHO.OK,�ر�����nginx ����
goto :eof

:startNginx
ECHO. 
ECHO.����Nginx...... 

IF EXIST "./nginx.exe" (
echo "start '' nginx.exe"
start "" nginx.exe
)
ECHO.OK
goto :eof