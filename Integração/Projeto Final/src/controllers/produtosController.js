const express = require('express');
const mongoose = require('mongoose');
const Produtos = mongoose.model('Produtos');

module.exports = {

    async index(req,res) {
        const {page = 1} = req.query;
        const produtos = await Produtos.paginate({}, {page, limit:10});
        return res.json(produtos);
    },

    async insert(req,res){
        const produtos = await Produtos.create(req.body);
        return res.json(produtos);
    },
    async update(req,res){
        const produtos = await Produtos.findByIdAndUpdate(req.params.id,req.body, { new:true});
        return res.json({produtos});

    },
    async delete(req, res){
        const produtos = await Produtos.findByIdAndDelete(req.params.id);
        return res.json();
    },
    async show(req, res){
        const produtos = await Produtos.find();
        return res.send(produtos);
    }

    
};
