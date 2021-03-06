// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('stu', ['ionic', 'stuControllers', 'stuServices', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  })
    .state('busqueda-vehiculo', {
      url: '/busqueda-vehiculo',
      templateUrl: 'templates/busqueda-vehiculo.html',
      controller: 'BusquedaVehiculoCtrl'
    })
      .state('vehiculo', {
        url: '/vehiculos/:placa',
        templateUrl: 'templates/vehiculo.html',
        controller: 'VehiculoCtrl'
      })
        .state('vehiculo-comentarios', {
          url: '/vehiculos/:placa/comentarios',
          templateUrl: 'templates/vehiculo-comentarios.html',
          controller: 'VehiculoComentariosCtrl',
          cache: false
        })
        .state('vehiculo-denuncias', {
          url: '/vehiculos/:placa/denuncias',
          templateUrl: 'templates/vehiculo-denuncias.html',
          controller: 'VehiculoDenunciasCtrl',
          cache: false
        })
        .state('vehiculo-denuncia', {
          url: '/vehiculos/:placa/denuncia',
          templateUrl: 'templates/vehiculo-denuncia.html',
          controller: 'VehiculoDenunciaCtrl'
        })
    .state('top-busquedas', {
      url: '/top-busquedas',
      templateUrl: 'templates/top-busquedas.html',
      controller: 'TopBusquedasCtrl'
    });

  $urlRouterProvider.otherwise('/home');
});
