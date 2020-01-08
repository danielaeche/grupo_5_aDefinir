var express = require('express');
var router = express.Router();

router.get('/bolsones', function(req, res) {
    res.render('bolsones')
  });


module.exports = router;