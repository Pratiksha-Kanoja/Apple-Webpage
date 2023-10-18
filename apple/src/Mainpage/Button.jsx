import React, { useState } from 'react'
import './Button.css'
import { BsBag,BsBoxSeam } from "react-icons/bs";
import { RiBookmarkLine,RiCloseCircleLine,RiAccountCircleFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const Button = () => {
  const router=useNavigate();
  return (
    <div>

      <div className="container1">
        <BsBag />

        <div className="first1"></div>

        <div className="second1 white">
          <div>
            <p style={{fontSize:"30px",fontWeight:"600"}}>Your Bag is empty.</p>
            <p style={{marginTop:"30px"}}>Sign in to see if you have any saved items</p>
            <p style={{marginTop:"30px"}}>My Profile</p>
            <div>
              <p style={{marginTop:"15px",fontWeight:"700"}}><span style={{marginRight:"10px"}}><BsBoxSeam/></span>Order</p>
              <p style={{marginTop:"15px",fontWeight:"700"}}><span style={{marginRight:"10px"}}><RiBookmarkLine/></span>Your Saves</p>
              <p style={{marginTop:"15px",fontWeight:"700"}}><span style={{marginRight:"10px"}}><RiCloseCircleLine/></span>Account</p>
              <p style={{marginTop:"15px",fontWeight:"700"}} onClick={()=>(router("/signin"))}><span style={{marginRight:"10px"}}><RiAccountCircleFill/></span>Sign in</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Button