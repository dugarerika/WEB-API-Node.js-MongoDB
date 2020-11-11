'use strict';

const mongoose = require('mongoose');

const anuncioSchema = mongoose.Schema({    
    nombre: String,    
    venta: Boolean,    
    precio: Number,
    foto: String,    
    tags: [String]
});

// modelo
const Anuncio = mongoose.model('Anuncio', anuncioSchema);

// exportar modelo
module.exports = Anuncio;
