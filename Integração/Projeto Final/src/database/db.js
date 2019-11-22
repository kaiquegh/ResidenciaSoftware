const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost:27017/BancoNane', { useNewUrlParser: true }, (err) => {
  if (!err) {
    console.log('MongoDB connected');
  } else {
    console.log('error: ' + err);
  }
});

module.exports = db;


// mongoose.connect('mongodb://localhost:27017/BancoNane',{useUnifiedTopology: true,useNewUrlParser: true}, (err) => {
//       if (!err) {
//         console.log('MongoDB connected');
//       } else {
//         console.log('error: ' + err);
//       }
//     });



