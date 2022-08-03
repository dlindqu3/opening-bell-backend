const express = require('express'); 

const stocksControllers = require('../controllers/stocks-controller');

const router = express.Router(); 

router.get('/symbol/:symbol', stocksControllers.getStockBySymbol)

router.get('/user/:id', stocksControllers.getStocksByUserId)

// router.post('/create-stock/', stocksControllers.createStockInstance)


module.exports = router; 