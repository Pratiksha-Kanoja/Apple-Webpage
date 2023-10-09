import React from 'react'
import './Backimg.css'
const Backimg = ({ children }) => {
  return (
    <div id='back_img'>
      <img src={children} alt="abc" />
    </div>
  )
}

const Images = ({children}) => {
  return (
    <div id='images'>
      <img src={children} alt="" />
    </div>
  )
}

const Slidbar = ({children}) => {
  return (
    <div id='slidebar'>
      <img src={children} alt="" />
    </div>
  )
}

export {Backimg,Images,Slidbar}