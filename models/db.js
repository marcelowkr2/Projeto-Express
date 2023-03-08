const Sequelize = require('sequelize');

const sequelize = new Sequelize("mpopires", "root", "",{
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log("Banco de dados conectado");
    }).catch(function(){
        console.log("Erro de conexão");
    });

module.exports = sequelize;