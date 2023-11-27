import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../Helpers/AxiosConfig';
import './Watch_Singleproduct.css'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Singleproduct = () => {
    const [productData, setProductData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        async function getSingleProductData() {
            try {
                const response = await api.get(`/products/get-single-product?id=${id}`)
                console.log(response.data.success);
                if (response.data.success) {
                    setProductData(response.data.products)
                }
            } catch (error) {
                console.log(error)
            }
        }
        if (id) {
            getSingleProductData();
        }
    }, [id])

    console.log(productData, "productData")

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
                    <p style={{ backgroundColor: "black", color: "white" }}>Apple Watch Series 9</p>
                    <p>Apple Watch Ultra 2</p>
                    <p>Apple Watch SE</p>
                    <p>Apple Watch Hermes</p>
                </div>
                {/* div 3rd */}
                <div className='single_product display-flex'>
                    <div className='single_product-left'>
                        <div>
                            <img src={productData.image} alt="" className='videopro15' />
                        </div>
                        <p className='text-align'>Available in 8 case finishes</p>
                        <div>{productData.image2?.length ?
                            <div className='single_product-image2 display-flex justify_c-spacebetween'>
                                {productData.image2.map((img) => (
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
                        <p>{productData.new}</p>
                        <p>{productData.title}</p>
                        <div className='display-flex justify_c-spacebetween'>
                            <p>{productData.price}</p>
                            <button>{productData.bttn}</button>
                        </div>

                        <div>{productData.info?.length ?
                            <div>
                                {productData.info.map((li) => (
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

export default Singleproduct