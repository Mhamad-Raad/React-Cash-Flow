import React from 'react';
import ChartBar from './ChartBar.js';

import './Chart.css';


const chart = (props) => {
  let values = props.dataPoints.map(dataPoint => dataPoint.value);
  let maxValue = Math.max(...values);
  return(
    <div className="chart">
      {props.dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />  
      ))}
    </div>
  );
}

export default chart;