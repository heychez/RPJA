angular.module('stuControllers', [])

.controller('HomeCtrl', function($scope, $cordovaOauth, $http, Usuario) {
  $scope.usuario = {};
  $scope.fbButtonIsHidden = false;
  $scope.usuarioDataIsHidden = true;
  
  function setUsuarioData(){
    $scope.fbButtonIsHidden = true;
    
    $http.get("https://graph.facebook.com/v2.4/me", {params: {access_token: Usuario.getAccessToken(), fields: "id,name,email,picture,gender", format: "json" }}).then(function(result) {
      $scope.usuario.nombre = result.data.name;
      $scope.usuario.imagen = result.data.picture.data.url;
      $scope.usuario.email = result.data.email;
      $scope.usuario.sexo = result.data.gender;
      
      Usuario.data = $scope.usuario;
      
      $scope.usuarioDataIsHidden = false;
    }, function(error) {
        alert(error);
    });
  }
  
  if (Usuario.isLogged()){
    setUsuarioData();
  }
  
  $scope.loginFb = function() {
    $cordovaOauth.facebook("1669858289904059", ["public_profile", "email"]).then(function(result) {
      Usuario.startSession(result.access_token);
      setUsuarioData();
    }, function(error) {
      alert(error);
    });
  }
})

.controller('BusquedaVehiculoCtrl', function($scope) {})
.controller('TopBusquedasCtrl', function($scope) {})
.controller('VehiculoCtrl', function($scope) {})
.controller('VehiculoComentariosCtrl', function($scope) {})
.controller('VehiculoDenunciasCtrl', function($scope) {})
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
