import React from 'react';
import '../assets/style/product.css';
import cartIcon from '../assets/images/panier.jpg';

const Product = ({ product, onAddToCart }) => {
  const { name, price, image, description, weight, stock } = product;

  return (
    <div className="product">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className="description">{description}</p>
      <p className="weight">{weight} kg</p>
      <p className="stock">{stock} in stock</p>
      <p>{price} €</p>
      <button onClick={() => onAddToCart(product)}>
        <img src={cartIcon} alt="Add to cart" />
      </button>
    </div>
  );
};

export default Product;
