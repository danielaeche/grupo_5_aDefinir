module.exports = (sequelize, dataTypes) => {
    let alias = "productos";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        categoria: {
            type: dataTypes.STRING,
            allowNull: false
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false
        },
        descripcion: {
            type: dataTypes.STRING,
            allowNull: true
        },
        foto: {
            type: dataTypes.STRING,
            allowNull: true
        },
        precioUnitario: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        fechaUpdate: {
            type: dataTypes.timestamps,
            allowNull: false
        },
        cantidadStock: {
            type: dataTypes.INTEGER,
            allowNull: true
        }
    }
    let config = {
        tableName: "productos",
        underscored: true,
        timestamps: true
    }


const productos = sequelize.define(alias,cols,config);
/* relacion con carrito */
productos.associate = function(models){
    productos.belongsTo(models.carrito,{
        as: "carritos",
        throught: "producto_carrito",
        foreignKey: "carritoId",
        otherKey: "productoId",
        timestamps: false
    });
}
return productos;

}