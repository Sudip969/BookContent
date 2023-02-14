const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("internsudip", "postgres", "Plmnkobji@969", {    //Defining the database
  host: "localhost",
  dialect: "postgres",
});

try {
  sequelize.authenticate();                                   //Connecting to the database
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
module.exports = sequelize;
