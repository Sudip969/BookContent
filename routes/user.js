 // const express = require('express');     //express require
// const router= express.Router();
// const controller = require('../features/user/userController');

// router.post("/insert", controller.postService)

// router.get('/select', controller.selectService)

// router.get('/select/:id',controller.selectService)

// router.delete('/delete/:id',controller.deleteService)

// router.put('/update/:id', controller.updateService)

// module.exports=router;   






// const sequelize= require("./index.js");
// const { DataTypes }= require("sequelize");

// const User = sequelize.define('modelName', {
//     id:{
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//         allowNull: false
//     },
//     name:{
//         type: DataTypes.STRING,
//         allowNull: false
//     },
   
// }, {
//     tableName:"bookdata"
// });
// module. exports = User;




const sequelize= require("./index.js");
const { DataTypes , Model }= require("sequelize");

class User extends Model{}

User.init(
{
    id:
    {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name:
    {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    sequelize,
    modelName:"User",
    tableName:"bookdata",
}
);

module.exports = User;