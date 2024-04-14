import React, { useState, useEffect } from 'react';
import "./Values.css"

export const Values = () => {
  const [cellData, setCellData] = useState('');

  useEffect(() => {
    const SHEET_ID = '1bEHm_SZduQwu0sbtTV1NZmsfm0axtHdIulpbm6M6QC0';
    const SHEET_TITLE = 'Fundraising Progress'; 
    const SHEET_RANGE = 'J18';
    const FULL_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}&range=${SHEET_RANGE}&tqx=out:csv`;

    fetch(FULL_URL)
      .then(response => response.text())
      .then(text => {
        const value = text.trim().replace(/["$,]+/g, '').slice(0, -3);
        setCellData(value);

      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []); 

  return (
    <div className='values_container'>
      <div className='value'><b>My Goal:</b> $3500</div>
      <div className='value'><b>Raised:</b> ${cellData}</div>
      <div className='value'><b>Percentage:</b> {(cellData / 3500).toFixed(2) * 100}%</div>
      <div className='value'><b>To Go:</b> ${3500-cellData} </div>
    </div>
  )
}

export default Values;