import React from 'react';
import './skins.css';
import Dashboard from '../components/dashboard/dashboard';
import Sidebar from '../components/sidebar/sidebar';
import Review from '../components/review/review';

function Skins() {
  return (
    <div className='skins'>
      <Sidebar />
      <Dashboard />
      <Review />
    </div>
  )
}

export default Skins
