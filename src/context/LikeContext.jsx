import React, { createContext, useState } from 'react';

export const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
  const [likedProducts, setLikedProducts] = useState([]);

  const addToLike = (product) => {
    setLikedProducts((prevProducts) => {
      const isAlreadyLiked = prevProducts.some((p) => p.name === product.name);
      if (isAlreadyLiked) {
        return prevProducts.filter((p) => p.name !== product.name);
      } else {
        return [...prevProducts, product];
      }
    });
  };

  return (
    <LikeContext.Provider value={{ likedProducts, addToLike }}>
      {children}
    </LikeContext.Provider>
  );
};