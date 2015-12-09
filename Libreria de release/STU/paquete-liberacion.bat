@echo off
MD STU
cd STU
set FECHA_ACTUAL=%DATE%
set ANIO=%FECHA_ACTUAL:~6,4%
set MES=%FECHA_ACTUAL:~3,2%
set DIA=%FECHA_ACTUAL:~0,2%
set RUTA=%ANIO%%MES%%DIA%
MD %RUTA%
cd %RUTA% 
MD DOCUMENTOS
MD CODIGO_FUENTE
MD EJECUTABLES
copy "..\..\..\..\Documentos\Documento de Liberacion.docx" "Documento de Liberacion.docx"
exit