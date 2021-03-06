var express = require('express');
var router = express.Router();
var carritoControllers= require ('../controllers/carritoControllers');
var authMiddleware = require('../middlewares/authMiddleware');

router.get('/', carritoControllers.index);

// listar los productos del carrito
//router.get('/', authMiddleware, carritoControllers.buscarCarrito);
//router.get('/', carritoControllers.buscarCarrito);

//agregar productos al carrito
router.post('/', carritoControllers.agregar);

//borrar un producto
router.post('/:id',carritoControllers.eliminar);

module.exports = router;