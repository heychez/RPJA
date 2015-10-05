var router          = require("express").Router();
var vehiculoService = require("./service");


router.param("placa",function  (req,res,next,placa) {
	vehiculoService.buscarVehiculoPorPlaca(placa,function  (err,vehiculo) {
		if(err){
			console.log(err);
			return res.status(500).json(err);
		}
		req.vehiculo = vehiculo;
		return next();
	});
});

router
	.get("/",function  (req,res) {
		return res.send("wat");
	})
	.get("/:placa",function  (req,res) {
		var vehiculo = req.vehiculo;
		return res.json(vehiculo);
	})
	.get("/:placa/comentarios",function  (req,res) {
		console.log("wat");
		var vehiculo = req.vehiculo;
		vehiculoService.obtenerComentariosVehiculo(vehiculo,function  (error,comentarios) {
			if(error)
				return res.json(error);
			return res.json(comentarios);
		});
	})
	.post("/:placa/comentarios",function  (req,res) {
		var vehiculo          = req.vehiculo;
		var comentarioRequest = req.body;
		vehiculoService.addComentarioVehiculo(vehiculo,comentarioRequest,function  (error,comentario) {
			if(error)
				return res.json(error);
			return res.json(comentario);
		});
	})
	.get("/:placa/denuncias",function  (req,res) {
		var vehiculo = req.vehiculo;
		vehiculoService.obtenerDenunciasVehiculo(vehiculo,function  (err,denuncias) {
			if(err)
				return res.json(err);
			return res.json(denuncias);
		});
	});

module.exports = router;