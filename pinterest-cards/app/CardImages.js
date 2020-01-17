import React from 'react';

const CardImages = ({ images, pins }) => {
  return (
    <>
      <div className="main-image">
        <img src={images.main} alt=""/>
        <span className="pins">
          <i className="fa fa-thumb-tack"/>
          <span>{pins}</span>
        </span>
      </div>
      <div className="thumbnails">
        {images.thumbnails.map(thumbnail => (
          <img key={thumbnail.id} src={thumbnail.img} alt=""/>
        ))}
      </div>
    </>
  )
}

export default CardImages;
