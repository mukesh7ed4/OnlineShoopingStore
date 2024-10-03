import React, { useState, useContext } from 'react';

import { CartContext } from '../context/CartContext'; // Assuming the CartContext is defined in a separate file

export default function BestSellingPage() {
  const { addToCart } = useContext(CartContext);
  const [showMessage, setShowMessage] = useState(false); // State to manage the visibility of the message


  const products = [
    { img: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2880-02-M21.jpg?v=1712734714&width=600', name: 'Obsidian Jet Black Straight Fit Jeans', price: '1399' },
    { img: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2720-19-M1.jpg?v=1711009145&width=600', name: 'Coastal Linen Khaki Shirt', price: '1299' },
    { img: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2889-02-M2.jpg?v=1713437963&width=600', name: 'Obsidian Jet Black Straight Fit Jeans', price: '1199' },
    { img: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2881-02-M2.jpg?v=1713173993&width=600', name: 'Obsidian Washed Black Straight Fit Jeans', price: '1899' },
    { img: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2747-04-M1.jpg?v=1708500756&width=600', name: 'Obsidian Jet Black Straight Fit Jeans', price: '1399' },
    { img: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2847-04-M21.jpg?v=1708435447&width=600', name: 'Coastal Linen Khaki Shirt', price: '1299' },
    { img: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2844-03-M1.jpg?v=1707995301&width=600', name: 'Obsidian Jet Black Straight Fit Jeans', price: '1199' },
    { img: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2539-02-M242.jpg?v=1700502105&width=600', name: 'Obsidian Washed Black Straight Fit Jeans', price: '1899' },  
    { img: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2369-04-M56.jpg?v=1697480656&width=600', name: 'Obsidian Jet Black Straight Fit Jeans', price: '1399' },
    { img: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2735-01-M28.jpg?v=1712742926&width=600', name: 'Coastal Linen Khaki Shirt', price: 'Rs 1299' },
    { img: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2885-02-M1.jpg?v=1712755535&width=600', name: 'Obsidian Jet Black Straight Fit Jeans', price: '1199' },
    { img: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2880-02-M21.jpg?v=1712734714&width=600', name: 'Obsidian Washed Black Straight Fit Jeans', price: '1899' },
    { img: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2884-02-M2.jpg?v=1712731704&width=600', name: 'Obsidian Jet Black Straight Fit Jeans', price: '1399' },
    { img: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2735-04-M34.jpg?v=1712755485&width=600', name: 'Coastal Linen Khaki Shirt', price: '1299' },
    { img: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/products/Snitch_sep21_0079-2.jpg?v=1709019191&width=600', name: 'Obsidian Jet Black Straight Fit Jeans', price: '1199' },
    { img: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSO4522-01-324.jpg?v=1697031687&width=600', name: 'Obsidian Washed Black Straight Fit Jeans', price: '1899' },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowMessage(true); // Show the message when the product is added to the cart
    // Hide the message after 3 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <div>
      {/* Product grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-2">
        {products.map((product, index) => (
          <div key={index} className="p-4 rounded-lg">
            <img className='rounded-md shadow-2xl shadow-orange-100 hover:shadow-indigo-500/40' src={product.img} alt={`Product ${index + 1}`} />
            <h1 className="p-2">{product.name}</h1>
            <h2 className="p-2">{product.price}</h2>
            <button
              className="px-3 py-2 bg-orange-100 rounded-md"
              onClick={() => handleAddToCart(product)}
            >
              ADD to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Pop-up message */}
      {showMessage && (
        <div className="fixed bottom-0 right-0 bg-green-500 text-white p-4 rounded-tl-lg shadow-lg">
          Product added to cart!
        </div>
      )}
    </div>
  );
}
