import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import NavItems from './NavItems';
import Card from './Card';
import Data from './Data';
import './index.css';

const App = ({ cards, navItems }) => {
  return (
    <div className="container">
      <Nav items={navItems} />
      <div className="cards-container">
        {cards.map(card => (
          <Card key={card.subject} cardInfo={card} />
        ))}
      </div>
    </div>
  )
}

ReactDOM.render(
  <App cards={Data} navItems={NavItems} />,
  document.getElementById('app')
)
