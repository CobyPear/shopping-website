import express from 'express'
const router = express.Router()
import { protect, isAdmin } from '../middleware/authMiddleware.js'
import {
    getProducts,
    getProductById,
    deleteProductById,
    createProduct,
    updateProduct,
    createProductReview,
    getTopProducts,
    deleteProductReview
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
router.route('/:id/reviews/:reviewId')
    .delete(protect, isAdmin, deleteProductReview)
router.route('/top')
    .get(getTopProducts)

export default router