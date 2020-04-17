var express = require('express');
var router = express.Router();
var carritoControllers= require ('../controllers/carritoControllers');
var authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, carritoControllers.index);

// listar los productos del carrito
router.get('/', carritoControllers.buscarCarrito);

//agregar productos al carrito
router.post('/', carritoControllers.agregarProducto);

//borrar un producto
router.delete('/:id',carritoControllers.eliminarProducto);

module.exports = router;