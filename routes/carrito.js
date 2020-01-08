var express = require('express');
var router = express.Router();


router.get('/carrito', function(req, res) {
    res.render('carrito')
  });


module.exports = router;