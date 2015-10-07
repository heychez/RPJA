var router   = require("express").Router();
var vehiculo = require("./vehiculo");
var usuario  = require("./usuario");

router.use("/vehiculo",vehiculo);
router.use("/usuario",usuario);

router.all("/",function  (req,res) {
	return res.send("wat");
});


module.exports = router;





