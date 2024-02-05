import React from 'react';
import { cardsData } from '../data';
import Card from '../card/card';
import './cards.css'

function Cards() {
  return (
    <div className='cards'>
      {cardsData.map((data, index)  => {return (
        <div key={index} className='card-container'>
          <Card 
            title= {data.title}
            icon= {data.icon}
            amount={data.amount}
            value={data.value}
            color={data.color}
          />
        </div>
      )})}
    </div>
  )
}

export default Cards
