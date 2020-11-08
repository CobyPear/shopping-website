import express from 'express'
import dotenv from 'dotenv'
import logger from 'morgan'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

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

app.use(notFound)

app.use(errorHandler)

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))