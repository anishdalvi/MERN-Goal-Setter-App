const express = require ('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000
const app = express()

connectDB()

app.use(express.json())    // body parser for raw json (middleware)
app.use(express.urlencoded({ extended : false }))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))



app.use(errorHandler)

app.listen( PORT , () => console.log(`Server started on port ${PORT}`))