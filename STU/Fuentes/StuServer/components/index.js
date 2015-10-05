var router   = require("express").Router();
var vehiculo = require("./vehiculo");


router.use("/vehiculo",vehiculo);


router.get("/",function  (req,res) {
	return res.send("wat");
});


module.exports = router;





