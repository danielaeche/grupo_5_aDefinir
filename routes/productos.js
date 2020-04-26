var express = require('express');
var router = express.Router();
var productosControllers= require ('../controllers/productosControllers');

router.get('/', productosControllers.listar);
router.get('/crear', productosControllers.crear);
router.get('/admin', productosControllers.admin);
router.post('/', productosControllers.guardar);
router.get('/detalle/:id', productosControllers.detalle);
router.get('/editar/:id', productosControllers.editar);
router.post('/editar/:id', productosControllers.actualizar);
router.post('/admin/:id', productosControllers.borrar);


module.exports = router;