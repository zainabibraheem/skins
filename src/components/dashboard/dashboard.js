import React, { useState } from 'react'
import Cards from '../../UI/cards/cards'
import BasicTable from '../table/table';
import './dashboard.css';
import { RxHamburgerMenu } from "react-icons/rx";

function Dashboard(props) {  

  const [toggle, setToggle] = useState(true)

  const handleToggle = () => {
    setToggle(!toggle);
    console.log (toggle);
    props.handleExpanded(toggle);
  } 

  return (
    <div className='dashboard'>
       
      <div className='toggle-div'>
         <RxHamburgerMenu className='toggle'  width={125} height={125}
           onClick={handleToggle}
         />
      </div>
      
      <h2>Dashboard</h2>
      <Cards />
      <BasicTable />
    </div>
  )
}

export default Dashboard
