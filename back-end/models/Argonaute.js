const mongoose = require('mongoose');

const argonauteSchema = mongoose.Schema({
    name: {
        type: String,
        minLength: 1,
        maxLength: 55,
    },
    strength: {
        type: String,
        minLength: 1,
        maxLength: 30,
    },
    intellect: {
        type: String,
        minLength: 1,
        maxLength: 30,
    },
    quality: {
        type: String,
        minLength: 1,
        maxLength: 30,
    },
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Argonaute', argonauteSchema);