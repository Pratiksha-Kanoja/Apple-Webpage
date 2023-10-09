import './Header.css'
import React from 'react'
import { BsBag } from "react-icons/bs";
import { HiOutlineSearch } from "react-icons/hi";
import { AiFillApple} from "react-icons/ai";

const Header = () => {
  return (
    <div id='header'>
        <div>
            <button style={{fontSize:"24px"}}>
            <AiFillApple />
            </button>
            <button>Store</button>
            <p>Mac</p>
            <p>iPad</p>
            <p>iPhone</p>
            <p>Watch</p>
            <p>AirPods</p>
            <p>TV & Home</p>
            <p>Entertainment</p>
            <p>Accessories</p>
            <p>Support</p>
            <HiOutlineSearch/>
            <BsBag/>
        </div>
    </div>
  )
}

export default Header