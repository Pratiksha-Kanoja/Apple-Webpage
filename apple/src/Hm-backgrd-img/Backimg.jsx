import React from 'react'
import './Backimg.css'
const Backimg = ({ children }) => {
  return (
    <div id='back_img'>
      <img src={children} alt="abc" />
    </div>
  )
}

export default Backimg