import React, {useState} from 'react';
import './skins.css';
import Dashboard from '../components/dashboard/dashboard';
import Sidebar from '../components/sidebar/sidebar';
import RightDashboard from '../components/rightDashboard/rightDashboard';

function Skins() {

  const [expanded, setExpanded] = useState(false)

  const handleExpanded = (toggle) => {
     console.log(toggle)

    if (toggle === true) {
      setExpanded(!expanded)
    } 
      else {
        setExpanded(expanded)
      };

    console.log(expanded);
  }

  

  return (
    <div className='skins'>
      <Sidebar changeExpanded ={expanded} />
      <Dashboard handleExpanded = {handleExpanded}/>
      <RightDashboard />
    </div>
  )
}

export default Skins
