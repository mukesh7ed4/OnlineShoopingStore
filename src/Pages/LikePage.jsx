import React, { useContext } from 'react';
import { LikeContext } from '../context/LikeContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LikePage = () => {
  const { likedProducts, addToLike } = useContext(LikeContext);

  const handleRemove = (product) => {
    addToLike(product); // This will remove the product
    toast.success('Removed from Liked!');
  };

  return (
    <div className="p-4">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-4">Liked Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {likedProducts.length > 0 ? (
          likedProducts.map((product, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded-lg shadow-md">
              <img src={product.img} alt={`Product ${index + 1}`} className="w-full h-auto" />
              <h1 className="p-2">{product.name}</h1>
              <h2 className="p-2">{product.price}</h2>
              <button
                className="px-3 py-2 bg-red-500 text-white rounded-md mt-2"
                onClick={() => handleRemove(product)}
              >
                Remove from Liked
              </button>
            </div>
          ))
        ) : (
          <p>No liked products yet!</p>
        )}
      </div>
    </div>
  );
};

export default LikePage;
