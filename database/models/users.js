module.exports = (sequelize, dataTypes) => {
    let alias = "users";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING,
            allowNull: true
        },
        mail: {
            type: dataTypes.STRING,
            allowNull: false
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        },
        foto: {
            type: dataTypes.STRING,
            allowNull: true
        },
        created_at: {
            type: dataTypes.DATE,
            allowNull: true
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true
        }
    }
    let config = {
        tableName: "users",
        underscored: true,
        timestamps: true
    }


const users = sequelize.define(alias,cols,config);

/* relacion con carrito 
users.associate = function(models){
    users.hasMany(models.carrito,{
        as: "carritos",
        foreignKey: "userId"
    });
} */

return users;

}