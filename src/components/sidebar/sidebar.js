import React, { useState } from 'react';
import './sidebar.css';
import { sidebarMenuData } from '../../UI/data';
import { BiLogOutCircle } from "react-icons/bi";

function Sidebar( props) {

  const [activeMenuItem, setActiveMenuItem] = useState(0)


  return (
    <div className={props.changeExpanded ? 'expanded-sidebar' : 'sidebar'}>
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

        <BiLogOutCircle className='logout-icon' width={30} height={30} />
      </div>
    </div>
  )
}

export default Sidebar
