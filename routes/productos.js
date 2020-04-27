var express = require('express');
var router = express.Router();
var productosControllers= require ('../controllers/productosControllers');

router.get('/', productosControllers.listar);
router.get('/crear', productosControllers.crear);
router.post('/', productosControllers.guardar);
router.get('/:id/editar', productosControllers.editarProducto);
/*router.put('/:id', productosControllers.actualizar);*/
router.delete('/:id', productosControllers.eliminarProducto);
router.get('/detalle', productosControllers.paginaDetalleProducto);
router.get('/detalle/:id', productosControllers.mostrarDetalleProducto)


/* Dashboard */




module.exports = router;