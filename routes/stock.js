var express = require('express');
var sync_service = require('../service/sync_service.js');

var router = express.Router();

/* GET users listing. */

/* POST users listing. */
router.post('/add', function(req, res) {
  
    var stockCode = req.body.stockCode;
    
    var result = sync_service.addStock(stockCode).then(function(data) {
        
        res.status(200).send({success: data});
        
    });
    
});

router.post('/remove', function(req, res) {
  
    var stockCode = req.body.stockCode;
    
    sync_service.removeStock(stockCode);
        
    res.status(200).send({success: 1});
        
});


module.exports = router;
