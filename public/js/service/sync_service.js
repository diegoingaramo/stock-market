var syncService = function($http) {
    
  var self = this;
  var ws;
    
  self.syncData = function(){
      connect();
  };
    
  /* private functions */  
  
  var connect = function() {
      
    ws = new WebSocket(getUrl());
      
    ws.onopen = function(e) {
        console.log('Connection to server opened');
    };
      
    ws.onmessage = function(e) {
        var data = JSON.parse(e.data);
        console.log(data);
    };
      
    ws.onclose = function() {
        ws = null;
    };
      
  }
    
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
    
};



app.service('syncService', syncService);