moment.locale('es');

angular.module('stuControllers', [])

.controller('HomeCtrl', function ($scope, $cordovaOauth, $http, Usuario) {
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
      alert(JSON.stringify(error));
    });
  }
})

.controller('BusquedaVehiculoCtrl', function ($scope, Vehiculo) {
})

.controller('VehiculoCtrl', function ($scope, $stateParams, Vehiculo) {
  Vehiculo.getVehiculo($stateParams.placa, function (resp){
    $scope.vehiculo = resp;
  });
})

.controller('VehiculoComentariosCtrl', function ($scope, $stateParams, Vehiculo) {
  $scope.placa = $stateParams.placa;
  $scope.texto = "";
  $scope.infoIsHidden = false;
  $scope.infoText = 'Buscando..';

  function renderComentarios(resp){
    if (resp.length == 0){
      $scope.infoText = 'Sin comentarios.';
    }else{
      $scope.infoIsHidden = true;

      angular.forEach(resp, function (comentario){
        comentario.fechaCreacion = moment(comentario.fechaCreacion).fromNow();
      });
      $scope.comentarios = resp.reverse();
    }
  }
  
  Vehiculo.getVehiculoComentarios($stateParams.placa, function (resp){
    renderComentarios(resp);
  });
  
  $scope.comentar = function (placa, texto){
    //$scope.texto = null;
    Vehiculo.postVehiculoComentario(placa, texto, function (){
      Vehiculo.getVehiculoComentarios($stateParams.placa, function (resp){
        renderComentarios(resp);
      });
    });
  }
})

.controller('VehiculoDenunciasCtrl', function ($scope, $stateParams, Vehiculo) {
  $scope.placa = $stateParams.placa;
  $scope.infoIsHidden = false;
  $scope.infoText = 'Buscando..';

  Vehiculo.getVehiculoDenuncias($stateParams.placa, function (resp){
    if (resp.length == 0){
      $scope.infoText = 'No hay denuncias registradas.';
    }else{
      $scope.infoIsHidden = true;

      angular.forEach(resp, function (denuncia){
        denuncia.fechaCreacion = moment(denuncia.fechaCreacion).format("LLLL");
      });
      $scope.denuncias = resp.reverse();
    }
  });
})

.controller('TopBusquedasCtrl', function ($scope, Vehiculo) {
  $scope.infoIsHidden = false;
  $scope.infoText = 'Buscando..';

  Vehiculo.getTopVehiculosBuscados(function (resp){
    if (resp.length == 0){
      $scope.infoText = 'No hay vehiculos registrados.';
    }else{
      $scope.infoIsHidden = true;
      $scope.vehiculos = resp;
    }
  });
})

.controller('VehiculoDenunciaCtrl', function ($scope, $stateParams, $cordovaCamera, $ionicHistory, Vehiculo) {
  $scope.placa = $stateParams.placa;

  $scope.tomarFoto = function (){
    var options = {
      quality: 75,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      targetWidth: 400,
      targetHeight: 600,
      allowEdit: false,
      encodingType: Camera.EncodingType.JPEG,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: true,
      correctOrientation:false
    };

    $cordovaCamera.getPicture(options).then(function (imageData) {
      $scope.imagenUri = "data:image/jpeg;base64," + imageData;
    }, function(error) {
      alert(JSON.stringify(error));
    });
  }

  $scope.seleccionarImagen = function (){
    var options = {
      /*destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,*/
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: 0
    };

    $cordovaCamera.getPicture(options).then(function(imageURI) {
      $scope.imagenUri = imageURI;
    }, function(error) {
      alert(JSON.stringify(error));
    });
  }

  $scope.denunciar = function (placa, titulo, descripcion, imagenUri){
    Vehiculo.postVehiculoDenuncia(placa, titulo, descripcion, imagenUri, function (){
      $ionicHistory.goBack();
    });
  }
})

/*
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
*/
