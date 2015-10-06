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
    data: {},
    access_token: 'CAAXuui4x6bsBAJl5Ewa8chCHtT6ASC8sN7CDa9ZAQjkB7zMe708ke1X4c3OZBa556wOpSMJJ1jIaR2D2yPch1Hq4QAFPE8GDINETpR4ktfIvKgdLB5CbUo4pbSEZBksQdLSGKA3FIZBFvc8pjdqaaIl2pLydAGmZAZBBfwFJ8pI8nmulawTkSxY5phL5PrROuZAYziE7VualAZDZD'
  };
  
  usuarioService.startSession = function (access_token){
//    usuarioService.access_token = access_token;
    $localStorage.set('access_token', access_token);
  }
  
  usuarioService.getAccessToken = function (){
//    return usuarioService.access_token;
    return $localStorage.get('access_token');
  }
  
  usuarioService.isLogged = function (){
//    return false;
    return $localStorage.get('access_token');
  }

  return usuarioService;
});
