const express = require('express');
const router = express.Router();
// handles request to all orders
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Orders to /orders being fetched"
    })
})
// handles request to create order
router.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    }
    res.status(201).json({
        message: "Orders to /orders being created",
        order: order
    })
})
// handle individual order requests
router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Order details',
        orderId: req.params.orderId
    })
})
// handle delete order requests
router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Order deleted !',
        orderId: req.params.orderId
    })
})
module.exports = router;