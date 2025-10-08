const express = require('express');
const axios = require('axios');
const router = express.Router();

// Paystack payment initialization
router.post('/paystack', async (req, res) => {
  const { email, amount } = req.body;
  try {
    const response = await axios.post(
      'https://api.paystack.co/transaction/initialize',
      { email, amount },
      { headers: { Authorization: `Bearer ${process.env.PAYSTACK_SECRET}` } }
    );
    res.json(response.data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;