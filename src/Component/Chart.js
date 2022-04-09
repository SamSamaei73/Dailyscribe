import React from 'react';
import '../Css/Chart.css';
import Cover from '../img/fullchart.jpg'

const Chart = () => {
  return <div id='Chart'>
      <div className='cover'>
          <img src={Cover} alt='cover'/>
      </div>
  </div>;
};

export default Chart;
