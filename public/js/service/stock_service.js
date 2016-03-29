var stockService = function($http) {
    
  var self = this;
    
  self.searchStockInfo = function(stockCode) {
      //return $http.get('http://www.highcharts.com/samples/data/jsonp.php?filename=' + stockName.toLowerCase() + '-c.json&callback=?');
      return $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=' + stockCode.toLowerCase() + '-c.json&callback=?');
  };
    
  self.addStock = function(stockCode) {
      return $http.post('stock/add', {
          stockCode: stockCode
      });
  }
  
  self.removeStock = function(stockCode) {
      return $http.post('stock/remove', {
          stockCode: stockCode
      });
  }
    
};

app.service('stockService', stockService);