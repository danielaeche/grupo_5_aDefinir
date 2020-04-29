var express = require('express');
var router = express.Router();
var usersApiControllers = require ('../../controllers/api/usersApiControllers')

router.get('/', usersApiControllers.listar);
router.get('/:id', usersApiControllers.find);

module.exports = router;