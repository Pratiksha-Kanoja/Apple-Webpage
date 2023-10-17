import React from 'react'
import './Store.css'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { Spantag1, Spantag2 } from '../Tags/Spantag'
import Image_seven from '../Hm-backgrd-img/Images/Image_seven.png'
import { Storeimgbox, Storetextbox } from '../Store/Storeimg-box'
import { BsCreditCard } from "react-icons/bs";
import { LuMonitorSmartphone } from "react-icons/lu";
import { IoBriefcaseOutline } from "react-icons/io5";
import { Paragraph, Paragraphbold, Paragraph12, Paragraph18, Paragraph15 } from '../Tags/Paragraph'
const Store = () => {
    return (
        <div id='apple_store'>
            <Header color={false}/>


            <div id='apple_store-body'>
                {/* 1st div */}
                <div>
                    <div>
                        <Spantag1>Store. </Spantag1>
                        <span style={{ color: "gray" }}>
                            <Spantag1>The best way to buy the products you love.</Spantag1>
                        </span>

                    </div>
                    <div>
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
                <div>
                    <div>
                        <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-14-16-mac-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670959891635" alt="" />
                        <p>Mac</p>
                    </div>
                    <div>
                        <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-iphone-nav-202309_GEO_EMEA?wid=400&hei=260&fmt=png-alpha&.v=1692971740071" alt="" />
                        <p>iPhone</p>
                    </div>
                    <div>
                        <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664912135437" alt="" />
                        <p>iPad</p>
                    </div>
                    <div>
                        <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-watch-nav-202309_GEO_IN?wid=400&hei=260&fmt=png-alpha&.v=1693703814407" alt="" />
                        <p>Apple Watch</p>
                    </div>
                    <div>
                        <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=400&hei=260&fmt=png-alpha&.v=1660676485885" alt="" />
                        <p>AirPods</p>
                    </div>
                    <div>
                        <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783380000" alt="" />
                        <p>AirTag</p>
                    </div>
                    <div>
                        <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664628458484" alt="" />
                        <p>Apple TV 4K</p>
                    </div>
                    <div>
                        <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670389216654" alt="" />
                        <p>HomePod</p>
                    </div>
                </div>
                {/* 3rd */}
                <div>
                    <div>
                        <Spantag2>The latest.</Spantag2>
                        <span style={{ color: "gray" }}>
                            <Spantag2>Take a look at what’s new right now.</Spantag2>
                        </span>
                    </div>

                    <div>
                        <div style={{ color: "white" }}>
                            <Storetextbox>
                                <Paragraph12>IPHONE 15 PRO</Paragraph12>
                                <Spantag2>Titanium</Spantag2>
                                <Paragraph18>From ₹134900.00‡</Paragraph18>
                            </Storetextbox>
                            <Storeimgbox>https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-15-pro-202309?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1692910040844</Storeimgbox>
                        </div>

                        <div>
                            <Storetextbox>
                                <Paragraph12>IPHONE 15</Paragraph12>
                                <Spantag2>Newphoria</Spantag2>
                                <Paragraph18>From ₹79900.00‡</Paragraph18>
                            </Storetextbox>
                            <Storeimgbox>https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-15-202309?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1692719973220</Storeimgbox>
                        </div>

                        <div style={{ color: "white" }}>
                            <Storetextbox>
                                <Paragraph12>APPLE WATCH SERIES 9</Paragraph12>
                                <Spantag2>Smarter. Brighter. Mightier</Spantag2>
                                <Paragraph18>From ₹41900.00‡</Paragraph18>
                            </Storetextbox>
                            <Storeimgbox>https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-watch-s9-202309_GEO_IN?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1693501324197</Storeimgbox>
                        </div>

                    </div>

                </div>
                {/* 4th */}
                <div>
                    <div>
                        <Spantag2>Help is here.</Spantag2>
                        <span style={{ color: "gray" }}>
                            <Spantag2>Whenever and however you need it.</Spantag2>
                        </span>
                    </div>
                    <div>
                        <div>
                            <Storetextbox>
                                <Paragraph12>APPLE SPECIALIST</Paragraph12>
                                <Spantag2>Shop one on one with a Specialist online.</Spantag2>
                            </Storetextbox>
                            <Storeimgbox>https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-specialist-help-202305?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1684946879038</Storeimgbox>
                        </div>
                        <div style={{ marginLeft: "20px" }}>
                            <Storetextbox>
                                <Paragraph12></Paragraph12>
                                <Spantag2>Get to know your new device with a free Personal Session.</Spantag2>
                            </Storetextbox>
                            <Storeimgbox>https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-50-personal-session-202109?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1630612234000</Storeimgbox>
                        </div>
                    </div>
                </div>

                {/* 5th */}

                <div>
                    <div>
                        <Spantag2>The Apple Store difference.</Spantag2>
                        <span style={{ color: "gray" }}>
                            <Spantag2>Even more reasons to shop with us.</Spantag2>
                        </span>
                    </div>
                    <div>
                        <div>
                            <BsCreditCard style={{ fontSize: "45px", color: "rgb(14, 184, 14)" }} />
                            <p>Flexible ways to pay.</p>
                            <span style={{ color: "rgb(14, 184, 14)" }}>Plus instant savings and No Cost EMI.</span>
                        </div>
                        <div>
                            <LuMonitorSmartphone style={{ fontSize: "45px", color: "rgb(38, 115, 216)" }} />
                            <p style={{ color: "rgb(38, 115, 216)" }}>Exchange your smartphone, <span style={{ color: "black" }}>get ₹18000.00 - ₹67800.00 in credit towards a new one.*</span></p>

                        </div>
                        <div>
                            <IoBriefcaseOutline style={{ fontSize: "45px", color: "red" }} />
                            <p>Our Business Team.</p>
                            <span style={{ color: "red" }}>On your team</span>
                        </div>
                    </div>
                </div>
                {/* 6th */}
                <div>
                    <div>
                        <Spantag2>The latest.</Spantag2>
                        <span style={{ color: "gray" }}>
                            <Spantag2>Take a look at what’s new right now.</Spantag2>
                        </span>
                    </div>

                    <div>
                        <div>
                            <Storetextbox>
                                <Paragraph12>IPHONE 15 PRO</Paragraph12>
                                <Spantag2>Titanium</Spantag2>
                                <Paragraph18>From ₹134900.00‡</Paragraph18>
                            </Storetextbox>
                            <Storeimgbox>https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-accessories-fine-woven-202309?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1692804127327</Storeimgbox>
                        </div>
                        <div className='the_latest'>
                            <div>
                                <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT4J3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1693594197616" alt="" />
                            </div>
                            <Paragraph18>iPhone 15 Pro FineWoven Case with MagSafe - Taupe</Paragraph18>
                            <Paragraph15>MRP ₹5900.00 (Incl. of all taxes)</Paragraph15>
                        </div>
                        <div className='the_latest'>
                            <div>
                                <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT2N3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1692994298447" alt="" />
                            </div>
                            <Paragraph18>iPhone 15 Pro FineWoven Case with MagSafe -Black</Paragraph18>
                            <Paragraph15>MRP ₹5900.00 (Incl. of all taxes)</Paragraph15>
                        </div>

                    </div>
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

export default Store