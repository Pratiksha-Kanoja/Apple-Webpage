import React from 'react'
import Header from '../Component/Header'
import { useState } from 'react'
import { Spantag1, Spantag2} from '../Tags/Spantag'
import Image_seven from '../Hm-backgrd-img/Images/Image_seven.png'
import './Applewatch.css'
import { useNavigate } from 'react-router-dom'
import products from './Watch_data';


const Applewatch = () => {
    const [product, setproduct] = useState()

    const router= useNavigate()
    return (
        <div id='applewatch-container'>
            <Header />
            <div className='applewatch_body'>

                {/* 1st div */}

                <div className='div_first'>
                    <div>
                        <Spantag1>Shop Apple Watch </Spantag1>
                    </div>
                    <div className='div_first-right'>
                        <div>
                            <div>
                                <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-chat-specialist-icon-202305_AV2?wid=70&hei=70&fmt=jpeg&qlt=90&.v=1684947928853" alt="" />
                            </div>
                            <div>
                                <p style={{ fontWeight: "bold" }} >Need shopping help?</p>
                                <p style={{ color: "rgb(34, 102, 205)" }}>Ask a Specialist</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={Image_seven} alt="" />
                            </div>
                            <div>
                                <p style={{ fontWeight: "bold" }} >Visit an Apple Store</p>
                                <p style={{ color: "rgb(34, 102, 205)" }}>Find one near you </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2nd div */}

                <div className='div_second'>
                    <div>
                        <Spantag2>All models.</Spantag2>
                        <span style={{ color: "gray" }}>
                            <Spantag2>Take your pick.</Spantag2>
                        </span>
                    </div>

                    <div>{products?.length ?
                        <div className='display-flex justify_c-spacebetween'>
                            {products.map((pro) => (
                                <div className='product_box' onClick={()=>(router(`/${pro.id}`))}>
                                    <p>{pro.new1}</p>
                                    <p>{pro.title}</p>
                                    <div>
                                        <img src={pro.image} alt="" className='videopro15' />
                                    </div>
                                    <div>{pro.image2?.length? <div className='display-flex '>
                                        {pro.image2.map((img)=>(
                                            <div className='image2'>
                                                <img src={img.img1} alt="" className='videopro15'/>
                                            </div>
                                        ))}
                                    </div> 
                                    : 
                                    <div></div>}
                                        
                                    </div>

                                    <div className='display-flex justify_c-spacebetween'>
                                        <p>{pro.price}</p>
                                        <button>{pro.bttn}</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        :
                        <div>Loading</div>}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Applewatch