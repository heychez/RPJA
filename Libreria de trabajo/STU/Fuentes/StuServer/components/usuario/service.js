var Usuario = require("../../common/models").Usuario;
var Sequelize = require("../../common/models").Sequelize;

var service = {};


service.buscarUsuarioById = function  (idUsuario,callback) {
	
	Usuario.findOne({where:{
		idUsuario:idUsuario
	}})
	.then(function  (usuario) {
		if(usuario)
			return callback(null,usuario);
		
		var error = new Error();
		error.message = "Usuario no encontrado";
		error.status  = 404;
		throw error;
		
	})
	.catch(Sequelize.ConnectionError,function  (error) {
		error = new Error();
		error.message = "Error en la conexion";
		error.status  = 500;
		return callback(error)
	})
	.catch(function  (error) {
		return callback(error)
	});
}



service.crearUsuario = function  (usuarioRequest,callback) {

	Usuario.findOrCreate({
		where: {
			idUsuario:usuarioRequest.idUsuario
		}, 
		defaults: {
			idUsuario:usuarioRequest.idUsuario,
			email:usuarioRequest.email,
			nombreCompleto:usuarioRequest.nombreCompleto,
			imagen:usuarioRequest.imagen,
			genero:usuarioRequest.genero
		}
	})
  	.spread(function(usuario) {
  		return callback(null,usuario)
  	})
  	.catch(function  (error) {
  		error = new Error();
  		error.message = "Error en la conexion";
		error.status  = 500;
		return callback(error)
	});
}



module.exports = service;