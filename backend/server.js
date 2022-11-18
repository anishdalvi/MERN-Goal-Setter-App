const express = require ('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const PORT = process.env.PORT || 5000
const app = express()


app.use(express.json())    // body parser for raw json (middleware)
app.use(express.urlencoded({ extended : false }))

app.use('/api/goals', require('./routes/goalRoutes'))



app.use(errorHandler)

app.listen( PORT , () => console.log(`Server started on port ${PORT}`))