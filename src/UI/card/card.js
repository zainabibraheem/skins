import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './card.css'

function Card(props) {
  return (
    <div className='card'
      style={{
        background: props.color.backGround,
        boxShadow: props.color.boxShadow,
      }}
    >
      <div className='card-title'>
        <div style ={{width: '80px', height: '80px',}}>
        <CircularProgressbar 
        value={props.value}
        text={`${props.value}%`}
        styles={{
          text: {
             fontSize: '20px',
             fill: '#fff',
          },

          path: {
            stroke: 'white',
            strokeWidth: '12px',
        
          },

          trail: {
            display: 'none',
          }
        }}
        />
        </div>
        {props.title}
      </div>

      <div className='card-details'>
        {props.icon}
        <span> ${props.amount} </span>
        <span>Last 24 hours</span>
      </div>
    </div>
  )
}

export default Card
