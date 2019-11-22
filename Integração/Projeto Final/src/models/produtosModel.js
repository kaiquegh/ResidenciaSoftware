const mongoose = require('mongoose');


const produtosSchema = new mongoose.Schema({
  nome: { 
      type: String,
      require:true
    },
    tagline:{
        type:String,
        require:true
    },
  descricao: { 
      type: String ,
      require:true
    },
    valor:{
        type: Number,
        require:true
    },
    
    imagem:{
        type: String,
        require:true
    },
    
});


module.exports = mongoose.model('Produtos', produtosSchema);