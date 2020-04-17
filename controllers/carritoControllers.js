let db = require('../database/models');

const carritoControllers= {
    index: function(req, res) {
        res.render('carrito')},

    buscarCarrito: function(req,res){
        db.carrito.findByPk(req,session.carrito).then(data =>{
            res.json({carrito: data})
        })

    },

    agregarProducto: function(req,res){
        //levantar id y cantidad producto
        let {productoId: prodId, qty} = req.body;
        //buscar producto en db
        let producto = await db.producto.findByPk(prodId);        
        //buscar el carrito en session
        //guardar el producto en el carrito
        db.carrito.findByPk(req.session.carrito).then(carrito => {
            carrito.addItem(producto,{ through: {
                cantidad: qty,
                precio: producto.precio
            }})
            res.redirect('/carrito');
        })
    },

    eliminarProducto: function(req,res){
        db.carrito.destroy({
            where: {
            productoId: req.params.producto,
            carritoId: req.session.carrito
        }})
        res.redirect('/');
    }

}
module.exports= carritoControllers;