import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Email = ({ emailInfo }) => {
  const { sender, subject, date, message } = emailInfo;
  return (
    <div className="container">
      <div className="line">
        <div className="icons">
          <input type="checkbox"/>
          <i className="fa fa-thumb-tack"/>
        </div>
        <div className="main">
          <div className="headline">
            <span>{sender}</span>
            <span>{subject}</span>
            <div>{message}</div>
          </div>
        </div>
        <div className="date">
          {date}
        </div>
      </div>
    </div>
  )
}

const info = {
  sender: 'React Newsletter',
  subject: 'React Newsletter - Issue 36',
  date: 'Jan 7',
  message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio rem hic quos neque quas amet voluptatum pariatur quis! Fugit tenetur voluptatum pariatur quis! Fugit tenetur'
}

ReactDOM.render(
  <Email emailInfo={info} />,
  document.getElementById('app')
)