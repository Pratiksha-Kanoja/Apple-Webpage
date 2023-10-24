import React, { useState } from 'react'
import './Watch_Singleproduct.css'
import { useParams } from 'react-router-dom';
import products from './Watch_data';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Watch_Singleproduct = () => {
  const { productId } = useParams();
  const product = products.find((pro) => pro.id == productId) || {};
  const { title, id, image, image2, new1, price, bttn, info } = product;
  return (

    <div id='Watch_Singleproduct-container'>
      <div>

      </div>

      <div>
        {/* div 1st */}
        <div>
          <p>X</p>
        </div>

        {/* div 2nd */}
        <div className='display-flex justify_c-spacebetween'>
            <p style={{backgroundColor:"black",color:"white"}}>Apple Watch Series 9</p>
            <p>Apple Watch Ultra 2</p>
            <p>Apple Watch SE</p>
            <p>Apple Watch Hermes</p>
        </div>

        {/* div 3rd */}
        <div className='single_product display-flex'>
          <div className='single_product-left'>
            <div>
              <img src={image} alt="" className='videopro15' />
            </div>
            <p className='text-align'>Available in 8 case finishes</p>
            <div>{image2?.length ?
              <div className='single_product-image2 display-flex justify_c-spacebetween'>
                {image2.map((img) => (
                  <div>
                    <img src={img.img1} alt="" className='videopro15' />
                  </div>
                ))}
              </div>

              :
              <div></div>}
            </div>
          </div>


          <div className='single_product-right'>
            <p>{new1}</p>
            <p>{title}</p>
            <div className='display-flex justify_c-spacebetween'>
              <p>{price}</p>
              <button>{bttn}</button>
            </div>

            <div>{info?.length ?
              <div>
                {info.map((li) => (
                  <div>
                    <p>{li.text1}</p>
                  </div>
                ))}
              </div>

              :
              <div></div>}
            </div>
            <p className='blue123' style={{ fontSize: "20px" }}>Explore Apple Watch Series 9 further <MdOutlineKeyboardArrowRight /></p>
          </div>
        </div>
      </div>


    </div>


  )
}

export default Watch_Singleproduct