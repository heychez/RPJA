var Vehiculo = require("../common/models").Vehiculo;
var csv      = require("fast-csv");
var fs       = require("fs");



var stream = fs.createReadStream("vehiculos.csv");

var csvStream = csv()
    .on("data", function(data){
        var newVehiculo = {};
		newVehiculo.placa             = data[0];
		newVehiculo.modalidadServicio = data[1];
		newVehiculo.clase             = data[2];
		newVehiculo.anioFabricacion   = data[3];
		newVehiculo.modelo            = data[4];
		newVehiculo.marca             = data[5];
		newVehiculo.serie             = data[6];
		newVehiculo.serieMotor        = data[7];
		newVehiculo.tipoCombustible   = data[8];
		newVehiculo.pesoSeco          = parseInt(data[9]);
		newVehiculo.pesoBruto         = parseInt(data[10]);
		newVehiculo.longitud          = parseInt(data[11]);
		newVehiculo.altura            = parseInt(data[12]);
		newVehiculo.ancho             = parseInt(data[13]);
		newVehiculo.cargaUtil         = parseInt(data[14]);
		newVehiculo.capacidadPasajero = parseInt(data[15]);
		newVehiculo.numeroAsientos    = parseInt(data[16]);
		newVehiculo.numeroRueda       =  parseInt(data[17]);
		newVehiculo.numeroEje         =  parseInt(data[18]);
		newVehiculo.numeroPuerta      =  parseInt(data[19]); 
		newVehiculo.fechaInscripcion  = data[20];
		newVehiculo.tipoDocumento     = data[21];
		//console.log(newVehiculo);
		csvStream.pause();
		Vehiculo.findOrCreate({
			where:{
				placa:newVehiculo.placa
			},
			defaults:newVehiculo
		})	
			.spread(function  (vehiculo,created) {
				if(created){
					console.log(vehiculo.get({plain:true}));
					csvStream.resume();
				}else{
					csvStream.resume();
					console.log("no");
				}
			})
			.catch(function  (error) {
				csvStream.resume();
				console.log(error);
			})
    })
    .on("end", function(){
         console.log("done");
    });

stream.pipe(csvStream);

