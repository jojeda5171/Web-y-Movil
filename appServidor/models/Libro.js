const mongoose = require('mongoose');
const LibroSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    editorial:{
        type: String,
        required: true
    },
    precio: {
        type: String,
        required: true
    },
    anioPublicacion: {
        type: String,
        required: true
    },
    portada: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('libro', LibroSchema);