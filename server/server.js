import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import logger from 'morgan'

import productRoutes from './routes/productRoutes.js'
dotenv.config()

connectDB()

const PORT = process.env.PORT || 8080
const app = express()

app.use(logger('dev'))

app.get('/', (req, res) => {
    res.send('API is running')
})

app.use('/api/products', productRoutes)

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))