const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

// Place order
router.post('/', async (req, res) => {
  const order = await Order.create(req.body);
  res.json(order);
});

// Track buyer's orders
router.get('/buyer/:buyerId', async (req, res) => {
  const orders = await Order.find({ buyer: req.params.buyerId }).populate('products.product');
  res.json(orders);
});

// Seller: View their orders
router.get('/seller/:sellerId', async (req, res) => {
  const orders = await Order.find({ seller: req.params.sellerId }).populate('products.product');
  res.json(orders);
});

// Admin: View all orders
router.get('/all', async (req, res) => {
  const orders = await Order.find().populate('products.product');
  res.json(orders);
});

// Update order status (seller/admin)
router.put('/:orderId/status', async (req, res) => {
  const order = await Order.findByIdAndUpdate(req.params.orderId, { status: req.body.status }, { new: true });
  res.json(order);
});

module.exports = router;