/* Main controller definition */

function AppController($scope, stockService, syncService) {
    
  var self = this;
    
  $scope.stocks = syncService.refs;
  $scope.newStock = "";
  $scope.showCodeError = false;
    
  $scope.init = function() {
      createChart('chart-div');
  };
    
  $scope.addStock = function(){
    $scope.showCodeError = false;
    stockService.addStock($scope.newStock).then(function(result) {
        if (result.data.success == 0)
            $scope.showCodeError = true;
        $scope.newStock = "";
    });
  };
    
  $scope.removeStock = function(stock){
    stockService.removeStock(stock.id);
  };
    
    
  $scope.addStockKeyPress = function(keyEvent){
      if (keyEvent.which === 13)
          $scope.addStock();
  };
  
  
        
  $scope.init();
    
};

/* End main controller definition */

var app = angular.module('mainModule', ['ngWebSocket']).controller('AppController', ['$scope','stockService','syncService', AppController]);
