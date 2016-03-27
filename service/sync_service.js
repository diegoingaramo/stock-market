var uuid = require('node-uuid');
var yahooFinance = require('yahoo-finance');

var clients = [];

var refs = ["aapl", "msft"];

wss.on('connection', function connection(ws) {
    
  var client_uuid = uuid.v4();
  clients.push({"id": client_uuid, "ws": ws});
  console.log('client [%s] connected', client_uuid);
    
  var data = [];
  refs.forEach(function (stockName, index, array){
    yahooFinance.snapshot({
      symbol: stockName.toUpperCase(),
      fields: ['s', 'n', 'd1', 'l1', 'y', 'r']
    }, function (err, snapshot) {
        console.log(snapshot);
        data.push({id: stockName.toUpperCase(), description: snapshot.name});
        
        if (index == array.length - 1)
            ws.send(JSON.stringify(data));
    });    
  });
  
        
});

wss.on('close', function() {
    for(var i=0; i<clients.length; i++) {
        if(clients[i].id == client_uuid) {
            console.log('client [%s] disconnected', client_uuid);
            clients.splice(i, 1);
        }
    }
});
