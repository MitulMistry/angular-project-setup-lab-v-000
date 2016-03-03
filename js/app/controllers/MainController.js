function MainController($scope) {
  $scope.name = 'PUT YOUR NAME HERE!';
}

//we need to tell Angular about our controller
angular
  .module('app')
  .controller('MainController', MainController);