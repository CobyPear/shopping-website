import express from 'express'
const router = express.Router()
import { protect, isAdmin } from '../middleware/authMiddleware.js'
import { getProducts, getProductById, deleteProductById } from '../controllers/productController.js'


router.route('/').get(getProducts)
router.route('/:id')
    .get(getProductById)
    .delete(protect, isAdmin, deleteProductById)

export default router