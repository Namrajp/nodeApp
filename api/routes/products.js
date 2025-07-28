const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Get requested being handled"
    })
})
router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "Post requested being handled"
    })
})

module.exports = router;