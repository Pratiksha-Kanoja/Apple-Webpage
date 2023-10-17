import React from 'react'
import Header from '../Component/Header'
import { Backheadfirst, Backheadsecond, Backheadthird } from '../Hm-backgrd-img/Backtext'
import { Paragraph, Paragraphbold, Paragraph12, Paragraph18, Paragraph15 } from '../Tags/Paragraph'
import { Spantag1, Spantag2, Spantag35, Spantag25 } from '../Tags/Spantag'
import './Registration.css';
import { BsArrowUpRight } from "react-icons/bs";
import { useNavigate } from 'react-router-dom'

const Signin = () => {
    const router = useNavigate();
    return (
        <div id='signin-container'>
            <Header />

            <div className='box' >
                <div>
                    <Spantag35>Sign in for faster checkout.</Spantag35>
                </div>
            </div>

            <div className='box btm-bordergray' style={{ marginTop: "20px" }}>
                <div>
                    <div id='form' className='text-align'>
                        <Spantag25>Sign in to Apple Store</Spantag25>
                        <input type="text" placeholder='Email or Phone Number' className='input' style={{ marginTop: "40px" }}  />
                        <input type="checkbox" style={{ marginTop: "100px", marginRight: "10px" }} />
                        <label htmlFor="Remember me">Remember me</label>
                        <p style={{ marginTop: "30px", color: "rgb(83,120,203)" }}>Forgotten your password? <BsArrowUpRight style={{ fontSize: "12px" }} /></p>
                        <p style={{ marginTop: "10px", marginBottom: "150px" }}>Do not have an Apple ID? <span style={{ color: "rgb(83,120,203)" }} onClick={()=>(router("/register"))}>Create yours now.<BsArrowUpRight style={{ fontSize: "12px" }} /></span></p>
                    </div>
                </div>
            </div>
            <div className='box'>
                <Paragraph18>Need some help? <span style={{ color: "rgb(83,120,203)" }}>Chat now</span>  or call 000800 040 1966.</Paragraph18>
            </div>


            <div className='register-footer'>

                <Paragraph>More ways to shop: Find an Apple Store or other retailer near you. Or call 000800 040 1966.</Paragraph>
                <div className=' display-flex justify_c-spacebetween'>
                    <div className=' display-flex justify_c-spacebetween' style={{ width: "65%" }}>
                        <Paragraph>Copyright © 2023 Apple Inc. All rights reserved.</Paragraph>
                        <Paragraph>Privacy Policy | Terms of Use | Sales Policy | Legal | Site Map</Paragraph>
                    </div>
                    <div>
                        <Paragraph>India</Paragraph>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Signin