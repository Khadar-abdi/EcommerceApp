import asyncHandler from '../middleware/asyncHandler.js';
import Order from '../model/orderModel.js';


// desc create new orderpo
// @route Post /api/orders
// @access private

const addOrderItems = asyncHandler(async(req, res) => {

    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    } = req.body;

    if (orderItems && orderItems.length === 0) {
        res.status(400);
        throw new Error('No order items');
    } else {
        const order = new Order({
            orderItems: orderItems.map((x) => ({
                ...x,
                product: x._id,
                _id: undefined,
            })),
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        });

        const createdOrder = await order.save();

        res.status(201).json(createdOrder);
    }


});

// desc get logged  in user orders
// @route Get /api/orders/myorders
// @access private

const getMyOrders = asyncHandler(async(req, res) => {
    const order = await Order.find({ user: req.user._id })
    res.status(200).json(order);
});
// desc get get order by id
// @route Get /api/orders/:id
// @access private

const getOrderById = asyncHandler(async(req, res) => {

    const order = await Order.findById(req.params.id).populate('user', 'name email')

    if (order) {
        res.status(200).json(order);
    } else {
        res.status(404).send({ message: 'order not found' })
    }

});
// desc update oder to paid
// @route Get /api/orders/:id/pay
// @access private

const updateOderToPaid = asyncHandler(async(req, res) => {
    res.send('update order to paid');
});
// desc update oder to delivered
// @route Get /api/orders/:id/deliver
// @access private/admin

const updateOderToDelivered = asyncHandler(async(req, res) => {
    res.send('update order to delivered');
});
// desc get all orders
// @route Get /api/orders 
// @access private

const getOders = asyncHandler(async(req, res) => {
    res.send('get all oders');
});

export {
    addOrderItems,
    getMyOrders,
    getOrderById,
    updateOderToDelivered,
    updateOderToPaid,
    getOders
};