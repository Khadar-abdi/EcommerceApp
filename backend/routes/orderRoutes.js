import express from 'express'
import {
    addOrderItems,
    getMyOrders,
    getOrderById,
    updateOderToDelivered,
    updateOderToPaid,
    getOders
} from '../controllers/orderconstroller.js'
import { protect, admin } from '../middleware/authMiddleware.js';


const router = express.Router();


router.route('/').post(protect, addOrderItems).get(protect, admin, getOders);
router.route('/mine').get(protect, getMyOrders)
router.route('/:id').get(protect, admin, getOrderById)
router.route('/:id/pay').put(protect, updateOderToPaid)
router.route('/:id/pay/deliver').put(protect, admin, updateOderToDelivered)




export default router;