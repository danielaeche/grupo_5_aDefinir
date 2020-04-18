let db = require('../database/models');

const productosControllers= {   
        listar: function(req,res){
            db.productos.findAll()
                .then(function(data){
                    return res.render('productos/listar', {productos:data})
                   
                })
                .catch(err => {
                    res.send('Hubo un error, intentalo mas tarde')
                })
        },    
        
    
        crear: function(req,res){
            // traer las categorias
           
           /* db.categoria.findAll()
            .then(function(cats){
                //devolver formulario de alta de productos
                return res.render('productos/crear',{categorias: cats})
            })
            .catch(err => {
                console.log(err)
                res.send('Hubo un error, intentalo mas tarde')
            })*/

            let categorias = ["productos", "bolsones"]
            return res.render('productos/crear',{categorias})
    
        },
    
        guardar:function(req,res){
            // recibir los datos por post
            // validar los datos
            // guardar en la base de datos a traves del modelo
    
            db.productos.create({
                categoria: req.body.categoria,
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                //foto: req.body.foto,
                precioUnitario: req.body.precioUnitario
            })
            .then(function(data){
                return res.redirect('/productos')
                
            })
            .catch(err => {
                console.log(err);
                
                res.send('Hubo un error, intentalo mas tarde')
            })
        },
    
        editarProducto:function(req,res){
            // buscar el producto a editar

            // agregar cambios a la base
            db.productos.update({
                categoria: req.body.categoria,
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                //foto: req.body.foto,
                precioUnitario: req.body.precioUnitario,
                fechaUpdate: req.body.fechaUpdate
            })
            .then(function(data){
                return res.redirect(301, '/adminProductos')
                
            })
            .catch(err => {
                res.send('Hubo un error, intentalo mas tarde')
            })
        },

        eliminarProducto: function(req, res){
            db.productos.destroy({
                where: {
                productoId: req.params.producto
            }}) 
            .then(function(data){
                return res.redirect(301, '/adminProductos')
            })
        }
    
}
module.exports= productosControllers;