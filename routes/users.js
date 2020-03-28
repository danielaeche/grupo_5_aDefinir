var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var session = require('express-session');
const { check, validationResult, body } = require('express-validator')


let userValidation = [
  check('email').isEmail().withMessage('El campo debe ser un email valido'),
  check('password').isLength({min:6, max:12}).withMessage('El password debe tener entre 6 y 12 caracteres'),
]


router.get('/register', function (req, res){
  res.render('register')
})

router.post('/register', userValidation, function(req, res){
  let result = validationResult(req)

  if(!result.isEmpty()){
    return res.render('register', {
      errors: result.errors,
      data: req.body
    })
  }

  var username = req.body.email;
  var password = req.body.password;
  var salt = 12;
  //encriptar la password con libreria "bcrypt"
  bcrypt.hash(password, salt, function(err, hash) {
    // guardar el usuario con su pass encriptada (hash) en la base
    var usuario = {"email":username,"password":hash}
    let users = fs.readFileSync('../users.json', {enconding: 'utf-8'})
    users = JSON.parse(users)
    users.push(usuario) 
    users = JSON.stringify(users)
    fs.writeFileSync('../users.json', users)
  });

  res.redirect(301, '/users/login')
})

/* GET login. */
router.get('/login', function(req, res) {
  res.render('login')
})



module.exports = router;