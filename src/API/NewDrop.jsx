import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../context/CartContext';

const NewDrop = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { addToCart } = useContext(CartContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Function to add item to cart
 // Function to add item to cart
  

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        products.map((product, index) => (
          <div key={index} className="p-4 shadow-lg rounded-lg border border-gray-200">
            <img src={product.image} alt={`Product ${index + 1}`} className="w-full h-auto rounded-lg" />
            <div className="mt-2">
              <h1 className="text-lg font-semibold">{product.title}</h1>
              <h2 className="text-gray-600 mt-1">${product.price}</h2>
            </div>
            <button
  onClick={() => {
    addToCart(product);
    setShowConfirmation(true);
    setSelectedProduct(product);
    setTimeout(() => {
      setShowConfirmation(false);
    }, 2000);
  }}
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
>
  Add to Cart
</button>
          </div>
        ))
      )}
      {showConfirmation && (
        <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-md">
          <p>{selectedProduct.title} added to cart</p>
        </div>
      )}
    </div>
  );
};

export default NewDrop;






