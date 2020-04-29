let db = require('../../database/models');


const usersApiControllers= {   
        
        listar: function(req,res){
            db.users.findAll()
                .then(function(users){
                    for(let i = 0; i < users.length; i++){
                        users[i].setDataValue("endpoint","/api/users/" + users[i].id )
                    }

                    let respuesta = {
                        meta:{
                            status:200,
                            total:users.length
                        },
                        data:users
                    }
                    res.send(respuesta)
                   
                })
                .catch(err => {
                    res.send('Hubo un error, intentalo mas tarde')
                })
        },
        find: function(req, res){
            db.users.findByPk(req.params.id)
                .then(function(user){
                    res.send(user)
                })
                .catch(err => {
                    res.send('Hubo un error, intentalo mas tarde')
                })
        }    
        
    } 

    module.exports = usersApiControllers;