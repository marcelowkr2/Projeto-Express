const Produtos = require("../models/Produtos");

const produtoController = {
    listarProduto: async (req, res) => {

        const listaDeProdutos = await Produtos.findAll();

        res.json(listaDeProdutos);
    },

    async cadastrarProduto(req, res) {
        const { nome, preco, quantidade } = req.body;
       const novoProduto = await Produtos.create({
        nome,
        preco,
        quantidade,
       });
        res.json("Produto Cadastrado");
    },
};
module.exports = produtoController;