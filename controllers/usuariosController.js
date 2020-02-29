let db = require('../database/models');

let usuariosController = {
    
    detalle: function(req,res){
        //buscar un usuario por id
        db.users.findByPk(req.params.id)
            .then(data => {
                return res.render('/*falta armar pagina de usuario*/', {user:data})
            })
            .catch(err => {
                res.send('Hubo un error, intentalo mas tarde')
            })
    },

    crear: function(req,res){
        
        db.user.create({
            mail: req.body.mail,
            password: req.body.password,
            foto: req.body.foto,
            createAt: req.body.createAt
        })
        .then(function(data){
            return res.redirect(301, '/register')
            
        })
        .catch(err => {
            res.send('Hubo un error, intentalo mas tarde')
        })

    },

    editar: function(req,res){
        
        db.user.findByPk(req.params.id)
        .then(usuario => {
            return res.render('/*falta armar pagina de usuario*/', {user:usuario})
        })
        .then(usuario => {
            usuario.updateAttributes({
                password: req.body.password,
                foto: req.body.foto})
        })
        .catch(err => {
            res.send('Hubo un error, intentalo mas tarde')
        })
        
        
    }
    

    
}

module.exports = usuariosController;