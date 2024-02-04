import React, { useState } from 'react';
import './sidebar.css';
import { sidebarMenuData } from '../UI/data';

function Sidebar() {

  const [activeMenuItem, setActiveMenuItem] = useState(0)

  function changeActiveMenuItem (data, index){
    setActiveMenuItem(index)
  }

  return (
    <div className='sidebar'>
      <div className='skins-logo'>
        <h2>SK <span>INS </span> </h2>
      </div>

      <div className='menu'>
        {sidebarMenuData.map((data, index) => (
          <div className={activeMenuItem === index? 'menu-item  active' : 'menu-item'}
            key={index}
            onClick={() => setActiveMenuItem(index)}
          >
            {data.icon}
            <span>{data.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
