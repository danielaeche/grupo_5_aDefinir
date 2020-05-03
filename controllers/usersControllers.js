var bcrypt = require('bcrypt');
var session = require('express-session');
var bcrypt = require('bcrypt');
var {check, validationResult, body} = require('express-validator');
const db = require('../database/models');


const usersControllers= {

   
    index: function(req, res) {
        res.render('./usuario/register')
    },

    crear:function(req, res){
      
        let errors = validationResult(req)

        //consulta base de datos si el usuario ya se encuentra registrado o si hay error al cargar algun dato
        if(errors.isEmpty()){
          db.users.count({ where: { mail:req.body.email } }).then(count => {
            
            if (count != 0) {
              return res.render("./usuario/register", {
                errors: [{ msg: "El e-mail ya se encuentra registrado!" }],
                data: req.body
              })
            }//si está todos los datos OK, crear usuario en base de datos. Y enviarlo a página Login
            else{
              db.users.create({
                name:req.body.name,
                mail: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10)
              });
            return res.redirect("/users/login");
            }
          })
        }else{
          return res.render('./usuario/register',{errors: errors.errors})
        }
        
      },

    login: function(req, res) {
        res.render('./usuario/login')
    },

    ingresar: function(req, res){
      
      let errors = validationResult(req)

      if (errors.isEmpty()) {
        db.users.findOne({ where: { mail: req.body.email } })
          .then(user => {
            var result = bcrypt.compareSync(req.body.password, user.password);
            if (result) {
              req.session.user = user;
              res.locals.user = req.session.user;
              res.redirect("/users/perfil");
            } else {
              res.render("./usuario/login", {
                errors: [{msg: "Credenciales incorrectas"}]
              });
            }
          })
          .catch(function(error){
            res.render("./usuario/login", {
              errors: [{msg: "Credenciales incorrectas"}]
            })
          })
      } else {
        res.render("./usuario/login", { errors: errors.errors, data: req.body });
      }
    },
    perfil: function(req, res) {
        res.render('./usuario/perfil')
      },

      modificarPerfil: function(req,res){
        console.log("MOSTRAR ID" + req.params.id);
        db.users.update({

          name:req.body.name,
          mail:req.body.email,
        },{
          where: {
            id:1
          }
        })
          return res.redirect('/users/perfil') 
         
      .catch(err => {
          res.send('Hubo un error, intentalo mas tarde')
      })
      },    
}
 module.exports = usersControllers;