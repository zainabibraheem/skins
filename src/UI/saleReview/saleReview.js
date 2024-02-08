import React from 'react';
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';
import './saleReview.css'

const Review = () => {
  const chartData = {
    series : [
      {
        name: 'Social Media',
        data: [10, 40, 30, 80, 60, 110, 100,70]
      },

      {
        name: 'Website',
        data: [30, 70, 80, 40, 100, 10, 90, 50]
      },
      {
        name: 'Offline Store',
        data: [50, 60, 70, 90, 60, 60, 70, 90]
      },
    ],

    options: {
      chart: {
        type: 'area',
        height: 'auto',
      },

      stroke: {
        curve: 'smooth',
        width: 2,
        colors: ["#ff929f", "#ff929f", '#59bfff']
      },

      dataLabels: {
        enabled: false,
      },
      
      fill: {
        colors: ["#ff929f", "#ff929f", '#59bfff'],
        type: "gradient",
     },

     colors: ["#ff929f", "#ff929f", '#59bfff'],

     grid: {
      show: false,
    },


     xaxis: {
      type: "day",
      categories: [
        'sun', 'mon', 'tues', 'wed', 'thur', 'fri', 'sat'
      ],
    },

    toolbar: {
      show: false,
    }
  },

};

  return (
    <div className='sales-review'>
      <h2>Sales across all platforms</h2>
     <div className='sales-chart'>
     <Chart options={chartData.options}  series={chartData.series} />
     </div>
    </div>
  )
}

export default Review
