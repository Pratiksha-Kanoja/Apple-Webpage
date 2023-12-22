import './Header.css'
import React, { useContext } from 'react'
import { BsBag, BsBoxSeam } from "react-icons/bs";
import { RiBookmarkLine, RiCloseCircleLine, RiAccountCircleFill } from "react-icons/ri";
import { HiOutlineSearch } from "react-icons/hi";
import { AiFillApple } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext'
import { HiMenuAlt4 } from "react-icons/hi";

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
  const first1 = (color ? 'first-black' : 'first-white');
  const second1 = (color ? 'second-black' : 'second-white');

  const { state, Logout } = useContext(AuthContext)

  return (
    <div className={header} >
      <div>
        <button style={{ fontSize: "24px" }} onClick={BackToHome}>
          <AiFillApple />
        </button>
        <button onClick={GoToStore}>Store</button>
        <button>Mac</button>
        <button>iPad</button>
        <button>iPhone</button>
        <button>Watch</button>
        <button>AirPods</button>
        <button>TV & Home</button>
        <button>Entertainment</button>
        <button>Accessories</button>
        <button>Support</button>
        <HiOutlineSearch />
        <div className="container1">
          <BsBag />

          <div className={first1}></div>

          <div className={second1}>
            <div>
              <p style={{ fontSize: "30px", fontWeight: "600" }}>Your Bag is empty.</p>
              <p style={{ marginTop: "30px" }}>Sign in to see if you have any saved items</p>
              <p style={{ marginTop: "30px" }}>My Profile</p>
              <div>
                <div className='display-flex justify_c-spacebetween'>
                  <p style={{ marginTop: "15px", fontWeight: "700" }}>Bag</p>
                  <button onClick={() => (router("/bag"))} style={{ width: "100px", padding: "10px" }}>Review Bag</button>
                </div>
                <p style={{ marginTop: "15px", fontWeight: "700" }}><span style={{ marginRight: "10px" }}><BsBoxSeam /></span>Order</p>
                <p style={{ marginTop: "15px", fontWeight: "700" }}><span style={{ marginRight: "10px" }}><RiBookmarkLine /></span>Your Saves</p>
                <p style={{ marginTop: "15px", fontWeight: "700" }}><span style={{ marginRight: "10px" }}><RiCloseCircleLine /></span>Account</p>
                <p style={{ marginTop: "15px", fontWeight: "700" }} onClick={() => (router("/signin"))}><span style={{ marginRight: "10px" }}><RiAccountCircleFill /></span>Sign in</p>
                <p style={{ marginTop: "15px", fontWeight: "700" }} onClick={Logout}><span style={{ marginRight: "10px" }}><RiAccountCircleFill /></span>Signout {state?.user?.name}</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* hide menu */}
      <div>
        <button style={{ fontSize: "22px" }} onClick={BackToHome}>
          <AiFillApple />
        </button>
        <div style={{ fontSize: "20px" }}>
          <HiOutlineSearch />
          <div className="container1">
            <BsBag />

            <div className={first1}></div>

            <div className={second1}>
              <div>
                <p style={{ fontSize: "30px", fontWeight: "600" }}>Your Bag is empty.</p>
                <p style={{ marginTop: "30px" }}>Sign in to see if you have any saved items</p>
                <p style={{ marginTop: "30px" }}>My Profile</p>
                <div>
                  <p style={{ marginTop: "15px", fontWeight: "700" }}><span style={{ marginRight: "10px" }}><BsBoxSeam /></span>Order</p>
                  <p style={{ marginTop: "15px", fontWeight: "700" }}><span style={{ marginRight: "10px" }}><RiBookmarkLine /></span>Your Saves</p>
                  <p style={{ marginTop: "15px", fontWeight: "700" }}><span style={{ marginRight: "10px" }}><RiCloseCircleLine /></span>Account</p>
                  <p style={{ marginTop: "15px", fontWeight: "700" }} onClick={() => (router("/signin"))}><span style={{ marginRight: "10px" }}><RiAccountCircleFill /></span>Sign in</p>
                  <p style={{ marginTop: "15px", fontWeight: "700" }} onClick={Logout}><span style={{ marginRight: "10px" }}><RiAccountCircleFill /></span>Signout {state?.user?.name}</p>
                </div>
              </div>

            </div>
          </div>
          <div className="container1">
            <HiMenuAlt4 />

            <div className={first1}></div>

            <div className={second1}>
              <div>
                <div>
                  <p onClick={GoToStore} style={{ marginTop: "15px", fontWeight: "700" }}>Store</p>
                  <p style={{ marginTop: "15px", fontWeight: "700" }}>Mac</p>
                  <p style={{ marginTop: "15px", fontWeight: "700" }}>iPad</p>
                  <p style={{ marginTop: "15px", fontWeight: "700" }}>iPhone</p>
                  <p style={{ marginTop: "15px", fontWeight: "700" }}>Watch</p>
                  <p style={{ marginTop: "15px", fontWeight: "700" }}>AirPods</p>
                  <p style={{ marginTop: "15px", fontWeight: "700" }}>TV & Home</p>
                  <p style={{ marginTop: "15px", fontWeight: "700" }}>Entertainment</p>
                  <p style={{ marginTop: "15px", fontWeight: "700" }}>Accessories</p>
                  <p style={{ marginTop: "15px", fontWeight: "700" }}>Support</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header