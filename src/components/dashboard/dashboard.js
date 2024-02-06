import React from 'react'
import Cards from '../../UI/cards/cards'
import BasicTable from '../table/table';
import './dashboard.css'

function Dashboard() {
  return (
    <div className='dashboard'>
      <h2>Dashboard</h2>
      <Cards />
      <BasicTable />
    </div>
  )
}

export default Dashboard
