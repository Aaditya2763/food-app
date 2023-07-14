const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number
    },
    desc: {
        type: String
    },
    image_Url:{
type:String
    }
});

module.exports = mongoose.model('Food', foodSchema);
