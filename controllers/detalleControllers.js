let db = require('../database/models');

const detalleControllers= {
    index: function(req, res) {
        res.render('detalle-producto')},
    

        mostrarDetalleProducto: function(req,res){
            //buscar producto id
            db.productos.findByPk(req.params.id)
                .then(data => {
                    return res.render('producto/detalle', {productos:data})
                })
                .catch(err => {
                    res.send('Hubo un error, intentalo mas tarde')
                })
        },

}
module.exports= detalleControllers;