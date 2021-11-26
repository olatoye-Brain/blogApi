const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 5000
const router = require('./routes')

// const { Router : routes } = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)

const CONNECTION_URL = 'mongodb://localhost/apiblog'
mongoose.connect(CONNECTION_URL, { useUnifiedTopology: true, useNewUrlParser: true })
.then(()=> app.listen(PORT,()=>{
    console.log(`App is listening to port ${PORT}`)
}))
.catch(err=> console.log(`Error Message : ${err}`));


