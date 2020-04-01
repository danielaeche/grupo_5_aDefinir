var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var session = require('express-session');
var fs = require('fs');
var usersControllers= require ('../controllers/usersControllers');
var bcrypt = require('bcrypt');
const { check, validationResult, body } = require('express-validator');
const db = require('../database/models/users');

let userValidation = [
  check('email').isEmail().withMessage('El campo debe ser un email valido'),
  check('password').isLength({min:6, max:12}).withMessage('El password debe tener entre 6 y 12 caracteres'),
]

function ocultar(){
  document.getElementById('buttons-home').style.display = 'none';
  }

router.get('/register', usersControllers.index)

router.post('/register', userValidation, function(req, res){
  let result = validationResult(req)
  //consulta base de datos si el usuario ya se encuentra registrado o si hay error al cargar algun dato
  db.users.count({ where: { email: req.body.email } }).then(count => {
    if (count != 0) {
      return res.render("register", {
        errors: [{ msg: "El email que ingresó ya se encuentra regitrado!" }],
        data: req.body
      });
    } else {
      if (!result.isEmpty()) {
        return res.render("register", {
          errors: result.errors,
          data: req.body
        });
      }
      //si está todos los datos OK, crear usuario en base de datos. Y enviarlo a página Login
      else {
        db.users.create({
          mail: req.body.email,
          password: bcrypt.hashSync(req.body.password, 10),
          foto: req.files[0].filename
        });
          //document.getElementsByClass('btn btn-outline-success').style.display = 'none';
        return res.redirect("/users/login");
      }
    }
  })
});

/* GET login. */
router.get('/login', usersControllers.login)

/* POST login*/
router.post('/login', userValidation, function(req, res){
  let result = validationResult(req);
  if (result.isEmpty()) {
    db.users.findAll({ where: { mail: req.body.email } })
      .then(data => {
        if (bcrypt.compareSync(req.body.password, data.password)) {
          req.session.userName = data.email 
          res.redirect("/users/perfil");
        } else {
          res.render("login", {
            errors: [{msg: "Credenciales incorrectas"}]
          });
        }
      })
      .catch(function(error){
        res.render("login", {
          errors: [{msg: "Credenciales incorrectas"}]
        })
      })
  } else {
    res.render("login", 
      { errors: result.errors, data: req.body 
    });
  }
})


module.exports = router;