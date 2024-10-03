import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import ExtraHome from '../Extrapj/ExtraHome';
import Contact from '../Extrapj/Contact';
import { CartContext } from '../context/CartContext';
import { LikeContext } from '../context/LikeContext';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const MainPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const { likedProducts, addToLike } = useContext(LikeContext);

  const imageUrls = [
    'https://i.pinimg.com/originals/61/a6/2d/61a62d097510f0457d9080f4177b2ca4.jpg',
    'https://i.pinimg.com/originals/99/af/38/99af385dd8351c87d40d1d5ad41caf20.jpg',
    'https://wallpaperset.com/w/full/c/2/9/156342.jpg',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [imageUrls.length]);

  const products = [
    { img: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2813-05-M30_4b08f2e6-4ce4-4995-b06a-bd6fc07089cb.jpg?v=1713183406', name: 'Obsidian Jet Black Straight Fit Jeans', price: '1399', altImg: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2813-05-M11_4dc69a0d-5713-401a-9db4-49e329f1054b.jpg?v=1713183406' },
    { img: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MST2238-01-M15.jpg?v=1712753289', name: 'Coastal Linen Khaki Shirt', price: '1299', altImg: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MST2238-01-M2.jpg?v=1712753289&width=600' },
    { img: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2719-01-M25.jpg?v=1711519165&width=400', name: 'Obsidian Jet Black Straight Fit Jeans', price: '1199', altImg: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2719-01-M1.jpg?v=1711519165&width=400' },
    { img: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSK8556-02-M31.jpg?v=1702376330', name: 'Obsidian Washed Black Straight Fit Jeans', price: '1899', altImg: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSK8556-02-M4.jpg?v=1702376330' },
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

  return (
    <>
      <ToastContainer />
      <div className='h-[60vh] sm:h-[80vh] flex ml-[5%] sm:ml-[160px] mt-[20px] sm:mt-[40px] rounded-md shadow-lg w-[90vw] sm:w-[80vw]'>
        {imageUrls.length > 0 && (
          <img
            src={imageUrls[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            className="h-full w-full rounded-md object-cover"
          />
        )}
      </div>
      <div className='text-center p-4 sm:p-8 gap-2'>
        <Link to="/new-drop" className='border-2 rounded-full p-2 shadow-lg text-white bg-black'>NEW DROP</Link>
        <Link to="/Trending" className='border-2 rounded-full p-2 shadow-lg text-white ml-2 bg-black'>TRENDING</Link>
      </div>

      {/* section 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 sm:p-8">
        {products.map((product, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded-lg shadow-md">
            <div
              onMouseEnter={() => setHoveredProduct(index)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <img
                src={hoveredProduct === index ? product.altImg : product.img}
                alt={`Product ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
            <h1 className='p-2'>{product.name}</h1>
            <h2 className='p-2'>{product.price}</h2>
            <div className="flex justify-between mt-2">
              <button
                className="px-3 py-2 bg-orange-100 rounded-md"
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
        ))}
      </div>

      <div className='text-center p-2 sm:p-4'>
  <Link to="/categories/new-arrival" className='border-2 px-3 py-2 p-2 shadow-lg ml-2'>VIEW ALL</Link>
</div>

      <div>
        <h1 className='text-center text-2xl p-4 mt-4'>Seasonal Fav.</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-4 sm:p-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={product.img}
                alt={`Product ${index + 1}`}
                className="w-full h-auto transition-all duration-300 rounded-md hover:brightness-75"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-all duration-300 hover:opacity-100 z-10"></div>
            </div>
          ))}
        </div>

        <div className='text-center p-8'>
          <button className='border-2 rounded-full p-2 shadow-lg text-white bg-black mr-4'>SHIRTS</button>
          <button className='border-2 rounded-full p-2 shadow-lg mr-4'>T-SHIRTS</button>
          <button className='border-2 rounded-full p-2 shadow-lg mr-4'>TROUSER</button>
          <button className='border-2 rounded-full p-2 shadow-lg'>JEANS</button>
        </div>

        <ExtraHome />
        <Contact />
      </div>
    </>
  );
};

export default MainPage;

