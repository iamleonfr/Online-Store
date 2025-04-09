const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');

// Add item to cart
router.post('/add', async (req, res) => {
  const { productId } = req.body;

  try {
    let cart = await Cart.findOne();

    if (!cart) {
      cart = new Cart({ items: [] });
    }

    const itemIndex = cart.items.findIndex(item => item.productId.equals(productId));

    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += 1;
    } else {
      cart.items.push({ productId, quantity: 1 });
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ message: 'Failed to add item', error: err.message });
  }
});

// Get cart items
router.get('/', async (req, res) => {
  try {
    const cart = await Cart.findOne().populate('items.productId');
    res.status(200).json(cart?.items || []);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get cart', error: err.message });
  }
});

// Delete item from cart
router.delete('/:productId', async (req, res) => {
  const { productId } = req.params;

  try {
    const cart = await Cart.findOne();

    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    cart.items = cart.items.filter(item => !item.productId.equals(productId));
    await cart.save();

    res.status(200).json({ message: 'Item removed', cart });
  } catch (err) {
    res.status(500).json({ message: 'Failed to remove item', error: err.message });
  }
});

module.exports = router;
