const mongoose = require('mongoose');
const Product = mongoose.model('Product');


/*Criando produtos
Product.create({
    title: 'Apple',
    description: 'MacBook',
    url: 'http://www.apple.com'

});
*/

module.exports = {
    
    async index(req, res){
        const {page = 1 } =req.query;
        const product = await Product.paginate({}, {
            page, 
            limit: 10
        });

        return res.json(product);
    },
    
    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body,
        {new:true, useFindAndModify:false});
    
        return res.json(product);
    },

    async show(req,res){
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },

    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id);
        return res.send();
    },   

    async store(req,res){
        const product = await Product.create(req.body);
        return res.json(product);
    },

};