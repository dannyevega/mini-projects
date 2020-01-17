import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Card = () => {
  return (
    <div className="card">
      <h1>AVIATION</h1>
      <h2>Aviation Explorer</h2>
      <div className="main-image">
        <img src="https://images.all-free-download.com/images/graphiclarge/aircraft_in_flight_closeup_picture_168546.jpg" alt=""/>
        <span className="pins">
          <i className="fa fa-thumb-tack"/>
          <span>2,345</span>
        </span>
      </div>
      <div className="thumbnails">
        <img src="https://media.cntraveler.com/photos/57067c1e9adc6caf5afe3f4c/4:3/w_480,c_limit/plane-landing-cr-getty-sb10062851ai-001.jpg" alt=""/>
        <img src="https://www.telegraph.co.uk/content/dam/Travel/2018/January/white-plane-sky.jpg?imwidth=450" alt=""/>
        <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt=""/>
      </div>
      <button>FOLLOW</button>
    </div>
  )
}

const App = () => {
  return (
    <div className="container">
      <Card />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
