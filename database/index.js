const Sequelize = require("sequelize");

const DB_NAME = "loja";
const DB_USER = "root";
const DB_PASS = "";

const DB_CONFIG = {
    dialect: "mysql",
    host: "localhost",
    port: 3306
};

//objeto para quardar a conexão do banco de dados pode colocar qualquer nome.
let db = {};

try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} 
catch (error) {
    console.error("Error ao tentar conectar Banco de dados");
}

async function hasConection(){
    try{
        await db.authenticate();
        console.log("Banco de dados conectado");
    }catch (error){
        console.error("Erro ao tentar conectar ao Banco de Dados");
    }
}

Object.assign(db, {
    hasConection,
});

module.exports = db;