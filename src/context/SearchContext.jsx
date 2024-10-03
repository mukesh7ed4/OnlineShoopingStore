// SearchContext.jsx
import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [newDropProducts, setNewDropProducts] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);
  // Add more state variables for other arrays if needed

  // Function to perform the search
  const searchProducts = (query) => {
    // Perform search across all arrays
    const filteredProducts = searchArray(products, query);
    const filteredNewDropProducts = searchArray(newDropProducts, query);
    const filteredTrendingProducts = searchArray(trendingProducts, query);
    // Merge or handle results as needed
    return { filteredProducts, filteredNewDropProducts, filteredTrendingProducts };
  };

  const searchArray = (array, query) => {
    return array.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  // Function to update the search query
  const updateSearchQuery = (query) => {
    setSearchQuery(query);
  };

  return (
    <SearchContext.Provider value={{ searchQuery, searchProducts, updateSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};
