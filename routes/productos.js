var express = require('express');
var router = express.Router();
var productosControllers= require ('../controllers/productosControllers');

router.get('/', productosControllers.listar);
router.get('/crear', productosControllers.crear);
router.post('/', productosControllers.guardar);



module.exports = router;