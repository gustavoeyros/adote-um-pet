const mongoose = require('../db/conn')
const { Schema } = require('mongoose')

const Pet = mongoose.model(
    'Pet', 
    new Schema({
        name: {
            type: String,
            required: true
        },
        age: {
           type: Number,
           required: true 
        },
        weight: {
            type: Number,
            required: true
        },
        color:{
            type: String,
            required: true
        },
        images:{
            type: Array,
            required: true
        },
        available:{
            type: Boolean,
            required: true
        }
    }, 
    {timestamps: true} //criar os campos de data de criação e atualização no db
    )
)

module.exports = Pet