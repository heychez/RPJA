var router         = require("express").Router();
var usuarioService = require("./service");


router.param("idUsuario",function  (req,res,next,idUsuario) {
	usuarioService.buscarUsuarioById(idUsuario,function  (err,usuario) {
		if(err){
			return res.status(500).json(err);
		}
		req.usuario = usuario;
		return next();
	});
});

router
	.get("/",function  (req,res) {
		return res.send("Entro al endpoint usuarios");
	})
	.get("/:idUsuario",function  (req,res) {
		var usuario = req.usuario;
		return res.json(usuario);
	})
	.post("/",function  (req,res) {

		var usuarioRequest = req.body;
		
		usuarioService.crearUsuario(usuarioRequest,function  (error,usuario) {
			if(error)
				return res.status(err.status).json(error);
			return res.json(usuario);
		});

	})

module.exports = router;