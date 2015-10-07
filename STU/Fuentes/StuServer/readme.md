
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

- GET vehiculo/:placa ->  Obtiene un vehiculo , tomando como parametro la placa
- GET vehiculo/:placa/comentarios -> Obtiene los comentarios del vehiculo
- GET vehiculo/top - > Obtiene el top de los vehiculos mas consultados
- GET vehiculo/:placa/comentarios -> Obtiene todos los comentarios de un vehiculo.
- POST vehiculo/:placa/comentarios -> Añade un nuevo comentario {texto:STRING}



TODO:
- data import script. (DONE)
- GET /:placa/denuncias (DONE)
- POST /:placa/denuncias

