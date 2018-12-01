const mongoose = require('mongoose');

const Pikastats = mongoose.Schema({
    HP:{
        type: String,
        requrie: true
    },
    Color:{
        type: String,
        require: true
    },
    Power:{
        type: String,
        require: true
    },
    
})

module.exports = mongoose.model('pikastats', Pikastats);