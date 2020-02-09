import React from 'react';
import Item from './Item';

const Cart = ({ items, onPageChange }) => {
  const cart = items.reduce((result, item) => {
    const existingItem = result.find(i => i.id === item.id);

    if(!existingItem){
      result.push({
        ...item,
        count: 1
      });
    } else {
      existingItem.count++;
    }
    return result;
  }, []);

  return (
    <div className="Cart">
      <h2>Cart:</h2>
      <ul>
        {cart.map(item => (
          <Item key={item.id} item={item}>
            {item.count}
          </Item>
        ))}
      </ul>
      <div className="total">
        Total: $ 
        {cart.reduce((total, item) => {
          return total += item.price * item.count;
        }, 0)}
      </div>
      <button
        onClick={() => onPageChange('checkout')}
      >
        Checkout
      </button>
    </div>
  )
}

export default Cart;
