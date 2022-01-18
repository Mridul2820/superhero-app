const mongoose = require('mongoose');

const HeroSchema = new mongoose.Schema({
    superHero: {
        type: String,
        required: [true, 'Please Name The Hero'],
        unique: true,
        trim: true
    },
    realname: {
        type: String,
        required: true,
        maxlength: [200, 'Please Keep The Name Short']
    },
})

module.exports = mongoose.models.Hero || mongoose.model(('Hero', HeroSchema))