let db = require('../database/models');

const carritoControllers= {
    /*
    index: function(req, res) {
        res.render('carrito')
    },
    */
    buscarCarrito: function(req,res){
       /* if (req.session.carrito !== undefined && req.session.carrito !== null) {
        db.carrito.findByPk(req.session.carrito).then(data =>{
            res.json({carrito: data})
        })
        } 
        else {*/ db.carrito.create({
                user_id: 2,
                precio_total: 0,
                status: 'abierto'
            })
            .then(function(data){
                return res.redirect('/carrito')
                
            })
            .catch(err => {
                console.log(err);
                
                res.send('Hubo un error, intentalo mas tarde')
            })
        //}
    },

    agregar: async function(req,res){
        //levantar id y cantidad producto
        let {producto_id: prod_id, qty} = req.body;
        //buscar producto en db
        let producto = await db.producto.findByPk(prod_id);        
        //buscar el carrito en session
        //guardar el producto en el carrito
        console.log(producto)
        
        //crear session si no existe
        db.carrito.findByPk(req.session.carrito).then(carrito => {
            console.log(carrito)
            carrito.addItem(producto,{ through: {
                cantidad: qty,
                precioUnitario: producto.precio_unitario 
            }})
            console.log(carrito)
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