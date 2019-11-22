const mongoose = require('mongoose');

const clientesSchema = new mongoose.Schema({
    nome: { 
      type: String,
      require:true
    },
    email: { 
        type: String ,
        require:true,
        unique: true,
        lowercase: true
    },  

    senha:{
        type:String,
        unique: true,
        require: true,
        select: false
    },

    CPF:{
        type: Number,
        require:true,
        unique: true,
    },
    
    celular:{
        type:Number,
        require:true
    },
    data_nascimento:{
        type: String,
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
    createAt:{
        type: Date,
        default:Date.now
    }
    
});

module.exports = mongoose.model('Clientes', clientesSchema);