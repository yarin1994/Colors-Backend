const mongoose = require('mongoose');

const colorsSchema = new mongoose.Schema({
    color: {type: String, required: true },
    votes: {type: Number, required: true}
})

module.exports = mongoose.model('Colors', colorsSchema);