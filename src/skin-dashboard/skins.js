import React from 'react';
import './skins.css';
import Dashboard from '../layout/dashboard';
import Sidebar from '../layout/sidebar';
import Review from '../layout/review';

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
