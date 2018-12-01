const mongoose = require('mongoose');

const PlayerSchema = mongoose.Schema({
    Player:{
        type: String,
        requrie: true
    },
    Rank:{
        type: Int16Array,
        require: true
    },
    Score:{
        type: Int32Array,
        require: true
    },
    Time:{
        type: String,
        require: true
    },
    Favo
    
})