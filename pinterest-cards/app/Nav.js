import React from 'react';

const Nav = ({ items }) => {
  return (
    <div className="navigation">
      {items.map(item => (
        <div className="nav-item">
          <span className="nav-count">{item.count}</span>
          <span className="nav-topic">{item.topic}</span>
        </div>
      ))}
    </div>
  )
}

export default Nav;
