const express = require('express');
const User = require('../models/User');
const Product = require('../models/Product');
const Order = require('../models/Order');
const router = express.Router();

// Dashboard summary
router.get('/summary', async (req, res) => {
  const users = await User.countDocuments();
  const products = await Product.countDocuments();
  const orders = await Order.countDocuments();
  const revenue = await Order.aggregate([{ $group: { _id: null, total: { $sum: "$total" } } }]);
  res.json({
    users,
    products,
    orders,
    revenue: revenue[0]?.total || 0
  });
});

// Approve seller
router.put('/seller/:userId/approve', async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.userId, { role: 'seller' }, { new: true });
  res.json(user);
});

module.exports = router;
