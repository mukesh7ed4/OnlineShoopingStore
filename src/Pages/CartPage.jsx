import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  // Function to calculate total price
  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, item) => {
      const price = parseFloat(item.price);
      if (!isNaN(price)) {
        return total + price;
      } else {
        console.error(`Invalid price for item: ${item.price}`);
        return total;
      }
    }, 0);

    console.log('Total price:', totalPrice);
    
    return totalPrice.toFixed(2); // Ensure total price is formatted with two decimal places
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center border-b border-gray-200 py-4">
              <img
                src={item.img}
                alt={`Product ${index + 1}`}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div className="flex-1">
                <p className="text-lg font-semibold">{item.name}</p> {/* Assuming 'name' is the product name */}
                <p className="text-gray-600">${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(index)}
                className="px-3 py-2 text-red-500 font-semibold hover:text-red-700 ml-4 mr-4 border-1 rounded-md bg-orange-200"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">Total Price:</h2>
            <p className="text-gray-700">${calculateTotalPrice()}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;



