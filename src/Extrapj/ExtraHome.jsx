import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { LikeContext } from '../context/LikeContext';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export default function ExtraHome() {
  const { addToCart } = useContext(CartContext);
  const { likedProducts, addToLike } = useContext(LikeContext);

  const products = [
    { img: 'https://www.snitch.co.in/cdn/shop/products/4MSS1813-04-M71_6511de3b-7eb2-4daa-8a2d-45f389c6e91e.jpg?v=1682190694', name: 'Double Cuff Ash Grey Shirt', price: '1399' },
    { img: 'https://www.snitch.co.in/cdn/shop/products/4MSS1813-01-M2600_b138ed81-54d3-41e0-b592-536ac25ccb44.jpg?v=1682190399', name: 'Double Cuff White Shirt', price: '1299' },
    { img: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/products/4MSS1813-09-M3351_551bc13d-5841-41c3-bb35-e62978a64757.jpg?v=1682190902', name: 'Double Cuff Royal Blue Shirt', price: '1199' },
    { img: 'https://www.snitch.co.in/cdn/shop/products/4MSS1813-07-M2121_897de0e4-7a97-4924-8bc1-9e6bffbdd54e.jpg?v=1682190824', name: 'Double Cuff Royal Blue Shirt', price: '1899' },
  ];

  const pro = [
    { img: 'https://www.snitch.co.in/cdn/shop/files/4MSCR7267-06-M40.jpg?v=1704349504', name: 'Quadox Mustard Co-Ords', price: '1399' },
    { img: 'https://www.snitch.co.in/cdn/shop/files/4MSCR7267-05-M28.jpg?v=1704349397', name: 'Quadox Yellow Co-Ords', price: '1299' },
    { img: 'https://www.snitch.co.in/cdn/shop/files/4MSCR7267-04-M21.jpg?v=1704349328', name: 'Quadox Green Co-Ords', price: '1199' },
    { img: 'https://www.snitch.co.in/cdn/shop/files/4MSCR7267-03-M37.jpg?v=1704349275', name: 'Double Cuff Royal Blue Shirt', price: '1899' },
  ];

  const prot = [
    { img: 'https://www.snitch.co.in/cdn/shop/files/4MSS2747-04-M75.jpg?v=1708168277', name: 'Mod Stripe White Shirt', price: 'Rs 1399' },
    { img: 'https://www.snitch.co.in/cdn/shop/files/4MSS2747-02-M30.jpg?v=1708168222', name: 'Mod Stripe Navy Shirt', price: 'Rs 1299' },
    { img: 'https://www.snitch.co.in/cdn/shop/files/4MSS2747-01-M31.jpg?v=1708168193', name: 'Mod Stripe Green Shirt', price: 'Rs 1199' },
    { img: 'https://www.snitch.co.in/cdn/shop/files/4MSS2747-03-M21.jpg?v=1708168248', name: 'Quadox Blue Co-Ords', price: 'Rs 1899' },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success('Added to Cart!');
  };

  const handleLike = (product) => {
    addToLike(product);
    toast.success(likedProducts.some(p => p.name === product.name) 
      ? 'Removed from Liked!' 
      : 'Added to Liked!');
  };

  const renderProduct = (product, index) => (
    <div key={index} className="p-4 rounded-lg shadow-md">
      <img src={product.img} alt={`Product ${index + 1}`} className="w-full h-auto object-cover rounded-md" />
      <h1 className='p-2 text-center'>{product.name}</h1>
      <h2 className='p-2 text-center'>{product.price}</h2>
      <div className="flex justify-between mt-2">
        <button
          className="px-3 py-2 bg-orange-100 rounded-md text-sm"
          onClick={() => handleAddToCart(product)}
        >
          Add to Cart
        </button>
        <button
          className="px-3 py-2 bg-gray-100 rounded-md"
          onClick={() => handleLike(product)}
        >
          {likedProducts.some(p => p.name === product.name) ? <FcLike size={24} /> : <FcLikePlaceholder size={24} />}
        </button>
      </div>
    </div>
  );

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {prot.map((product, index) => renderProduct(product, index))}
      </div>

      <div className='text-center p-2 sm:p-4'>
  <Link to="/categories/new-arrival" className='border-2 px-3 py-2 p-2 shadow-lg ml-2'>VIEW ALL</Link>
</div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {products.map((product, index) => renderProduct(product, index))}
      </div>

      <div className='flex justify-center mt-8 gap-4'>
        <button className='border-2 rounded-full px-4 py-2 shadow-lg text-white bg-black'>CO-ORDS</button>
        <button className='border-2 rounded-full px-4 py-2 shadow-lg'>SHORTS</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {pro.map((product, index) => renderProduct(product, index))}
      </div>
    </div>
  )
}