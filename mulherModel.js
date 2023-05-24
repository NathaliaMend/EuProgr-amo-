const mongoose = require('mongoose')

const mulherschema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    imagem:{
        type: String,
        required: true
    },
    minibio:{
        type: String,
        required: true
    },
    citação:{
        type: String,
        required: true 
    }
} )

module.exports = mongoose.model('diva', mulherschema)