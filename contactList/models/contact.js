const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    first_name:{
        type: String,
        requrie: true
    },
    last_name:{
        type: String,
        require: true
    },
    phone:{
        type: String,
        require: true
    },
    
})

// export the ContactSchema
const Contact = module.exports = mongoose.model('Contact', ContactSchema);