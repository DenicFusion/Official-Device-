const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Get products
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Add product (seller/admin)
router.post('/', async (req, res) => {
  // You can add JWT auth middleware here
  const product = await Product.create(req.body);
  res.json(product);
});

module.exports = router;