import express from 'express'
const router = express.Router()
import { protect, isAdmin } from '../middleware/authMiddleware.js'
import {
    getProducts,
    getProductById,
    deleteProductById,
    createProduct,
    updateProduct,
    createProductReview
} from '../controllers/productController.js'


router.route('/')
    .get(getProducts)
    .post(protect, isAdmin, createProduct)
router.route('/:id')
    .get(getProductById)
    .delete(protect, isAdmin, deleteProductById)
    .put(protect, isAdmin, updateProduct)
router.route('/:id/reviews')
    .post(protect, createProductReview)

export default router