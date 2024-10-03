import React, { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

const SearchPage = () => {
  const { searchQuery, searchProducts } = useContext(SearchContext);

  // Fetch your product data or access it from the appropriate source
  const products = [/* Your product data */];

  // Filter the products based on the search query
  const filteredProducts = searchProducts(products, searchQuery);

  return (
    <div>
      <h2>Search Results for "{searchQuery}"</h2>
      {filteredProducts.length > 0 ? (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      ) : (
        <p>No products found for the given search query.</p>
      )}
    </div>
  );
};

export default SearchPage;