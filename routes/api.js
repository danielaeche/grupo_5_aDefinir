var express = require('express');
var router = express.Router();
var usersApiControllers = require ('../controllers/api/usersApiControllers');
var productosApiControllers = require ('../controllers/api/productosApiControllers');
var apiControllers = require ('../controllers/api/apiControllers');

router.get('/',apiControllers.listar);
router.get('/users', usersApiControllers.listar);
router.get('/users/:id', usersApiControllers.find);

router.get('/productos', productosApiControllers.listar);
router.get('/productos/:id', productosApiControllers.find);

module.exports = router;