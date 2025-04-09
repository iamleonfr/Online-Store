import React, { useEffect, useState, useReducer } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

const initialState = {
  cart: [],
};

const Product = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await Axios.get("http://localhost:5000/api/products");
        setProducts(response.data); // Set fetched products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Add item to cart (POST request to backend)
  const handleAddToCart = async (product) => {
    try {
      // POST request to add the product to the cart in the backend
      const response = await Axios.post("http://localhost:5000/api/cart/add", {
        productId: product._id, // Assuming the product has an _id
      });

      dispatch({
        type: "ADD_TO_CART",
        payload: response.data, // Add the returned cart data
      });
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Products</h1>

      {/* Search Bar */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products
          .filter((product) =>
            search.toLowerCase() === ""
              ? true
              : product.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((product) => (
            <div
              key={product._id} // Use _id as the unique identifier
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover"
              />
              {/* Product Details */}
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {product.title}
                </h2>
                <p className="text-gray-600 mt-2 mb-4">
                  {product.description.substring(0, 50)}...
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-green-500">
                    ${product.price}
                  </span>
                  {/* Add to Cart Button */}
                  <button
                    className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 transition-colors duration-300"
                    onClick={() => handleAddToCart(product)} // Call backend API
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Link to Cart Page */}
      <div className="mt-8 text-center">
        <Link
          to="/cart"
          state={{ cart: state.cart }} // Pass cart to the Cart page
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors duration-300"
        >
          View Cart
        </Link>
      </div>
    </div>
  );
};

export default Product;
