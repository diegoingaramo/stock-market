/* Main controller definition */

function AppController($scope, stockService) {
    
  var self = this;
    
  $scope.init = function() {
      createChart('chart-div');
  }
        
  $scope.init();
    
};

/* End main controller definition */

var app = angular.module('mainModule', []).controller('AppController', ['$scope','stockService', AppController]);
