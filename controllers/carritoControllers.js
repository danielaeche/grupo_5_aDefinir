let db = require('../database/models');

const carritoControllers= {
    
    index: async function(req, res) {
        let nroCarro = 2
        let usuario = req.session.user
        console.log("user: "+usuario)

        db.producto_carrito.findAll( {
            include: ['prods'],
            where: {
                carritoId: 2
            }})
        .then(function(data){
            res.render('carrito',{producto_carrito:data});
        })
    },
    
    buscarCarrito: function(req,res){
       
        db.carrito.findByPk(req.session.carrito).then(data =>{
            res.json({carrito: data})
        })
        
      
    },

    agregar: async function(req,res){
//async
       // let nro_carrito = req.session.carrito
       // console.log("nroCarrito: "+nro_carrito)
        let producto = req.body.producto_id
        let precio = req.body.producto_precio
        let total = 0
        let nombreProducto = await db.productos.findByPk(producto)
        console.log(nombreProducto.nombre)

        db.carrito.findOne({ 
            where:{
                id: 2
            } 
        }).then (carrito => {
            total = carrito.precioTotal
            console.log("total "+ total)
            let temptotal = total;
            total = temptotal + precio;
            console.log("total + precio "+ total)
           
            carrito.update({
                precioTotal: total,
                status: 'abierto'
            }, {
                where: {
                    id: 2
                }
            })
            db.producto_carrito.create({
                carritoId: 2,
                productoId: producto,
                cantidad: 1,
                precioUnitario: precio,
                subtotal: precio
            })
            .then(function(carro){
                db.producto_carrito.findAll( {
                    include: ['prods'],
                    where: {
                        carritoId: 2
                    }})
                .then(function(data){
                    res.render('carrito',{producto_carrito:data});
                })
                .catch(err => {
                    res.send('Hubo un error, intentalo mas tarde')
                })
            })

/*            db.producto_carrito.findAll( {
                where: {
                    carritoId: 2
                }})
            .then(function(data){
                res.render('carrito',{producto_carrito:data});
            })
            .catch(err => {
                res.send('Hubo un error, intentalo mas tarde')
            })
*/
        })
        
        
        
/*
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
        */
    },

    eliminar: function(req,res){
        let nroCarro = 2 //req.session.carrito.id
        db.producto_carrito.destroy({
            where: {
            producto_id: req.params.id,
            carrito_id: nroCarro
        }})
        res.redirect('/carrito');
    }

}
module.exports= carritoControllers;