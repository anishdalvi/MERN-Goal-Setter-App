const express = require ('express')
const dotenv = require('dotenv').config()
const path = require('path')
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


// Server frontend 

if ( process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../frontend/dist')))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname,'../frontend/dist/index.html')))
} else{
    app.get('/', (req, res) => res.send('Not in Production'))
}

app.use(errorHandler)

app.listen( PORT , () => console.log(`Server started on port ${PORT}`))