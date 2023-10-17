import React from 'react'
import Header from '../Component/Header'
import { Backheadfirst, Backheadsecond, Backheadthird } from '../Hm-backgrd-img/Backtext'
import { Paragraph, Paragraphbold, Paragraph12, Paragraph18, Paragraph15 } from '../Tags/Paragraph'
import { Spantag1, Spantag2, Spantag35, Spantag25 } from '../Tags/Spantag'
import './Registration.css'
import { SiHandshake } from "react-icons/si";
const Registration = () => {

  return (
    <div id='register-container'>
      <Header />

      <div className='box btm-bordergray' >
        <div className='display-flex justify_c-spacebetween'>
          <Spantag25>Apple ID</Spantag25>
          <div style={{ width: "23%" }} className='display-flex justify_c-spacebetween' >
            <Paragraph12>Sign In</Paragraph12>
            <Paragraph12>Create Your Apple ID</Paragraph12>
            <Paragraph12>FAQ</Paragraph12>
          </div>
        </div>

      </div>
      <div className='box' style={{ marginTop: "20px" }}>
        <div className='btm-bordergray'>
          <div id='form' className='text-align'>
            <Spantag35>Create Your Apple ID</Spantag35>
            <Paragraph15>One Apple ID is all you need to access all Apple services.</Paragraph15>
            <div className='display-flex justify_c-spacebetween margin-bttm'>
              <input type="text" placeholder='First Name' className='input' style={{ width: "43%" }} />
              <input type="text" placeholder='Last Name' className='input' style={{ width: "43%" }} />
            </div>
            <div style={{ textAlign: "left" }}>
              <label htmlFor="country">COUNTRY/REGION</label>
              <input type="text" placeholder='First Name' className='input' />
              <input type="text" placeholder='Date of birth' className='input' />
            </div>
          </div>
        </div>

        <div className='btm-bordergray'>
          <div id='form' >
            <input type="text" placeholder='name@example.com' className='input' />
            <Paragraph>This will be your new Apple ID.</Paragraph>
            <input type="text" placeholder='password' className='input' />
            <input type="text" placeholder='confirm password' className='input' />
          </div>
        </div>

        <div className='btm-bordergray'>
          <div id='form' >
            <input type="text" placeholder='+91 (India)' className='input' />
            <input type="text" placeholder='phone number' className='input' />
            <Paragraph>Make sure you enter a phone number you can always access. It will be used to verify your identity any time you sign in on a new device or web browser. Messaging or data rates may apply.</Paragraph>
            <div className='display-flex justify_c-spacebetween' style={{ marginTop: "20px" }}>
              <label htmlFor="text verify">Verify with a:</label>
              <input type="radio" />
              <label htmlFor="text message">Text message</label>
              <input type="radio" />
              <label htmlFor="phone call">Phone call</label>
            </div>
          </div>
        </div>

        <div className='btm-bordergray'>
          <div id='form' >
            <input type="checkbox" style={{ marginRight: "10px" }} />
            <label htmlFor="announcement">Announcements
              <Paragraph>Receive Apple emails and communications including announcements, marketing, recommendations and updates about Apple products, services and software.</Paragraph>
            </label>

            <input type="checkbox" style={{ marginTop: "20px", marginRight: "10px" }} />
            <label htmlFor="apps">Apps, Music, TV and More
              <Paragraph>Receive Apple emails and communications including new releases, exclusive content, special offers and marketing, and recommendations for apps, music, movies, TV, books, podcasts and more.</Paragraph>
            </label>
          </div>
        </div>

        <div className='btm-bordergray'>
          <div id='form' className='display-flex justify_c-spacebetween'>
            <div style={{ width: "30%" }}>
              <img style={{ width: "100%" }} src="data:image/jpeg;base64,%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" alt="" />
            </div>
            <div>
              <input type="text" placeholder='Type the characters in the image' className='input' />
              <div className='display-flex justify_c-spacebetween' style={{ color: "rgb(82, 135, 216)", marginTop: "10px" }}>
                <Paragraph15>New code</Paragraph15>
                <div style={{ border: "0.1px solid black", height: "30px", marginTop: "5px" }}>

                </div>
                <Paragraph15>Visually-impaired</Paragraph15>
              </div>
            </div>
          </div>
        </div>

        <div className='btm-bordergray text-align' style={{border:"none"}}>
          <div id='form'>
            <SiHandshake style={{ fontSize: "30px" }} />
            <Paragraph>Your Apple ID information is used to allow you to sign in securely and access your data. Apple records certain data for security, support and reporting purposes. If you agree, Apple may also use your Apple ID information to send you marketing emails and communications, including based on your use of Apple services. See how your data is managed.</Paragraph>
            <button className='continueform'>Continue</button>
          </div>
        </div>
      </div>

      <div className='register-footer text-align'>

        <Paragraph>More ways to shop: Find an Apple Store or other retailer near you. Or call 000800 040 1966.</Paragraph>
        <div className=' display-flex justify_c-spacebetween'>
          <div className=' display-flex justify_c-spacebetween' style={{width:"65%"}}>
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

export default Registration