import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import ItemPage from './ItemPage';
import Checkout from './Checkout';
import Cart from './Cart';
import './index.css';

const products = [
  { id: 1, name: 'Phone', price: 299 },
  { id: 2, name: 'Laptop', price: 999 },
  { id: 3, name: 'Headphones', price: 99 },
  { id: 4, name: 'Camera', price: 799 }
];

class App extends Component {
  state = {
    cart: [],
    activePage: 'store'
  }

  handleAddItem = item => {
    this.setState(prevState => ({
      cart: [...prevState.cart, item]
    }))
  }

  handlePageChange = page => {
    this.setState({
      activePage: page
    })
  }

  render(){
    const { cart, activePage } = this.state;
    return (
      <div className="App">
        <NavBar
          cartCount={cart.length}
          onPageChange={this.handlePageChange}
        />
        <main>
          {activePage === 'store' ? (
            <ItemPage
              items={products}
              addToCart={this.handleAddItem}
            />
          ) : activePage === 'cart' ? (
            <Cart items={cart} onPageChange={this.handlePageChange} />
          ) : (
            <Checkout items={cart} />
          )}
        </main>
      </div>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
