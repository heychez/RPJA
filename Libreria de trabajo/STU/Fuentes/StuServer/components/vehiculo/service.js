var Vehiculo  = require("../../common/models").Vehiculo;
var Sequelize = require("../../common/models").Sequelize;

var service = {};


service.buscarVehiculoPorPlaca = function ( placa , callback ) {

	Vehiculo.findOne({
			where : {
				placa : placa
			}
		})
		.then(function ( vehiculo ) {
			if ( vehiculo ) {
				vehiculo.increment('nroConsultas' , { by : 1 })
					.then(function ( vehiculoNew ) {
						return callback(null , vehiculoNew);
					})
					.catch(function ( error ) {
						error        = new Error("Error en updatear nroConsultas");
						error.status = 500;
						throw error;
					});
			}
			else {
				var error     = new Error();
				error.message = "Vehiculo no encontrado";
				error.status  = 404;
				throw error;
			}
		})
		.catch(Sequelize.ConnectionError , function ( error ) {
			error         = new Error();
			error.message = "Error en la conexion";
			error.status  = 500;
			return callback(error)
		})
		.catch(function ( error ) {
			return callback(error);
		});
}

service.obtenerComentariosVehiculo = function ( vehiculoInstance , callback ) {
	vehiculoInstance.obtenerComentariosWithUsuarios()
		.then(function ( comentarios ) {
			return callback(null , comentarios);
		})
		.catch(function ( error ) {
			console.log(error);
			error         = new Error();
			error.message = "Error en la conexion";
			error.status  = 500;
			return callback(error);
		});
}

service.obtenerDenunciasVehiculo = function ( vehiculoInstance , callback ) {
	vehiculoInstance.getDenuncias()
		.then(function ( denuncias ) {
			return callback(null , denuncias);
		})
		.catch(function ( error ) {
			error         = new Error();
			error.message = "Error en la conexion";
			error.status  = 500;
			return callback(error);
		});
};


service.addComentarioVehiculo = function ( vehiculoInstance , comentarioRequest , callback ) {

	vehiculoInstance.createComentario(comentarioRequest)
		.then(function ( comentario ) {
			return callback(null , comentario);
		})
		.catch(function ( error ) {
			console.log(error);
			error         = new Error();
			error.message = "Error en la conexion";
			error.status  = 500;
			return callback(null , error);
		});
}


service.obtenerTopBusqueda = function ( callback ) {
	Vehiculo.findAll({
			limit : 15 ,
			order : "nroConsultas DESC"
		})
		.then(function ( vehiculos ) {
			return callback(null , vehiculos);
		})
		.catch(function ( error ) {
			error         = new Error();
			error.status = 500;
			error.message = "Error en la conexion";
			return callback(error);
		});
}


service.addDenunciaVehiculo = function ( vehiculoInstance , denunciaRequest , callback ) {
	vehiculoInstance.createDenuncia(denunciaRequest)
			.then(function ( denuncia ) {
				return callback(null , denuncia);
			})
			.catch(function ( error ) {
				error         = new Error();
				error.message = "Error en la conexion";
				error.status  = 500;
				return callback(null , error);
			});
}

module.exports = service;