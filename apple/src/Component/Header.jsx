import './Header.css'
import React, { useState } from 'react'
import { BsBag, BsBoxSeam } from "react-icons/bs";
import { RiBookmarkLine, RiCloseCircleLine, RiAccountCircleFill } from "react-icons/ri";
import { HiOutlineSearch } from "react-icons/hi";
import { AiFillApple } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
const Header = ({ color }) => {
  //We use color as a 'prop'
  const router = useNavigate()
  // const[color,setColor]= useState(true) //same condition render while store page is open so again initial value become true 
  //that's why we are not using useState
  function GoToStore() {
    router('/store')
    // setColor(!color)
  }
  function BackToHome() {
    router('/')
  }

  //when we are at homepage it send variable "color" as "true". using prop we access that "true" value
  //now color is true it gives header-black to header
  //header = header-black....... this css is applied
  //Same for store page it gives "False" value 
  //header = header-white ......this css is applied
  const header = (color ? 'header-black' : 'header-white');
  return (
    <div className={header} >
      <div>
        <button style={{ fontSize: "24px" }} onClick={BackToHome}>
          <AiFillApple />
        </button>
        <button onClick={GoToStore}>Store</button>
        <p>Mac</p>
        <p>iPad</p>
        <p>iPhone</p>
        <p>Watch</p>
        <p>AirPods</p>
        <p>TV & Home</p>
        <p>Entertainment</p>
        <p>Accessories</p>
        <p>Support</p>
        <HiOutlineSearch />
        <div className="container1">
          <BsBag />

          <div className="first1"></div>

          <div className="second1">
            <div>
              <p style={{ fontSize: "30px", fontWeight: "600" }}>Your Bag is empty.</p>
              <p style={{ marginTop: "30px" }}>Sign in to see if you have any saved items</p>
              <p style={{ marginTop: "30px" }}>My Profile</p>
              <div>
                <div className='display-flex justify_c-spacebetween'>
                  <p style={{ marginTop: "15px", fontWeight: "700" }}>Bag</p>
                  <button onClick={() => (router("/bag"))} style={{width:"100px",padding:"10px"}}>Review Bag</button>
                </div>
                <p style={{ marginTop: "15px", fontWeight: "700" }}><span style={{ marginRight: "10px" }}><BsBoxSeam /></span>Order</p>
                <p style={{ marginTop: "15px", fontWeight: "700" }}><span style={{ marginRight: "10px" }}><RiBookmarkLine /></span>Your Saves</p>
                <p style={{ marginTop: "15px", fontWeight: "700" }}><span style={{ marginRight: "10px" }}><RiCloseCircleLine /></span>Account</p>
                <p style={{ marginTop: "15px", fontWeight: "700" }} onClick={() => (router("/signin"))}><span style={{ marginRight: "10px" }}><RiAccountCircleFill /></span>Sign in</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Header