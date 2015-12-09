var localtunnel = require('localtunnel');

var opt = {
	subdomain : 'stuapp'
}

var up = function () {

	var tunnel = localtunnel(3000 , opt , function ( err , tunnel ) {
		if ( err ) {
			console.log(err);
		} else {
			console.log('Zervidor corriendo en :' , tunnel.url);
		}
	});

	tunnel.on('close' , function () {
		console.log('Termino el tunnel');
	});

	tunnel.on('error' , function ( err ) {
		console.log('Error' , err);
		setTimeout(up , 3000);
	});
}

up();