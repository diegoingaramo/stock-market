var syncService = function($http) {
    
  var self = this;
    
  self.getStockRefs = function() {
      return $http.get('stock/getStockRefs');
  };
    
};

app.service('syncService', syncService);