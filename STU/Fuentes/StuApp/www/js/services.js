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

.factory('Usuario', function ($localStorage, $http){
  var usuarioService = {
    data: {}
  };
  
  usuarioService.isLogged = function (){
//    return true;
    return $localStorage.get('access_token');
  }
  
  usuarioService.getUsuario = function (callback){
//    var token =  'CAAXuui4x6bsBAJl5Ewa8chCHtT6ASC8sN7CDa9ZAQjkB7zMe708ke1X4c3OZBa556wOpSMJJ1jIaR2D2yPch1Hq4QAFPE8GDINETpR4ktfIvKgdLB5CbUo4pbSEZBksQdLSGKA3FIZBFvc8pjdqaaIl2pLydAGmZAZBBfwFJ8pI8nmulawTkSxY5phL5PrROuZAYziE7VualAZDZD';
    var token = $localStorage.get('access_token');
    
    $http.get("https://graph.facebook.com/v2.4/me", {params: {access_token: token, fields: "id,name,email,picture,gender", format: "json" }}).then(function(result) {
      var data = {
        idUsuario: result.data.id,
        nombreCompleto: result.data.name,
        imagen: result.data.picture.data.url,
        email: result.data.email,
        genero: result.data.gender,
      };
      
      usuarioService.data = data;
      
      callback(data);
    }, function(error) {
        alert(error);
    });
  }
  
  usuarioService.login = function (token, callback){
    $http.get("https://graph.facebook.com/v2.4/me", {params: {access_token: token, fields: "id,name,email,picture,gender", format: "json" }}).then(function(result) {
      var data = {
        idUsuario: result.data.id,
        nombreCompleto: result.data.name,
        imagen: result.data.picture.data.url,
        email: result.data.email,
        genero: result.data.gender,
      };
      
      usuarioService.data = data;
      
      $http.get("https://stuapp.localtunnel.me/usuario/"+data.idUsuario).then(function(getres) {
      }, function(error) {
          if (error.status == 500){
          $http.post("https://stuapp.localtunnel.me/usuario", data, {headers: {'Content-Type': 'application/json'}}).then(function(res) {
          });
        }
      });
      
      $localStorage.set('access_token', token);
      
      callback(data);
    });
  }

  return usuarioService;
})


.factory('Vehiculo', function ($http, Usuario){
  var vehiculoService = {};
    
  vehiculoService.getVehiculoComentarios = function (placa, callback){
    $http.get("https://stuapp.localtunnel.me/vehiculo/"+placa+"/comentarios").then(function(result) {
      callback(result.data);
    }, function(error) {
        alert(error);
    });
  };
  
  vehiculoService.getVehiculoDenuncias = function (){
    return [
      {titulo: "Choque", fechaCreacion: "28/09/15", imagen: "img/denuncia1.jpg", texto: "El vehiculo fue culpable de un choque espantoso."},
      {titulo: "Terrible accidente", fechaCreacion: "02/10/15", imagen: "img/denuncia2.jpg", texto: "El conductor de este vehiculo fue el que ocacionó este terrible accdiente vehicular."},
    ];
  };
  
  vehiculoService.getVehiculo = function (placa, callback){
    $http.get("https://stuapp.localtunnel.me/vehiculo/"+placa).then(function(result) {      
      callback(result.data);
    }, function(error) {
        alert("Nro de placa no valido!");
    });
  };
  
  vehiculoService.getTopVehiculosBuscados = function (callback){
    $http.get("https://stuapp.localtunnel.me/vehiculo/top").then(function(result) {      
      callback(result.data);
    }, function(error) {
        alert(error);
    });
  };
  
  vehiculoService.postVehiculoComentario = function (placa, texto){
    var data = {
      texto: texto,
      idUsuario: Usuario.data.idUsuario,
    }
    console.log(data);
    $http.post("https://stuapp.localtunnel.me/vehiculo/"+placa+"/comentarios", data, {headers: {'Content-Type': 'application/json'}}).then(function(result) {
      console.log(result);
    });
  }
  
  return vehiculoService;
})