import React from 'react';
import './skins.css';
import Dashboard from '../components/dashboard/dashboard';
import Sidebar from '../components/sidebar/sidebar';
import RightDashboard from '../components/rightDashboard/rightDashboard';

function Skins() {
  return (
    <div className='skins'>
      <Sidebar />
      <Dashboard />
      <RightDashboard />
    </div>
  )
}

export default Skins
