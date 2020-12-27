const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()


// DB Connection
mongoose.connect(process.env.DATABASE_URL , {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true
}).then( () => {
    console.log('DB CONNECTED...')
}).catch( (err) => {
    console.log(err)
})

// Using middleware 
app.use(express.json())
app.use(express.urlencoded({extended : true}))

//Import Route
const UserRoutes = require('./routes/user')

// Using Routes
app.use('/api', UserRoutes)


// Server Running
const PORT = process.env.PORT || 3000 ;
app.listen(PORT, () => {
    console.log(`Server is running :  http://localhost:${PORT}`)
})