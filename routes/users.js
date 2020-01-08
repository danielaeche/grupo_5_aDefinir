var express = require('express');
var router = express.Router();
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
  let users = fs.readFileSync('src/data/users.json', {enconding: 'utf-8'})
  users = JSON.parse(users)
  users.push(req.body)
  users = JSON.stringify(users)
  fs.writeFileSync('src/data/users/.json', users)
  
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
  res.redirect(301, '/users/welcome')
})


module.exports = router;
