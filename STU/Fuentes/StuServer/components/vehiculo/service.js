var Vehiculo = require("../../common/models").Vehiculo;


var service = {};


service.buscarVehiculoPorPlaca = function  (placa,callback) {
	
	Vehiculo.findOne({where:{
		placa:placa
	}})
	.then(function  (vehiculo) {
		if(vehiculo)
			return callback(null,vehiculo);
		else{
			var error = new Error();
			error.message = "Vehiculo no encontrado";
			error.status  = 404;
			throw error;
		}
	})
	.catch(function  (error) {
		return callback(error)
	});
}

service.obtenerComentariosVehiculo = function  (vehiculoInstance,callback) {
	vehiculoInstance.getComentarios()
		.then(function  (comentarios) {
			console.log(comentarios);
			return callback(null,comentarios);
		})
		.catch(function  (error) {
			console.log(error);
			return callback(error);
		});
}

service.obtenerDenunciasVehiculo= function  (vehiculoInstance,callback) {
	vehiculoInstance.getDenuncias()
		.then(function (denuncias) {
			console.log(denuncias);
			return callback(null,denuncias);
		})
		.catch(function  (error) {
			console.log(error);
			return callback(error);
		});
}

service.addComentarioVehiculo = function  (vehiculoInstance,comentarioRequest,callback) {
	vehiculoInstance.createComentario(comentarioRequest)
		.then(function  (wat) {
			return callback(null,wat);
		})
		.catch(function  (error) {
			return callback(null,error);
		});
}

service.addDenunciaVehiculo = function (vehiculoInstance,denunciaRequest,callback) {
	
}


module.exports = service;