import React from 'react';
import MainSubject from './MainSubject';
import Type from './Type';
import CardImages from './CardImages';
import Button from './Button';

const Card = ({ cardInfo }) => {
  return (
    <div className="card">
      <MainSubject subject={cardInfo.subject} />
      <Type topic={cardInfo.topic} />
      <CardImages images={cardInfo.images} pins={cardInfo.pins} />
      <Button />
    </div>
  )
}

export default Card;
