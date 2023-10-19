import React, { useState } from 'react'
import './Bag.css'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { Backheadfirst, Backheadsecond, Backheadthird } from '../Hm-backgrd-img/Backtext'
import { Paragraph, Paragraphbold, Paragraph12, Paragraph18, Paragraph15 } from '../Tags/Paragraph'
import { Spantag1, Spantag2, Spantag35, Spantag25, Spantag40 } from '../Tags/Spantag'
import { FaChevronDown } from "react-icons/fa";
import { AiFillApple, AiOutlineMinusCircle,AiOutlinePlus } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsBoxSeam, BsBagHeart, BsArrowUp } from "react-icons/bs";
import { HiOutlineArrowLongUp } from "react-icons/hi2";
const Bag = () => {
    const[Image,setImage]=useState({
        whiteimg:true,
        blackimg:false
    })
    function productImages(order){
        setImage({[order]: !Image[order]})
    }
    return (
        <div id='bag-container'>
            <Header />
            <div className='bag_container-body'>
                <div>
                    <div style={{ marginTop: "40px" }}>
                        <Spantag40>Review your bag.</Spantag40>
                        <p style={{ marginTop: "20px" }}>Free delivery and free returns.</p>
                    </div>
                    <div className='display-flex'>
                        <div>
                            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/applecard-logo-201910?wid=164&hei=164&fmt=jpeg&qlt=90&.v=1572631318807" alt="1" style={{ width: "100%", height: "100%" }} />
                        </div>
                        <p>Items not purchased with a one time payment may be eligible for $45.58/mo.per month at 0% APR◊ when you check out with Apple Card Monthly Installmentsspan <span className='blue123'>Learn more</span></p>
                    </div>

                    {/* product1 */}
                    <div className='display-flex justify_c-spacebetween add_product'>
                        <div className='pro_img'>
                            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-11-select-wifi-silver-202210?wid=800&hei=800&fmt=jpeg&qlt=90&fit=constrain&.v=1664411207141" alt="" className='videopro15' />
                        </div>
                        <div className='pro_detail'>
                            <div className='btm-bordergray pro_detail1 display-flex'>
                                <div>
                                    <Spantag25>11-inch iPad Pro Wi-Fi 128GB - Silver</Spantag25>
                                </div>
                                <div>
                                    <Spantag25>1<FaChevronDown style={{ fontSize: "15px", marginLeft: "10px" }} className='blue123' /></Spantag25>
                                </div>
                                <div>
                                    <Spantag25>$799.00</Spantag25>
                                    <p className='blue123' style={{ marginLeft: "40px", marginTop: "20px" }}>Remove</p>
                                </div>
                            </div>
                            <div className='pro_detail2 btm-bordergray'>
                                <div className='display-flex justify_c-spacebetween'>
                                    <AiFillApple style={{ fontSize: "20px", color: "red" }} />
                                    <span>Add AppleCare+ for iPad Pro 11‑inch (4th generation) for $129.00</span>
                                    <p className='blue123'>Add</p>
                                </div>
                                <ul>
                                    <li>Unlimited repairs for accidental damage protection</li>
                                    <li>Apple-certified service and support</li>
                                    <li>Express Replacement Service — we’ll ship you a replacement so you don’t have to wait for a repair</li>
                                    <li>24/7 priority access to Apple experts</li>
                                    <li>Coverage for your iPad Pro, Apple Pencil, and Apple keyboard, all for a single price</li>
                                </ul>
                                <p className='blue123'>Learn more<MdKeyboardArrowRight /></p>
                            </div>
                            <div className='pro_detail3 display-flex justify_c-spacebetween btm-bordergray'>
                                <p style={{ fontWeight: "700" }}><AiOutlineMinusCircle style={{ fontSize: "20px", marginRight: "10px" }} />Add free engraving</p>
                                <p className='blue123'>Add</p>
                            </div>
                            <div className='pro_detail4'>
                                <p style={{ fontWeight: "700" }}>Find out how soon you can get this item. <span style={{ fontWeight: "400" }} className='blue123'>Enter zip code <FaChevronDown style={{ fontSize: "12px" }} /></span></p>
                                <div className='display-flex'>
                                    <p><BsBoxSeam style={{ marginRight: "10px" }} />In stock and ready to ship.</p>
                                    <p style={{ marginLeft: "100px" }}><BsBagHeart style={{ marginRight: "10px" }} />Pick up at an Apple Store near you.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* product2 */}

                    <div className='display-flex justify_c-spacebetween add_product'>
                        <div className='pro_img'>
                            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTJV3?wid=800&hei=800&fmt=jpeg&qlt=90&fit=constrain&.v=1694014871985" alt="" className='videopro15' />
                        </div>
                        <div className='pro_detail'>
                            <div className='btm-bordergray pro_detail1 display-flex'>
                                <div>
                                    <Spantag25>AirPods Pro (2nd generation) with MagSafe Charging Case (USB‑C)</Spantag25>
                                    <p style={{ marginTop: "10px", fontSize: "12px" }}>Pay 0% APR for 6 months:</p>
                                </div>
                                <div>
                                    <Spantag25>1<FaChevronDown style={{ fontSize: "15px", marginLeft: "10px" }} className='blue123' /></Spantag25>
                                </div>
                                <div>
                                    <Spantag25>$249.00</Spantag25>
                                    <p style={{ marginTop: "10px", fontSize: "12px" }}>$41.50/mo.</p>
                                    <p className='blue123' style={{ marginLeft: "40px", marginTop: "20px" }}>Remove</p>
                                </div>
                            </div>
                            <div className='pro_detail2 btm-bordergray'>
                                <div className='display-flex justify_c-spacebetween'>
                                    <AiFillApple style={{ fontSize: "20px", color: "red" }} />
                                    <span>Add AppleCare+ for iPad Pro 11‑inch (4th generation) for $129.00</span>
                                    <p className='blue123'>Add</p>
                                </div>
                                <p style={{ fontSize: "14px", marginTop: "10px" }}>Get up to two years of unlimited repairs for accidental damage protection and additional tech support</p>
                                <p className='blue123'>Learn more<MdKeyboardArrowRight /></p>
                            </div>
                            <div className='pro_detail3 display-flex justify_c-spacebetween btm-bordergray'>
                                <p style={{ fontWeight: "700" }}><AiOutlineMinusCircle style={{ fontSize: "20px", marginRight: "10px" }} />Add free engraving</p>
                                <p className='blue123'>Add</p>
                            </div>
                            <div className='pro_detail4'>
                                <p style={{ fontWeight: "700" }}>Find out how soon you can get this item. <span style={{ fontWeight: "400" }} className='blue123'>Enter zip code <FaChevronDown style={{ fontSize: "12px" }} /></span></p>
                                <div className='display-flex'>
                                    <p><BsBoxSeam style={{ marginRight: "10px" }} />In stock and ready to ship.</p>
                                    <p style={{ marginLeft: "100px" }}><BsBagHeart style={{ marginRight: "10px" }} />Pick up at an Apple Store near you.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* product3 */}

                    <div className='display-flex justify_c-spacebetween add_product'>
                        <div className='pro_img'>
                            <img src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT1F3?wid=800&hei=800&fmt=jpeg&qlt=90&fit=constrain&.v=1693007909534' alt="" className='videopro15' />
                        </div>
                        <div className='pro_detail'>
                            <div className='btm-bordergray pro_detail1 display-flex'>
                                <div>
                                    <Spantag25>iPhone 15 Pro Silicone Case with MagSafe - Light Pink</Spantag25>
                                    <p style={{ marginTop: "10px", fontSize: "12px" }}>Pay 0% APR for 6 months:</p>
                                </div>
                                <div>
                                    <Spantag25>1<FaChevronDown style={{ fontSize: "15px", marginLeft: "10px" }} className='blue123' /></Spantag25>
                                </div>
                                <div>
                                    <Spantag25>$49.00</Spantag25>
                                    <p style={{ marginTop: "10px", fontSize: "12px" }}>$4.08/mo.</p>
                                    <p className='blue123' style={{ marginLeft: "40px", marginTop: "20px" }}>Remove</p>
                                </div>
                            </div>
                            <div className='pro_detail4'>
                                <p style={{ fontWeight: "700" }}>Find out how soon you can get this item. <span style={{ fontWeight: "400" }} className='blue123'>Enter zip code <FaChevronDown style={{ fontSize: "12px" }} /></span></p>
                                <div className='display-flex'>
                                    <p><BsBoxSeam style={{ marginRight: "10px" }} />In stock and ready to ship.</p>
                                    <p style={{ marginLeft: "100px" }}><BsBagHeart style={{ marginRight: "10px" }} />Pick up at an Apple Store near you.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bill'>
                        <div className='display-flex justify_c-spacebetween'>
                            <p>Subtotal</p>
                            <p>$1,097.00</p>
                        </div>
                        <div className='display-flex justify_c-spacebetween'>
                            <p>Shipping</p>
                            <p>FREE</p>
                        </div>
                        <div className='display-flex justify_c-spacebetween btm-bordergray'>
                            <p>Estimated tax for:<span className='blue123'>Enter zip code <FaChevronDown style={{ fontSize: "12px" }} /></span></p>
                            <p>$ –</p>
                        </div>
                        <div>
                            <div className='display-flex justify_c-spacebetween' style={{ fontSize: "25px", fontWeight: "bold", marginTop: "10px" }}>
                                <p>Total</p>
                                <p>$1,097.00</p>
                            </div>
                            <p className='blue123' style={{ fontSize: "15px", textAlign: "right", marginTop: "10px" }}>Get 3% Daily Cash with Apple Card</p>
                        </div>
                        <div>
                            <p style={{ fontSize: "25px", fontWeight: "bold" }}>How would you like to check out?</p>
                            <div className='display-flex justify_c-spacebetween'>

                                <div className='text-align'>
                                    <div>
                                        <p>Pay Monthly</p>
                                        <p>with Apple Card $45.58/mo.* at 0% APR◊</p>
                                    </div>
                                    <button>Check Out with Apple Card Monthly Installments</button>
                                    <p style={{ fontSize: "15px" }}>$799.00 due today, which includes applicable full-price items, down payments, shipping, and taxes.</p>
                                </div>

                                <div className='text-align'>
                                    <div>
                                        <p>Pay in Full</p>
                                        <p>$1,097.00</p>
                                    </div>
                                    <button>Check Out</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bag_container-body' >
                <p>Need some help? <span className='blue123'>Chat now</span>  or call 1‑800‑MY‑APPLE.</p>
            </div>
            <div className='also_like'>
                <div>
                    <div className='text-align'>
                        <Spantag40>You may also like</Spantag40>
                    </div>
                    <div className='display-flex justify_c-spacebetween'>
                        <div className='also_like-img'>
                            <div>
                                {Image.whiteimg && <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPU82?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1636763814000" alt="" className='videopro15' />}
                                {Image.blackimg && <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPU72?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1636763768000" alt="" className='videopro15'/>}
                            </div>
                            <div>
                                <p>Belkin BOOST<HiOutlineArrowLongUp />CHARGE™ PRO 3-in-1 Wireless Charging Pad with MagSafe</p>
                                <p style={{ fontSize: "18px" }}>$149.95</p>
                                <p className='gray' style={{ fontSize: "14px", marginTop: "20px" }}>Color-white</p>
                                <div className='display-flex justify_c-spacebetween'>
                                    <div><button onClick={()=>productImages("whiteimg")} style={{ backgroundColor: "rgb(222, 222, 222)" }}></button></div>
                                    <div><button onClick={()=>productImages("blackimg")} style={{ backgroundColor: "black" }}></button></div>
                                </div>
                            </div>
                            <button>Add to Bag</button>
                        </div>
                        <div className='also_like-img'>
                            <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HQF02?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1680040682385" alt="" className='videopro15' /></div>
                            <div>
                                <p>Belkin BOOST<HiOutlineArrowLongUp />CHARGE™ PRO 3-in-1 Wireless Charging Pad with MagSafe</p>
                                <p style={{ fontSize: "18px" }}>$149.95</p>
                            </div>
                            <button>Add to Bag</button>
                        </div>
                        <div className='also_like-img'>
                            <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HQ662?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1660927470204" alt="" className='videopro15' /></div>
                            <div>
                                <p>Belkin BOOST<HiOutlineArrowLongUp />CHARGE™ PRO 3-in-1 Wireless Charging Pad with MagSafe</p>
                                <p style={{ fontSize: "18px" }}>$149.95</p>
                            </div>
                            <button>Add to Bag</button>
                        </div>
                    </div>
                    <div>
                        <p className='blue123 text-align' style={{marginTop:"40px",fontSize:"18px"}}>Show more products <FaChevronDown style={{ fontSize: "15px", marginLeft: "5px" }}  /></p>
                    </div>
                    <div>
                        <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-new-arrivals-checkout-201804?wid=1960&hei=800&fmt=jpeg&qlt=90&.v=1523551959954" alt="" className='videopro15'/></div>
                        <div className='text-align'>
                            <p style={{fontSize:"30px",fontWeight:"600"}}>New Arrivals</p>
                            <p style={{fontSize:"18px"}}>Check out the latest accessories.</p>
                            <p style={{fontSize:"20px"}} className='blue123'>Shop<MdKeyboardArrowRight/></p>
                        </div>           
                    </div>
                </div>
            </div>
            <div className='bag_container-body'>
                <div className='display-flex justify_c-spacebetween'>
                <p style={{fontSize:"30px",fontWeight:"600"}}>Questions About Buying</p>
                <AiOutlinePlus style={{fontSize:"30px"}}/>
                </div>
                
            </div>





            <Footer>
                <Paragraph>
                    <p>◊◊ Monthly pricing is after purchase using EMI with qualifying cards at 15% pa over a 6 month tenure. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bank’s terms and conditions.</p>
                    <p>Representative example: Based on purchase of ₹79900.00. Total amount payable ₹83432.00 paid over 6 months as 6 monthly payments of ₹13905.00 at an interest rate of 15% pa. Total interest paid to bank: ₹3532.00.</p>
                    <p>§ No-Cost EMI available with the purchase of an eligible product made using eligible cards on 3- or 6-month tenures from most leading banks. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bank’s terms and conditions. Minimum order spend applies as per your card issuing bank threshold. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuing bank. Offer may be revised or withdrawn at any time without any prior notice. https://www.apple.com/in/shop/browse/financing/terms Terms Apply.</p>
                    <p>Representative example: Based off a 6 month tenure. ₹79900.00 total cost includes 15% pa and No Cost EMI savings of ₹3380.00, paid over 6 months as 6 monthly payments of ₹13317.00.</p>
                    <p>§§ Instant savings, otherwise referred to as instant cashback, is available with the purchase of an eligible product for qualifying HDFC Bank Credit Cards and EasyEMI Credit Cards only. Minimum transaction value of ₹10001 applies. Click here to see instant savings amounts and eligible devices. Instant savings are available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card issuing bank. Total transaction value is calculated after any trade-in credit or eligible discount applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant savings being recalculated, and any refund may be adjusted to account for instant savings clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. https://www.apple.com/in/shop/browse/financing/terms Terms Apply. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant savings.</p>
                    <p>* Trade-in values will vary based on the condition, year and configuration of your trade-in device, and is computed on Maximum Retail Price. You must be at least 18 years old to be eligible to trade in for credit. Not all devices are eligible for credit. We only accept MacBook portables for Trade In at our Apple Stores. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply. Credit applied towards your new device will be based on the received device matching the description you provided when your estimate was made and upon validation. Apple reserves the right to refuse or limit the quantity of any device for any reason.</p>
                    <p>2. Special pricing available to qualified customers. To learn more about how to start qualifying for special pricing, talk to an Apple Specialist in a store or give us a call on 000800 040 1966.</p>
                </Paragraph>
                <Paragraph>
                    <p>° New and qualified returning subscribers only. ₹99/month after free trial. Only one offer per Apple ID and only one offer per family if you’re part of a FamilySharing group, regardless of the number of devices that you or your family purchase. This offer is not available if you or your Family have previously accepted an Apple TV+ three-months-free or one-year-free offer. Offer valid for three months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other terms apply.</p>
                    <p>⁺ New subscribers only. ₹99/month after trial. Offer available for a limited time to new subscribers who connect an eligible device to an Apple device running iOS 15 or iPadOS 15 or later. Offer valid for three months after eligible device pairing. No audio product purchase necessary for current owners of eligible devices. Plan automatically renews until cancelled. Restrictions and other terms apply.</p>
                    <p>‡ Listed pricing is Maximum Retail Price (inclusive of all taxes).</p>
                    <p>We use your location to show you delivery options faster. We found your location using your IP address or because you entered it during a previous visit to Apple.</p>
                </Paragraph>
            </Footer>
        </div>
    )
}

export default Bag