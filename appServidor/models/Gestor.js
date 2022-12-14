const mongoose = require('mongoose');
const AgencySchema = mongoose.Schema({
    destino: {
        type: String,
        required: true
    },
    precio: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('gestor', AgencySchema);