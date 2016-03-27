var stockService = function($http) {
    
  var self = this;
    
  self.searchStockInfo = function(stockName) {
      //return $http.get('http://www.highcharts.com/samples/data/jsonp.php?filename=' + stockName.toLowerCase() + '-c.json&callback=?');
      return $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=' + stockName.toLowerCase() + '-c.json&callback=?');
  };
    
};

app.service('stockService', stockService);