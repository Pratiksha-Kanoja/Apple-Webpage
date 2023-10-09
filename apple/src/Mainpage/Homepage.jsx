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
import Header from '../Hm-backgrd-img/Header';
import Footer from '../Hm-backgrd-img/Footer'
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Homepage = () => {
  return (
    <div id='apple_home'>
      <Header />
      <p>Get up to ₹8000.00 instant savings on selected products with eligible HDFC Bank cards.* <span style={{color:"rgb(62, 172, 240)",marginLeft:"10px",fontSize:"15px"}}>Shop now <MdOutlineArrowForwardIos/></span> </p>
      <div className='firstback_img'>
        <Backhead >
          <Backheadfirst>iPhone 15 Pro</Backheadfirst>
          <Backheadsecond>Titanium. So strong. So light. So Pro.</Backheadsecond>
          <div className='BI_link'>
            <Backheadthird>Learn More</Backheadthird>
            <Backheadthird>buy</Backheadthird>
          </div>
        </Backhead>
        <Backimg>{first_bg}</Backimg>

      </div>

      <div className='firstback_img'>
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

      <div className='firstback_img'>
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

      <Footer/>
    </div>
  )
}

export default Homepage