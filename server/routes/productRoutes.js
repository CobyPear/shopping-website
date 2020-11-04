import express from 'express'
const router = express.Router()
import Product from '../models/productModel.js'

// @desc     Fetch all products
// @route    GET /api/products
// @access   Public
router.get('/', (req,res) => {
    Product.find({})
    .then(products => res.json(products))
    .catch(err => console.error(err))
    
})

// @desc     Fetch single product
// @route    GET /api/products/:id
// @access   Public
router.get('/:id', (req,res) => {
    Product.findById(req.params.id)
    .then(product => {
        if(product) {
            res.json(product)
        } else {
            res.status(404).json({ message: 'Product Not Found' })
        }
    })
    .catch(err => console.error(err))
})

export default router