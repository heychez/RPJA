// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('stu', ['ionic', 'stu.controllers'])

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
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/app.html'
    })
    .state('app.home', {
      url: '/home',
      views: {
        'home': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })
      .state('app.busqueda-vehiculo', {
        url: '/busqueda-vehiculo',
        views: {
          'home': {
            templateUrl: 'templates/busqueda-vehiculo.html',
            controller: 'BusquedaVehiculoCtrl'
          }
        }
      })
        .state('app.vehiculo', {
          url: '/vehiculos/:vehiculoId',
          views: {
            'home': {
              templateUrl: 'templates/vehiculo.html',
              controller: 'VehiculoCtrl'
            }
          }
        })
          .state('app.vehiculo-comentarios', {
            url: '/vehiculos/:vehiculoId/comentarios',
            views: {
              'home': {
                templateUrl: 'templates/vehiculo-comentarios.html',
                controller: 'VehiculoComentariosCtrl'
              }
            }
          })
          .state('app.vehiculo-denuncias', {
            url: '/vehiculos/:vehiculoId/denuncias',
            views: {
              'home': {
                templateUrl: 'templates/vehiculo-denuncias.html',
                controller: 'VehiculoDenunciasCtrl'
              }
            }
          })
          .state('app.vehiculo-denuncia', {
            url: '/vehiculos/:vehiculoId/denuncia',
            views: {
              'home': {
                templateUrl: 'templates/vehiculo-denuncia.html',
                controller: 'VehiculoDenunciaCtrl'
              }
            }
          })
      .state('app.top-busquedas', {
        url: '/top-busquedas',
        views: {
          'home': {
            templateUrl: 'templates/top-busquedas.html',
            controller: 'TopBusquedasCtrl'
          }
        }
      });

  $urlRouterProvider.otherwise('/app/home');
});
