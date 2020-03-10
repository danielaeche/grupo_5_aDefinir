var express = require('express');
var router = express.Router();
var productosControllers= require ('../controllers/detalleControllers');

router.get('/', detalleControllers.index);


module.exports = router;