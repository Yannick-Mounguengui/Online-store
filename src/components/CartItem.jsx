import React from 'react';
import '../assets/style/cart.css';
import trashIcon from '../assets/images/poubelle.jpg';

const CartItem = ({ item, onRemoveFromCart, onQuantityChange }) => {
  const { name, image, quantity } = item;

  return (
    <div className="cartitem">
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <input
        type="number"
        value={quantity}
        onChange={e => onQuantityChange(item, parseInt(e.target.value))}
      />
      <button onClick={() => onRemoveFromCart(item)}>
        <img src={trashIcon} alt="Remove from cart" />
      </button>
    </div>
  );
};

export default CartItem;
