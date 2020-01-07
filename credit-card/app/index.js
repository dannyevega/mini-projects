import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const cardInfo = {
  bank: 'Big Bank, Inc.',
  number: '1234 5678 8765 4321',
  expiration: '08/19',
  name: 'Danny Vega'
}

const CreditCard = ({ info }) => {
  const { bank, number, expiration, name } = info;
  return (
    <div className="card">
      <div className="bank">{bank}</div>
      <div className="number">{number}</div>
      <div className="first-four">{number.slice(0, 4)}</div>
      <div className="valid">
        <span>valid thru</span>
        {' '}
        {expiration}
      </div>
      <div className="name">{name}</div>
    </div>
  )
}

ReactDOM.render(
  <CreditCard info={cardInfo} />,
  document.getElementById('app')
)