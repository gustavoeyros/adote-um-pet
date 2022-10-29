const mongoose = require('../db/conn')
const { Schema } = require('mongoose')

const User = mongoose.model(
    'User', 
    new Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        image: {
            type: String
        },
        phone: {
            type: String,
            required: true
        }
    }, 
    {timestamps: true} //criar os campos de data de criação e atualização no db
    )
)

module.exports = User