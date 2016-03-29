var uuid = require('node-uuid');
var yahooFinance = require('yahoo-finance');

module.exports = {
    
  initialize: function() {
      
    //refs initialization - AAPL - MSFT - GOOG
    stocks = [];
      
    //client initialization
    clients = [];
      
    wss.on('connection', function connection(ws) {
    
        var client_uuid = uuid.v4();
        clients.push({"id": client_uuid, "ws": ws});
        console.log('client [%s] connected', client_uuid);

        ws.on('close', function() {
          for(var i=0; i<clients.length; i++) {
            if(clients[i].id == client_uuid) {
                console.log('client [%s] disconnected', client_uuid);
                clients.splice(i, 1);
            }
          }
        });
        
        ws.send(JSON.stringify(stocks));
    
    });
        
  },
    
  addStock: function(stockCode){
      return new Promise(function(resolve, reject){
          
          var duplicate = false;
          stocks.forEach(function(stock, index, array){
              if (stock.id.toUpperCase() == stockCode.toUpperCase()){
                  resolve(-1);
                  duplicate = true;
              }
          });

          if (!duplicate){
              yahooFinance.snapshot({
                symbol: stockCode.toUpperCase(),
                fields: ['s', 'n', 'd1', 'l1', 'y', 'r']
              }, function (err, snapshot) {

                if (err || !snapshot.name) 
                    resolve(0);
                else{
                    stocks.push({id: stockCode.toUpperCase(), description: snapshot.name});
                    clients.forEach(function(client,index,array){
                        client.ws.send(JSON.stringify(stocks));
                    
                        if(index == array.length - 1)
                            resolve(1);
                    });  
                }   
            });
         }
      });
  },
    
  removeStock: function(stockCode){
      stocks.forEach(function(stock, index, array){
              if (stock.id.toUpperCase() == stockCode.toUpperCase()){
                  array.splice(index,1);
              }
      });
      clients.forEach(function(client,index,array){
        client.ws.send(JSON.stringify(stocks));                            
      }); 
  }
    
};
