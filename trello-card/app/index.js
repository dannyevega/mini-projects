import React from 'react';
import ReactDOM from 'react-dom';
import CardTitles from './CardTitles';
import CardItem from './CardItem';
import './index.css';

const AddCard = () => (
  <div className="add">Add Card...</div>
)

const Header = ({ children }) => (
  <div className="header">{children}</div>
)

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button"/>
);

const Card = ({ titles }) => {
  return (
    <div className="trello-card">
      <div className="main">
        <Header>Phone Features</Header>
        <MoreOptionsButton />
      </div>
      <div className="cards">
        {titles.map(title => (
          <CardItem key={title} title={title} />
        ))}
      </div>
      <AddCard />
    </div>
  )
}

ReactDOM.render(
  <div className="container">
    <Card titles={CardTitles} />
  </div>,
  document.getElementById('app')
)
