import React from 'react';

const NavBar = ({ cartCount, onPageChange }) => (
  <nav>
    <ul>
      <li>
        <a
          href="/"
          onClick={event => {
            event.preventDefault();
            onPageChange('store')
          }}>Store</a>
      </li>
      <li className="cart-count">
        <a
          href="/cart"
          onClick={event => {
            event.preventDefault();
            onPageChange('cart')
          }}>
          <span
            role="img"
            aria-label="items in cart">🛒 {cartCount === 0 ? 'Empty' : cartCount}
          </span>
        </a>
      </li>
    </ul>
  </nav>
)

export default NavBar;