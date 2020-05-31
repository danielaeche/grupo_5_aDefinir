let db = require('../../database/models');

const apiControllers = {

    listar: function(req,res){
        db.index.findAll()
            .then(function(data){
                for(let i = 0; i < data.length; i++){
                    data[i].setDataValue("endpoint","/api/")
                }

                let respuesta = {
                    meta:{
                        status:200,
                        total:data.length
                    },
                    data:data
                }
                res.send(respuesta)
               
            })
            .catch(err => {
                res.send('Hubo un error, intentalo mas tarde')
            })
    },
    
}

module.exports = apiControllers;