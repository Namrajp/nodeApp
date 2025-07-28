const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Get requested to /products being handled"
    })
})
router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "Post requested to /products being handled"
    })
})
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'secret') {
        res.status(200).json({
            message: 'You discovered the secret ID',
            id: id
        })
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        })
    }
})
router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated product!'
    })
})
router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product!'
    })
})
module.exports = router;