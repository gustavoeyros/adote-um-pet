const express = require('express')
const cors = require('cors')
const app = express()

//JSON Response
app.use(express.json())

//cors
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))

//folder for images
app.use(express.static('public'))

//routes



app.listen(5000)