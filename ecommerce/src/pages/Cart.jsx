import React, { useEffect, useState } from "react";
import axios from "axios";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/cart"); // adjust URL
        setCart(res.data);
      } catch (err) {
        console.error("Failed to fetch cart:", err);
      }
    };

    fetchCart();
  }, []);

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/api/cart/${productId}`);
      setCart((prev) => prev.filter((item) => item.productId._id !== productId));
    } catch (err) {
      console.error("Failed to delete item:", err);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Cart</h1>

      {cart.length > 0 ? (
        <ul className="space-y-4">
          {cart.map((item) => (
            <li
              key={item.productId._id}
              className="flex items-center justify-between bg-white shadow-md rounded-lg p-4"
            >
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.productId.title}
                </h2>
                <p className="text-gray-600">${item.productId.price}</p>
                <p className="text-sm text-gray-400">Quantity: {item.quantity}</p>
              </div>
              <button
                onClick={() => handleDelete(item.productId._id)}
                className="text-red-500 hover:text-red-700"
              >
                🗑 Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 text-center">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
