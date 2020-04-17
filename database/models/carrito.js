module.exports = (sequelize, dataTypes) => {
    let alias = "carrito";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        userId: {
            type: dataTypes.STRING,
            allowNull: false
        },
        precioTotal: {
            type: dataTypes.INTEGER,
            allowNull: true,
            dafaultValue: 0
        },
        status: {
            type: dataTypes.STRING,
            allowNull: true
        },
        date: {
            type: dataTypes.DATE,
            allowNull: false
        }
    }
    let config = {
        tableName: "carrito",
        underscored: true,
        timestamps: true
    }


const carrito = sequelize.define(alias,cols,config);
/* relacion con productos */
carrito.associate = function(models){
    carrito.belongsTo(models.productos,{
        as: "productos",
        throught: "producto_carrito",
        foreignKey: "productoId",
        otherKey: "carritoId",
        timestamps: false
    });
}

/* relacion con users */
carrito.associate = function(models){
    carrito.belongsTo(models.users,{
        as: "usuario",
        foreignKey: "userId"
    });
} 

return carrito;

}