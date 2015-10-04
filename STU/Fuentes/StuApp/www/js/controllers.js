angular.module('stu.controllers', [])

.controller('HomeCtrl', function($scope, $cordovaOauth) {
  $scope.loginFb = function() {
    console.log("loginFb()");
    $cordovaOauth.facebook("1669858289904059", ["email"]).then(function(result) {
        alert(result.access_token);
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
