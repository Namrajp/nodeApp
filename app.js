const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const morgan = require('morgan');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// prevent CORS error for API requests to server
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({})
    }
    next();
});

const productRoutes = require('./api/routes/products')
const orderRoutes = require('./api/routes/orders');

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



module.exports = app;