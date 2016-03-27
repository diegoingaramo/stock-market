var uuid = require('node-uuid');
var clients = [];

var refs = ["goog", "f", "aapl", "msft"];

wss.on('connection', function connection(ws) {
    
  var client_uuid = uuid.v4();
  clients.push({"id": client_uuid, "ws": ws});
  console.log('client [%s] connected', client_uuid);
    
  /*ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });*/

  ws.send(JSON.stringify(refs));
});

wss.on('close', function() {
    for(var i=0; i<clients.length; i++) {
        if(clients[i].id == client_uuid) {
            console.log('client [%s] disconnected', client_uuid);
            clients.splice(i, 1);
        }
    }
});
