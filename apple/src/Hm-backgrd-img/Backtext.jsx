import React from 'react'
import './Backtext.css'
import { IoIosArrowForward } from "react-icons/io";

function Backheadfirst({children}) {
    return (
      <p id='back_first'>{children}</p>
    )
  }
  
  const Backheadsecond = ({children}) => {
    return (
      <div id='back_second'>{children}</div>
    )
  }
  
  const Backheadthird = ({children}) => {
    return (
     <p id='back_third'>{children} <IoIosArrowForward/></p>
    )
  }
  
  export {Backheadfirst,Backheadsecond,Backheadthird}