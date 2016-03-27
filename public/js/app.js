/* Main controller definition */

function AppController($scope, stockService, syncService) {
    
  var self = this;
    
  $scope.init = function() {
      createChart('chart-div');
      syncService.syncData();
  }
        
  $scope.init();
    
};

/* End main controller definition */

var app = angular.module('mainModule', []).controller('AppController', ['$scope','stockService','syncService', AppController]);
