@echo off
echo Listado de carpetas:
for /d %%A in (*) do (
    echo %%A
)
pause
