// AddToCartButton.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const AddToCartButton = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
    alert('Product added to cart!');
  };

  return (
    <button onClick={handleAddToCart} className='px-3 py-2 bg-orange-100 rounded-md'>
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
