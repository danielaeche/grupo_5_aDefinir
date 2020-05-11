module.exports = (sequelize, dataTypes) => {
    let alias = "producto_carrito";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        carritoId: {
            type: dataTypes.STRING,
            allowNull: true
        },
        productoId: {
            type: dataTypes.STRING,
            allowNull: true
        },
        cantidad: {
            type: dataTypes.INTEGER,
            allowNull: true
        },
        precioUnitario: {
            type: dataTypes.INTEGER,
            allowNull: true
        },
        subtotal: {
            type: dataTypes.INTEGER,
            allowNull: true
        }
    }
    let config = {
        tableName: "producto_carrito",
        underscored: true,
        timestamps: false
    }


const producto_carrito = sequelize.define(alias,cols,config);

producto_carrito.associate = function(models){
    producto_carrito.belongsTo(models.productos,{
        as: "prods",
        foreignKey: "producto_id"
    });
} 



return producto_carrito;

}