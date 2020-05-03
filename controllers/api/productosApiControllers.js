let db = require('../../database/models');


const productosApiControllers= {   
        
        listar: function(req,res){
            db.productos.findAll()
                .then(function(productos){
                    for(let i = 0; i < productos.length; i++){
                        productos[i].setDataValue("endpoint","/api/productos/" + productos[i].id )
                    }

                    let respuesta = {
                        meta:{
                            status:200,
                            total:productos.length
                        },
                        data:productos
                    }
                    res.send(respuesta)
                   
                })
                .catch(err => {
                    res.send('Hubo un error, intentalo mas tarde')
                })
        },
        
        find: function(req, res){
            db.productos.findByPk(req.params.id)
                .then(function(producto){
                    res.send(producto)
                })
                .catch(err => {
                    res.send('Hubo un error, intentalo mas tarde')
                })
        }
        
    } 

    module.exports = productosApiControllers;