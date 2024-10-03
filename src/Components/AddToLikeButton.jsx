// AddToLikeButton.jsx
import React, { useContext } from 'react';
import { LikeContext } from '../context/LikeContext';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'

const AddToLikeButton = ({ product }) => {
  const { addToLikes } = useContext(LikeContext);

  const handleAddToLikes = () => {
    addToLikes(product);
    alert('Product added to likes!');
  };

  return (
    <button onClick={handleAddToLikes} className='px-3 py-2 bg-gray-100 rounded-md'>
       {<FcLikePlaceholder size={24} />}
    </button>
  );
};

export default AddToLikeButton;
