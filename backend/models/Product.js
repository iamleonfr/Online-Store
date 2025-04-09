const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: String,
  category: String,
  image: String,
  rating: {
    rate: Number,
    count: Number
  }
});

module.exports = mongoose.model('Product', productSchema);
