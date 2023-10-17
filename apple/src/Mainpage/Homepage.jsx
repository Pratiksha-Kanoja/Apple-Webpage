import React from 'react'
import { Backimg, Images, Slidbar } from '../Hm-backgrd-img/Backimg'
import Image_first from '../Hm-backgrd-img/Images/Image_first.jpg'
import Image_second from '../Hm-backgrd-img/Images/Image_second.png'
import Image_third from '../Hm-backgrd-img/Images/Image_third.png'
import Image_forth from '../Hm-backgrd-img/Images/Image_forth.png'
import Image_fifth from '../Hm-backgrd-img/Images/Image_fifth.png'
import Image_six from '../Hm-backgrd-img/Images/Image_six.png'
import first_slide from '../Hm-backgrd-img/Slide-img/first_slide.jpg'
import first_bg from '../Hm-backgrd-img/back-img/first_bg.jpg'
import second_bg from '../Hm-backgrd-img/back-img/second_bg.jpg'
import third_bg from '../Hm-backgrd-img/back-img/third_bg.jpg'
import Backhead from '../Hm-backgrd-img/Backhead'
import { Backheadfirst, Backheadsecond, Backheadthird } from '../Hm-backgrd-img/Backtext'
import './Homepage.css'
import { BsApple } from "react-icons/bs";
import Header from '../Component/Header';
import Footer from '../Component/Footer'
import { MdOutlineArrowForwardIos } from "react-icons/md";
import {Paragraph} from '../Tags/Paragraph'

const Homepage = () => {

  return (
    <div id='apple_home'>
      <Header color={true}/>




      <p>Get up to ₹8000.00 instant savings on selected products with eligible HDFC Bank cards.* <span style={{color:"rgb(62, 172, 240)",marginLeft:"10px",fontSize:"15px"}}>Shop now <MdOutlineArrowForwardIos/></span> </p>
      <div className='firstback_img text-align'>
        <Backhead>
          <Backheadfirst>iPhone 15 Pro</Backheadfirst>
          <Backheadsecond>Titanium. So strong. So light. So Pro.</Backheadsecond>
          <div className='BI_link'>
            <Backheadthird>Learn More</Backheadthird>
            <Backheadthird>buy</Backheadthird>
          </div>
        </Backhead>
        <Backimg>{first_bg}</Backimg>

      </div>

      <div className='firstback_img text-align'>
        <Backhead>
          <div style={{ color: "black" }}>
            <Backheadfirst >iPhone 15</Backheadfirst>
            <Backheadsecond>New camera. New design. Newphoria.</Backheadsecond>
          </div>
          <div className='BI_link'>
            <Backheadthird>Learn More</Backheadthird>
            <Backheadthird>buy</Backheadthird>
          </div>
        </Backhead>
        <Backimg>{second_bg}</Backimg>

      </div>

      <div className='firstback_img text-align'>
        <Backhead>
          <Backheadfirst> <BsApple /> Watch</Backheadfirst>
          <p>SERIES 9</p>
          <Backheadsecond>Smarter. Brighter. Mightier.</Backheadsecond>
          <div className='BI_link'>
            <Backheadthird>Learn More</Backheadthird>
            <Backheadthird>buy</Backheadthird>
          </div>
        </Backhead>
        <Backimg>{third_bg}</Backimg>

      </div>

      <div id='Images'>
        <Images>{Image_first}</Images>
        <Images>{Image_second}</Images>
        <Images>{Image_third}</Images>
        <Images>{Image_forth}</Images>
        <Images>{Image_fifth}</Images>
        <Images>{Image_six}</Images>
      </div>

      <div id='Home_slidebar'>
        <Slidbar>{first_slide}</Slidbar>
      </div>

      <Footer>
        <Paragraph>*Instant savings, otherwise referred to as instant cashback on the Apple Store Online, is available with the purchase of an eligible product for qualifying HDFC Bank Credit Cards and EasyEMI Credit Cards only. Minimum transaction value of ₹10001.00 applies. Click here to see instant savings amounts and eligible devices. Instant savings is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card-issuing bank. Total transaction value is calculated after any trade-in credit or eligible discount applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant savings being recalculated, and any refund may be adjusted to account for instant savings clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Terms and conditions apply. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant savings.</Paragraph>
        <Paragraph>A subscription is required for Apple TV+.</Paragraph></Footer>
    </div>
  )
}

export default Homepage