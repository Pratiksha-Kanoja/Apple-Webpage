import React, { useContext, useState } from 'react'
import Header from '../Component/Header'
import { Paragraph, Paragraph18 } from '../Tags/Paragraph'
import { Spantag35, Spantag25 } from '../Tags/Spantag'
import './Signin.css';
import { BsArrowUpRight } from "react-icons/bs";
import { useNavigate } from 'react-router-dom'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import toast from 'react-hot-toast';
import api from '../Helpers/AxiosConfig';
import { AuthContext } from '../Context/AuthContext';

const Signin = () => {
    const router = useNavigate();
    const [account, setAccount] = useState(false);
    const [userData, setUserData] = useState({ email: "", password: "" })
    const { Login, state } = useContext(AuthContext)

    function handlechange(event) {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    async function login_form(event) {
        event.preventDefault();
        if (userData.email && userData.password) {
            const response = await api.post('/auth/login', { userData })
            if (response.data.success) {
                localStorage.setItem("my-token", JSON.stringify(response.data.token))
                // Login(response.data.user);
                toast.success("Login Successfully")
                // router('/')
                setUserData({ email: "", password: "" })
            }
            else {
                toast.error("Login Failed")
            }
        }
        else {
            toast.error("All fiels are mandatory")
        }
    }

    const createAccount = () => {
        setAccount(!account)
    }
    const Account = (account ? 'Account_show' : "Account_hide");


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
                    <form className='text-align login_form' onSubmit={login_form}>
                        <Spantag25>Sign in to Apple Store</Spantag25>

                        <div className='display-flex'>
                            <input type="email" placeholder='Email or Phone Number' className='signin_input' name='email' onChange={handlechange} value={userData.email} />
                            <div onClick={createAccount}><IoArrowForwardCircleOutline /></div>
                        </div>
                        <div className={Account}>
                            <input type="password" placeholder='password' className='signin_input' name='password' onChange={handlechange} value={userData.password} />
                            <button><IoArrowForwardCircleOutline /></button>
                        </div>

                        <input type="checkbox" style={{ marginTop: "100px", marginRight: "10px" }} required />
                        <label htmlFor="Remember me">Remember me</label>
                        <p style={{ marginTop: "30px", color: "rgb(83,120,203)" }}>Forgotten your password? <BsArrowUpRight style={{ fontSize: "12px" }} /></p>
                        <p style={{ marginTop: "10px", marginBottom: "150px" }}>Do not have an Apple ID? <span style={{ color: "rgb(83,120,203)" }} onClick={() => (router("/register"))}>Create yours now.<BsArrowUpRight style={{ fontSize: "12px" }} /></span></p>
                    </form>
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