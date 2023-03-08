const express = require('express');
const routes = require('./routes');


const db = require("./database/index");

const app = express();

db.hasConection();

app.use(express.json());

app.use(routes);

app.listen(8080, () => console.log("Servidor rodando na porta 8080"));

