var express = require('express');
var router = express.Router();
var productosApiControllers = require ('../../controllers/api/productosApiControllers')

router.get('/', productosApiControllers.listar);
router.get('/:id', productosApiControllers.find);

module.exports = router;