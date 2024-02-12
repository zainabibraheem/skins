import React from 'react'
import Updates from '../../UI/updates/updates'
import './rightDashboard.css'
import SaleReview from '../../UI/saleReview/saleReview'

function RightDashboard() {
  return (
    <div className='right-dashboard'>
      <Updates />
      <SaleReview />
      
    </div>
  )
}

export default RightDashboard
