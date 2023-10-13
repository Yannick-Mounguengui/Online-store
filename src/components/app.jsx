import React from 'react';
import ProductList from './ProductList.jsx';
import ShoppingCart from './ShoppingCart.jsx';
import Filter from './Filter.jsx';
import products from '../data/products.js';
import '../assets/style/app.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products,
      cart: [],
      filter: '',
    };
  }

  handleAddToCart = product => {
    const { cart, products } = this.state;
    const itemIndex = cart.findIndex(item => item.id === product.id);
    const productIndex = products.findIndex(p => p.id === product.id);
    if (products[productIndex].stock === 0) return; // Prevent adding more items than available in stock
    if (itemIndex === -1) {
      this.setState({ cart: [...cart, { ...product, quantity: 1 }] });
      products[productIndex].stock -= 1;
      this.setState({ products });
    } else {
      const newCart = [...cart];
      newCart[itemIndex].quantity += 1;
      this.setState({ cart: newCart });
      products[productIndex].stock -= 1;
      this.setState({ products });
    }
  };

  handleRemoveFromCart = product => {
    const { cart, products } = this.state;
    const newCart = cart.filter(item => item.id !== product.id);
    this.setState({ cart: newCart });
    const productIndex = products.findIndex(p => p.id === product.id);
    products[productIndex].stock += product.quantity;
    this.setState({ products });
  };

  handleQuantityChange = (product, quantity) => {
    if (quantity < 0) return;
    const { cart, products } = this.state;
    const itemIndex = cart.findIndex(item => item.id === product.id);
    if (itemIndex === -1) return;
    const newCart = [...cart];
    const difference = quantity - newCart[itemIndex].quantity;
    if (products[itemIndex].stock - difference < 0) return; // Prevent setting quantity to a value that would result in negative stock
    newCart[itemIndex].quantity = quantity;
    this.setState({ cart: newCart });
    const productIndex = products.findIndex(p => p.id === product.id);
    products[productIndex].stock -= difference;
    this.setState({ products });
  };

  handleFilterChange = filter => {
    this.setState({ filter });
  };

  render() {
    const { products, cart, filter } = this.state;

    return (
      <div id="insertReactHere">
      <div className="productlist">
      <Filter filter={filter} onFilterChange={this.handleFilterChange} />
      <h2>Shop</h2>
      <ProductList products={products} filter={filter} onAddToCart={this.handleAddToCart} />
      </div>
      <ShoppingCart
      cart={cart}
      onRemoveFromCart={this.handleRemoveFromCart}
      onQuantityChange={this.handleQuantityChange}
      />
      </div>
    );
  }
}
