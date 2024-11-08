import React from 'react';
import ProductList from '../components/ProductList';

const Products: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>
      <ProductList />
    </div>
  );
};

export default Products;