import React from 'react'
import { UpdatesData } from '../data'
import './updates.css'

const Updates = () => {
  return (
    <div className='updates'>
      <h2>Updates</h2>
      <div className='update-container'>
        {UpdatesData.map((data) => {
          return (
            <div className='update'>
              <img src={data.image} />
              <div className='update-details'>
                <p><span>{data.name}</span> {data.notification}</p>
                <span>{data.time}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Updates
