import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Poster = ({ posterInfo }) => {
  const { image, title, caption } = posterInfo;

  return (
    <div className="container">
      <div className="poster">
        <div className="image-container">
          <img alt="Poster" src={image}/>
        </div>
        <div className="content">
          <span className="first">{title.slice(0,1)}</span>
          <span className="center">{title.slice(1, title.length - 1)}</span>
          <span className="last">{title.slice(title.length - 1)}</span>
        </div>
        <div className="caption">{caption}</div>
      </div>
    </div>
  );
}

const info = {
  image: "https://cdn.auth0.com/blog/react-js/react.png",
  title: "React",
  caption: "The best thing since jQuery, probably."
};

ReactDOM.render(
  <Poster posterInfo={info} />,
  document.getElementById('app')
)