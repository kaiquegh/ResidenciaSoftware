const express = require('express');
const mongoose = require('mongoose');
const Pedidos = mongoose.model('Pedidos');

module.exports = {
    async insert(req,res){
        const pedidos = await Pedidos.create(req.body);
        return res.json(pedidos);
    },
    async update(req,res){
        const pedidos = await Pedidos.findByIdAndUpdate(req.param.id,req.body);
        return res.json(pedidos);

    },
    async delete(req, res){
        const pedidos = await Pedidos.findByIdAndDelete(req.param.id);
        return res.json(pedidos);
    },
    async show(req, res){
        const pedidos = await Pedidos.find();
        return res.send(pedidos);
    }
    
    
}