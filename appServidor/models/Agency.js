const mongoose = require('mongoose');
const AgencySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('agency', AgencySchema);