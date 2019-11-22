const mongoose = require('mongoose');

const pedidosSchema = new mongoose.Schema({
    nomeCliente: { 
      type: String,
      require:true
    },
    emailCliente: { 
        type: String ,
        require:true,
        unique: true,
        lowercase: true
    },
    CPF:{
        type: Number,
        require:true
    },
    celular:{
        type:Number,
        require:true
    },
    
    rua:{
        type: String,
        require: true
        },
    numero:{
        type:Number,
        require: true
    },
    complemento:{
        type: String,
        require: true
    },
  
    bairro:{
        type:String,
        require: true 
    },
    cidade:{
        type:String,
        require: true
    },
    estado:{
        type:String,
        require: true
    },
    CEP:{
        type: Number,
        require
    },
    quantidade: { 
      type: Number ,
      require:true
    },
    total:{
        type: Number,
        require:true
    },
    createdAt:{
        type:Date,
        default: Date.now,
    }
    
});
module.exports=mongoose.model('Pedidos', pedidosSchema);