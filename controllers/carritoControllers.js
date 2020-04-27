let db = require('../database/models');

const carritoControllers= {
    /*
    index: function(req, res) {
        res.render('carrito')
    },
    */
    buscarCarrito: function(req,res){
        db.carrito.findByPk(req,session.carrito).then(data =>{
            res.json({carrito: data})
        })
    },

    agregar: async function(req,res){
        //levantar id y cantidad producto
        let {producto_id: prod_id, qty} = req.body;
        //buscar producto en db
        let producto = await db.producto.findByPk(prod_id);        
        //buscar el carrito en session
        //guardar el producto en el carrito
        db.carrito.findByPk(req.session.carrito).then(carrito => {
            carrito.addItem(producto,{ through: {
                cantidad: qty,
                precioUnitario: producto.precio_unitario 
            }})
            res.send('Producto agregado al carrito');
        })
    },

    eliminar: function(req,res){
        db.carrito.destroy({
            where: {
            producto_id: req.params.producto.id,
            carrito_id: req.session.carrito.id
        }})
        res.redirect('/');
    }

}
module.exports= carritoControllers;