var express = require('express');
var router = express.Router();
var productosControllers= require ('../controllers/productosControllers');

router.get('/', productosControllers.listar);
router.get('/crear', productosControllers.crear);
router.post('/', productosControllers.guardar);
router.get('/:id', productosControllers.detalle);
router.get('/:id/editar', productosControllers.editar);
router.put('/:id', productosControllers.actualizar);
router.delete('/:id', productosControllers.borrar);


module.exports = router;