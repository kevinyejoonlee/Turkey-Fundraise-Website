import React from 'react'
import "./Values.css"

export const Values = () => {
  return (
    <div className='values_container'>
      <div className='value'><b>Goal:</b>$3500</div>
      <div className='value'><b>Raised:</b> $1200</div>
      <div className='value'><b>Percentage:</b> 33%</div>
      <div className='value'><b>To Go:</b> $1000</div>
    </div>
  )
}

export default Values;