var stockService = function($http) {
    
  var self = this;
    
  self.searchStockInfo = function(stockName) {
      return $http.get('https://www.highcharts.com/samples/data/jsonp.php?filename=' + stockName.toLowerCase() + '-c.json&callback=?');
  };
    
};

app.service('stockService', stockService);