var express = require('express');
var router = express.Router();

router.get('/detalle', function(req, res) {
    res.render('detalle-producto')
  });


module.exports = router;