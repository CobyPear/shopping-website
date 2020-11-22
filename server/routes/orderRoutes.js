import express from 'express'
const router = express.Router()
import { addOrderItems, getOrderById, updateOrderToPaid, getUserOrders, getOrders } from '../controllers/orderController.js'
import { protect, isAdmin } from '../middleware/authMiddleware.js'

router.route('/').post(protect, addOrderItems)
    .get(protect, isAdmin, getOrders)
router.route('/myOrders').get(protect, getUserOrders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)

export default router