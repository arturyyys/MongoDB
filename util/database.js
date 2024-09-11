const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "88888888", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
