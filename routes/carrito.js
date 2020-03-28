var express = require('express');
var router = express.Router();
var carritoControllers= require ('../controllers/carritoControllers');
var authMiddleware = require('../middlewares/authMiddleware')


router.get('/', authMiddleware, carritoControllers.index);


module.exports = router;