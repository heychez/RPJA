angular.module('stuControllers', [])

.controller('HomeCtrl', function($scope, $cordovaOauth, $http, Usuario) {
  $scope.usuario = {};
  $scope.fbButtonIsHidden = false;
  $scope.usuarioDataIsHidden = true;
    
  if (Usuario.isLogged()){
      $scope.fbButtonIsHidden = true;
      Usuario.getUsuario(function(resp){
        $scope.usuario = resp;
        $scope.usuarioDataIsHidden = false;
      });
  }
  
  $scope.loginFb = function() {
    $cordovaOauth.facebook("1669858289904059", ["public_profile", "email"]).then(function(result) {
      $scope.fbButtonIsHidden = true;
      
      Usuario.login(result.access_token, function (resp){
        $scope.usuario = resp;
        $scope.usuarioDataIsHidden = false;
      });
    }, function(error) {
      alert(error);
    });
  }
})

.controller('BusquedaVehiculoCtrl', function($scope, Vehiculo) {
})

.controller('VehiculoCtrl', function($scope, $stateParams, Vehiculo) {
  Vehiculo.getVehiculo($stateParams.placa, function (resp){
    $scope.vehiculo = resp;
  });
})

.controller('VehiculoComentariosCtrl', function($scope, $stateParams, Vehiculo) {
  $scope.placa = $stateParams.placa;
  
  Vehiculo.getVehiculoComentarios($stateParams.placa, function (resp){
    $scope.comentarios = resp;
  });
  
  $scope.comentar = function(placa, texto){
    Vehiculo.postVehiculoComentario(placa, texto);
  }
})

.controller('VehiculoDenunciasCtrl', function($scope, $stateParams, Vehiculo) {
  $scope.denuncias = Vehiculo.getVehiculoDenuncias($stateParams.placa);
})

.controller('TopBusquedasCtrl', function($scope, Vehiculo) {
  Vehiculo.getTopVehiculosBuscados(function (resp){
    $scope.vehiculos = resp;
  });
})

.controller('VehiculoDenunciaCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
