const express = require('express')
const cors = require('cors')
const app = express()
const UserRoutes = require('./routes/UserRoutes')
const PetRoutes = require('./routes/PetRoutes')


//JSON Response
app.use(express.json())

//cors
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))

//folder for images
app.use(express.static('public'))

//routes
app.use('/users', UserRoutes)
app.use('/pets', PetRoutes)

app.listen(5000)