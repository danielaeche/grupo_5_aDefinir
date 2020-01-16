var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
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
    var usuario = {"email":"username","password":"hash"}
    let users = fs.readFileSync('src/data/users.json', {enconding: 'utf-8'})
    users = JSON.parse(users)
    users.push(usuario) 
    users = JSON.stringify(users)
    fs.writeFileSync('src/data/users/.json', users)
  });
  
  res.redirect(301, '/users/login')
})

/* GET login. */
router.get('/login', function(req, res) {
  res.render('login')
})

/* POST login*/
router.post('/login', userValidation, function(req, res){
  let result = validationResult(req)

  if(!result.isEmpty()){
    return res.render('login', {
      errors: result.errors,
      data: req.body
    })
  }
  
  // comparar usuario y password
  const email = req.body.email;
  const password = req.body.password;

  var emailAlmacenado = null;
  let users = fs.readFileSync('src/data/users.json', {enconding: 'utf-8'})
  users = JSON.parse(users)
  for(let i; i< users.length(); i++){
    if (req.body.email == users[i].email){
        emailAlmacenado = users[i].email;
        bcrypt.compare(req.body.password, users[i].password, function(err, res) {
          if(res) {
            // Passwords match
            res.redirect(301, '/users/welcome')
          } else {
          // Passwords don't match
            res.withMessage('Password invalido')
          } 
        })
    }
  }  
 
  
})


module.exports = router;
