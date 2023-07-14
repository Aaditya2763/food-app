const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    cart: {
        type: mongoose.Schema.Types.Array
    },
  
    date:{
   type: Date,
    default: Date.now,
    }
    
});


module.exports = mongoose.model('Order', orderSchema);