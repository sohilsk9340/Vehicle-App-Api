const mongoose = require('mongoose');

const status = new mongoose.Schema({
    vehicleStatus:{
        type: String,
    },
    engineHealth: {
        type: String,
    },
    expirePollution:{
        type: String,
    },
    accident:{
        type: String
    }
});

module.exports = status;
