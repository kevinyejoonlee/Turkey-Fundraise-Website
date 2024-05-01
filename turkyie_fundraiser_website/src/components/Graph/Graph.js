import React, { useState, useEffect } from 'react';
import "./Graph.css";

import {
  Chart as ChartJS, ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const Graph = () => {
  const [cellData, setCellData] = useState('');

  useEffect(() => {
    const SHEET_ID = '1bEHm_SZduQwu0sbtTV1NZmsfm0axtHdIulpbm6M6QC0';
    const SHEET_TITLE = 'Fundraising Progress'; 
    const SHEET_RANGE = 'J17';
    const FULL_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}&range=${SHEET_RANGE}&tqx=out:csv`;

    fetch(FULL_URL)
      .then(response => response.text())
      .then(text => {
        const value = text.trim().replace(/["$,]+/g, '').slice(0, -3);
        setCellData(parseFloat(value)); 
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []); 

  const Percentage = (cellData / 3500).toFixed(2) * 100;
  const data = {
    datasets: [
      {
        label: 'Fundraising',
        data: [Percentage, 100 - Percentage],
        backgroundColor: ['rgb(24,179,166)', 'rgb(238,238,238)'],
        borderColor: ['rgb(24,179,166)', 'rgb(238,238,238)'],

      }
    ],
    labels: ['Raised', 'Remaining']
  };

  const options = {
    cutout: '80%',
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            let label = data.labels[tooltipItem.dataIndex];
            let value = data.datasets[0].data[tooltipItem.dataIndex];
            if (label === 'Remaining') {
              return ` ${value}%`;
            } else {
              return ` ${value}%`;
            }
          }
        }
      }
    }
  };

  return (
    <div className="graph">
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default Graph;
