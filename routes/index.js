const express = require("express");
const produtoController = require("../controllers/produtoController");
const routes = express.Router();

routes.get("/produtos/lista", produtoController.listarProduto);
routes.post("/produtos/criar", produtoController.cadastrarProduto);

module.exports  = routes;