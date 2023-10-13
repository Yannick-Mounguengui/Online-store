import React from 'react';
import Product from './Product.jsx';
import products from '../data/products.js';
import '../assets/style/productlist.css';

const ProductList = ({ products, filter, onAddToCart }) => {
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="productlist">
      {filteredProducts.map(product => (
        <Product key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;
