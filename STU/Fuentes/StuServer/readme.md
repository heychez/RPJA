
## Requisitos
- NodeJs >= 0.10
- Mysql >= 5

## Instalacion
- Ejectuar npm install
- Crear base de datos "orion"
- Copiar&Modificar el archivo common/config/dbConfig.json[.dist] segun parametros
- Ejecutar el archivo generate.js para generar tablas-> node generate
- Importar datos de la carpeta data

## Ejecucion
- node  app / npm start
## Api

- GET /:placa ->  Obtiene un vehiculo , tomando como parametro la placa
- GET /:placa/comentarios -> Obtiene los comentarios del vehiculo
- POST /:placa/comentarios -> Añade un nuevo comentario {texto:STRING}


TODO:
- data import script.
- GET /:placa/denuncias
- POST /:placa/denuncias

