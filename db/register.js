const mongoose = require('mongoose');

const register = new mongoose.Schema({
    owner:{
        type: String,
        required: true
    },
    numberPlate: {
        type: String,
        required: true
    },
    chassie:{
        type: String,
        required: true
    },
    brand:{
        type: String
    },
    date:{
        type: String,
        required: true
    }
});

module.exports = register;
