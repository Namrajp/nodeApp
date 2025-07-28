const express = require("express");
const app = express();

const morgan = require('morgan');

const productRoutes = require('./api/routes/products')
const orderRoutes = require('./api/routes/orders')

// logging url request before passing to handlers
app.use(morgan('dev'));

// middlewares setup Routes to handle incoming request to urls
app.use('/products', productRoutes)
app.use('/orders', orderRoutes)

// Error handling
app.use((req, res, next) => {
    const error = new Error('Not Found what you are looking for');
    res.status(404).json({
        message: error.message
    })
})

// app.use((req, res, next) => {
//     const error = new Error('Not Found ');
//     error.status = 404;
//     next(error);
// })

// app.use((error, req, res, next) => {
//     res.status(error.status || 500);
//     res.json({
//         error: {
//             message: error.message
//         }
//     })
// })

module.exports = app;