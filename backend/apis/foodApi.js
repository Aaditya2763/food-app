const express = require('express');
const router = express.Router();
const Food = require('../models/Food');
const Order = require('../models/Order');
const foodController = require('../controllers/foodController');
// const getAllOrders=require('../controllers/order')
const OrderController=require('../controllers/orderController')

router.get('/allfoods', foodController.getAllFood);

router.post('/placeOrder', foodController.placeOrderFromCart);
router.get('/order',OrderController.getAllOrders)
router.get('/order/:_id',OrderController.getOrderById)

module.exports = router;