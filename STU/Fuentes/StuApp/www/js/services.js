angular.module('stuServices', [])

.factory('$localStorage', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  }
})

.factory('Usuario', function ($localStorage){
  var usuarioService = {
    data: {}
  };
  
  usuarioService.startSession = function (access_token){
    $localStorage.set('access_token', access_token);
  }
  
  usuarioService.getAccessToken = function (){
    return 'CAAXuui4x6bsBAJl5Ewa8chCHtT6ASC8sN7CDa9ZAQjkB7zMe708ke1X4c3OZBa556wOpSMJJ1jIaR2D2yPch1Hq4QAFPE8GDINETpR4ktfIvKgdLB5CbUo4pbSEZBksQdLSGKA3FIZBFvc8pjdqaaIl2pLydAGmZAZBBfwFJ8pI8nmulawTkSxY5phL5PrROuZAYziE7VualAZDZD';
//    return $localStorage.get('access_token');
  }
  
  usuarioService.isLogged = function (){
    return true;
//    return $localStorage.get('access_token');
  }

  return usuarioService;
})

.factory('Vehiculo', function ($http){
  var vehiculoService = {
    data: {}
  };
  
  vehiculoService.getVehiculo = function (placa){
//    $http.get("https://ftlkwnvmkj.localtunnel.me/vehiculo/"+placa).then(function(result) {      
//      vehiculoService.data = result;      
//    }, function(error) {
//        alert(error);
//    });
    vehiculoService.data={"placa":"69V149","modalidadServicio":"TAXI ESTACION","clase":"STATION WAGON","anioFabricacion":2003,"modelo":"AD VAN","marca":"NISSAN","serie":"VY11258077","serieMotor":"QG13303606","tipoCombustible":"DUAL","pesoSeco":"1177","pesoBruto":"1,68","longitud":"4,3","altura":"1,4","ancho":"1,6","cargaUtil":"503","capacidadPasajero":4,"numeroAsientos":5,"numeroRueda":4,"numeroEje":2,"numeroPuerta":4,"fechaInscripcion":"20/07/2009","tipoDocumento":"DNI","nroConsultas":17,"fechaCreacion":"0000-00-00 00:00:00","fechaModificacion":"2015-10-07T03:43:17.000Z","fechaEliminacion":null};
  };
  
  vehiculoService.getVehiculoComentarios = function (){
    vehiculoService.data.comentarios = [
      {nombreCompleto: "Roberto Cuadros Loayza", imagen: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/v/t1.0-1/p50x50/10384687_10152654150698557_3418550756936438253_n.jpg?oh=ccc101a522b14cd3a82aa3eee80c9b20&oe=56A368B5&__gda__=1452382780_187417923030d05d4225c4ffde2a8067", texto: "Conductor amable"},
      {nombreCompleto: "Roberto Cuadros Loayza", imagen: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/v/t1.0-1/p50x50/10384687_10152654150698557_3418550756936438253_n.jpg?oh=ccc101a522b14cd3a82aa3eee80c9b20&oe=56A368B5&__gda__=1452382780_187417923030d05d4225c4ffde2a8067", texto: "Vehiculo desgastado y viejo"},
      {nombreCompleto: "Roberto Cuadros Loayza", imagen: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/v/t1.0-1/p50x50/10384687_10152654150698557_3418550756936438253_n.jpg?oh=ccc101a522b14cd3a82aa3eee80c9b20&oe=56A368B5&__gda__=1452382780_187417923030d05d4225c4ffde2a8067", texto: "Se malogro el vehiculo en medio del viaje"},
      {nombreCompleto: "Roberto Cuadros Loayza", imagen: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/v/t1.0-1/p50x50/10384687_10152654150698557_3418550756936438253_n.jpg?oh=ccc101a522b14cd3a82aa3eee80c9b20&oe=56A368B5&__gda__=1452382780_187417923030d05d4225c4ffde2a8067", texto: "Tarifa muy comoda"},
    ];
  }
  
  vehiculoService.getVehiculoDenuncias = function (){
    vehiculoService.data.denuncias = [
      {titulo: "Choque", fechaCreacion: "28/09/15", imagen: "img/denuncia1.jpg", texto: "El vehiculo fue culpable de un choque espantoso."},
      {titulo: "Terrible accidente", fechaCreacion: "02/10/15", imagen: "img/denuncia2.jpg", texto: "El conductor de este vehiculo fue el que ocacionó este terrible accdiente vehicular."},
    ];
  };
  
  return vehiculoService;
})