import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const danny = {
  name: 'Danny Vega',
  address: '413 Manhattan Ave.',
  city: 'Brooklyn, NY 11222'
}

const sandy = {
  name: 'Sandy Sanchez',
  address: '123 Merrell Ave.',
  city: 'Nuevo, CA 92571'
}

const AddressLabel = ({ person }) => {
  const { name, address, city } = person;
  return (
    <div className="address">
      <span>{name}</span>
      <span>{address}</span>
      <span>{city}</span>
    </div>
  )
}

const Envelope = ({ from, to }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="from">
          <AddressLabel person={from} />
          <img style={{ marginTop: 10, marginRight: 10 }} src="http://pngimg.com/uploads/postage_stamp/postage_stamp_PNG36.png" alt="postage"/>
        </div>
        <AddressLabel person={to} />
      </div>
    </div>
  )
}

ReactDOM.render(
  <Envelope from={danny} to={sandy} />,
  document.getElementById('app')
)