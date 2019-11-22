const express = require('express');
const mongoose = require('mongoose');
const Clientes = mongoose.model('Clientes');

module.exports = {
    async insert(req,res){
        const clientes = await Clientes.create(req.body);
        return res.json(clientes);
    },
    async update(req,res){
        const clientes = await Clientes.findByPk(req.params.id);
        await clientes.update(req.body);
        return res.json({clientes});

    },
    async delete(req, res){
        const clientes = await Clientes.findByPk(req.params.id);
        await clientes.delete();
        return res.json();
    },
    async show(req, res){
        const clientes = await Clientes.find();
        return res.json(clientes);
    }
    
    
};