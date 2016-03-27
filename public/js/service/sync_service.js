var syncService = function($websocket, $http, $rootScope, stockService) {
    
  var self = this;
  var ws;
    
  self.refs = [];
  
  /* private functions */  
    
  var getUrl = function(){
      var loc = window.location, new_uri;
      if (loc.protocol === "https:") {
        new_uri = "wss:";
      } else {
        new_uri = "ws:";
      }
      new_uri += "//" + loc.host;
      //new_uri += loc.pathname + "/to/ws";
      return new_uri
  };
    
  // Open a WebSocket connection
  ws = $websocket(getUrl());
    
  ws.onMessage(function(message) {
      
    //update stock
    JSON.parse(message.data).forEach(function(stock, index, array){
        self.refs.push(stock);
        cleanChart('chart-div');
        stockService.searchStockInfo(stock.id).then(function(data){
            addSeries('chart-div',stock.id,data);
        },function(reason) {
            console.log(reason); // Error!
        });
    });
      
  });
    
  ws.onclose = function() {
    ws = null;
  };
      
};



app.service('syncService', syncService);