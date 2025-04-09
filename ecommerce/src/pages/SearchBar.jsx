import React, { useEffect, useState } from 'react'


const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilter] = useState([]);
    const [products, setProducts] = useState([]);

  // Fetch products from FakeStore API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

    function handleSearch(){
        setSearchQuery((e) => e.target.value);

        const filtered = products.filter((product) => {
            product.title.toLowerCase().includes(e.target.value.toLowerCase);
        })
        setFilter(filtered);

    }
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Products</h1>
          
          {/* Search Bar */}
          <div className="mb-6 flex justify-center">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search products..."
              className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
            />
          </div>
    
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  {/* Product Image */}
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-64 object-cover"
                  />
                  
                  {/* Product Details */}
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
                    <p className="text-gray-600 mt-2 mb-4">{product.description.substring(0, 50)}...</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-green-500">${product.price}</span>
                      <button className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 transition-colors duration-300">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center col-span-full text-gray-700">No products found</p>
            )}
          </div>
        </div>
      );
    };

export default SearchBar
