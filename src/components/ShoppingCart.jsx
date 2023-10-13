import React from 'react';
import CartItem from './CartItem.jsx';
import '../assets/style/cart.css';

const ShoppingCart = ({ cart, onRemoveFromCart, onQuantityChange }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalWeight = cart.reduce((acc, item) => acc + item.weight * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <p style={{ textAlign: 'right' }}>Total Weight: {totalWeight} kg</p>
      {cart.length === 0 && <p>Your cart is empty</p>}
      {cart.map(item => (
        <CartItem
          key={item.id}
          item={item}
          onRemoveFromCart={onRemoveFromCart}
          onQuantityChange={onQuantityChange}
        />
      ))}
      <p>Total Commande: {total} €</p>
    </div>
  );
};

export default ShoppingCart;
