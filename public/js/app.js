/* Main controller definition */

function AppController($scope, stockService, syncService) {
    
  var self = this;
    
  $scope.stocks = syncService.refs;
    
  $scope.init = function() {
      createChart('chart-div');
  }
        
  $scope.init();
    
};

/* End main controller definition */

var app = angular.module('mainModule', ['ngWebSocket']).controller('AppController', ['$scope','stockService','syncService', AppController]);
