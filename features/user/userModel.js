const sequelize = require("../../DBconnection.js");
const { DataTypes, Model } = require("sequelize");

class User extends Model {}                   //Creating model by extending Model

User.init(                                    //Define the Schema object
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "bookdata",
  }
);

module.exports = User;
