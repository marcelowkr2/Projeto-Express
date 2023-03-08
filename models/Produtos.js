const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define("users", {
   id:{
    type: Sequelize.INTEGER,
     autoIncrement: true,
     allowNull: true,
     primaryKey: true
   },
   nome:{
    type: Sequelize.STRING,
   },
   preco: {
    type: Sequelize.FLOAT,
   },
   quantidade: {
    type: Sequelize.INTEGER,
   },
   createdAt: {
    type: Sequelize.DATE,
   },
   updatedAt: {
    type: Sequelize.DATE,
   },
}, {
    tableName: "Produtos",
});

User.sync();
module.exports = User;