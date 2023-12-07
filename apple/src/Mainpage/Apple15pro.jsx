import React from 'react'
import './Apple15pro.css'
import Header from '../Component/Header'
import large_2x from '../Video/large_2x.mp4'
import first_video from '../Video/first_video.mp4'
import { Paragraph,  Paragraph12, Paragraph18, Paragraph15 } from '../Tags/Paragraph'
import { Spantag1, Spantag2} from '../Tags/Spantag'
import { BiPlayCircle, BiChevronRight } from "react-icons/bi";
import { BsCreditCard } from "react-icons/bs";
import { LuMonitorSmartphone } from "react-icons/lu";
import { RiTruckLine } from "react-icons/ri";
import { AiFillPlusCircle } from "react-icons/ai";
import Footer from '../Component/Footer'

const Apple15pro = () => {
    return (
        <div id='apple15pro-container'>
            <Header color={true} />
            <div>
                <p className='text-align'>Save up to ₹6000.00 instantly on iPhone with HDFC Bank Credit Cards. Plus No Cost EMI from most leading banks.‡ <span style={{ color: "rgb(0, 123, 255)" }}>Shop iPhone </span></p>
            </div>
            <div>
                <p className='gray margin-top'>iPhone 15 Pro</p>
                <video src={first_video} autoPlay className='videopro15'></video>
                <button>Buy</button>
                <p className='white'>From ₹21483.00/mo.‡ or ₹134900.00*</p>
            </div>
            <div className='get-highlights'>
                <div>
                    <div className='display-flex justify_c-spacebetween'>
                        <p className='gray' style={{ fontSize: "50px", fontWeight: "600" }}>Get the highlights</p>
                        <div className='display-flex justify_c-spacebetween blue123' style={{ width: "32%", fontSize: "25px" }}>
                            <p>Watch the film <BiPlayCircle /></p>
                            <p>Watch the event <BiChevronRight /></p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className='white'>Titanium.</p>
                            <p className='white'>So strong. So light. So Pro.</p>
                        </div>
                        <video src={large_2x} autoPlay className='videopro15-2'></video>
                    </div>
                </div>
            </div>

            <div className='closer-look'>
                <p className='gray' style={{ fontSize: "50px", fontWeight: "600" }}>Take a closer look.</p>
                <div>
                    <img src="https://www.apple.com/in/iphone-15-pro/images/overview/closer-look/all_colors__eppfcocn9mky_large_2x.jpg" alt="" style={{ width: "100%", height: "100%" }} />
                </div>
            </div>

            <div className='explore-story'>
                <p className='gray' style={{ fontSize: "50px", fontWeight: "600" }}>Explore the full story.</p>
                <div>
                    <div className='white font78'>
                        <p>iPhone.</p>
                        <p>Forged in titanium.</p>
                    </div>
                    <div>
                        <video src="https://www.apple.com/105/media/us/iphone-15-pro/2023/2f337511-a940-4b57-b89c-1512b7507777/anim/titanium/large_2x.mp4" autoPlay className='videopro15'></video>
                    </div>
                    <div className='display-flex justify_c-spacebetween'>
                        <div>
                            <img src="https://www.apple.com/v/iphone-15-pro/b/images/overview/design/lightest__boybgwifuehe_large_2x.jpg" alt="" className='videopro15' />
                        </div>
                        <div>
                            <img src="https://www.apple.com/v/iphone-15-pro/b/images/overview/design/durable__omxi3w443rue_large_2x.jpg" alt="" className='videopro15' />
                        </div>
                    </div>
                    <div className='display-flex justify_c-spacebetween gray'>
                        <div>
                            <p>iPhone 15 Pro is <span className='white'>the first iPhone to feature an aerospace‑grade titanium design</span>, using the same alloy that spacecraft use for missions to Mars.</p>
                        </div>
                        <div>Titanium has one of the best strength‑to‑weight ratios of any metal, making these our <span className='white'>lightest Pro models ever</span> . You’ll notice the difference the moment you pick one up.</div>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <div>
                        <img src="https://www.apple.com/v/iphone-15-pro/b/images/overview/chip/chip__fuct924q1s66_large_2x.jpg" alt="" className='videopro15' />
                    </div>
                    <div className='text-align' style={{ marginTop: "100px" }}>
                        <p className='white font78'>A17 Pro chip.</p>
                        <p className='white font78'>A monster win for gaming.</p>
                        <p className='gray' style={{ fontSize: "30px", marginTop: "50px" }}>It’s here. The biggest redesign in the history of Apple GPUs.</p>
                    </div>
                    <div style={{ marginTop: "100px" }}>
                        <img src="https://www.apple.com/v/iphone-15-pro/b/images/overview/chip/dd_gaming__gasuebmhf1iu_large.jpg" alt="" className='videopro15' />
                    </div>
                    <div className='display-flex justify_c-spacebetween'>
                        <div>
                            <p className='gray'>A17 Pro is an entirely new class of iPhone chip that delivers <span className='white'>our best graphics performance by far</span>.</p>
                            <p style={{ marginTop: "50px" }} className='gray'>Mobile <span className='white'>games will look and feel so immersive</span>, with incredibly detailed environments and more realistic characters. And with industry-leading speed and efficiency, A17 Pro takes fast and runs with it.</p>
                        </div>
                        <div>
                            <p className='gray'>New</p>
                            <p className='white' style={{ fontSize: "40px" }}>Pro-class GPU</p>
                            <p className='gray'>with 6 cores</p>
                        </div>
                    </div>
                    <div>
                        <p className='white font78'>A camera that captures your wildest imagination.</p>
                        <p className='gray' style={{ fontSize: "30px", marginTop: "50px" }}>From dramatic framing flexibility to next-generation portraits, see what you can do with our most powerful iPhone camera system.</p>
                        <div>
                            <img src="https://www.apple.com/v/iphone-15-pro/b/images/overview/camera/camera__bo5k5tfk6cmu_large_2x.jpg" alt="" style={{ width: "120%" }} />
                        </div>
                    </div>

                    <div className='Gigablast'>
                        <p className='white font78' style={{ width: "50%", marginLeft: "40px" }}>Gigablast your gigabits.</p>
                        <div className='display-flex justify_c-spacebetween'>
                            <div>
                                <p className='gray'>A17 Pro is an entirely new class of iPhone chip that delivers <span className='white'>our best graphics performance by far</span>.</p>
                                <p style={{ marginTop: "50px" }} className='gray'>Mobile <span className='white'>games will look and feel so immersive</span>, with incredibly detailed environments and more realistic characters. And with industry-leading speed and efficiency, A17 Pro takes fast and runs with it.</p>
                            </div>
                            <div>
                                <p className='gray'>New</p>
                                <p className='white' style={{ fontSize: "40px" }}>Pro-class GPU</p>
                                <p className='gray'>with 6 cores</p>
                            </div>
                        </div>
                        <div>
                            <img src="https://www.apple.com/in/iphone-15-pro/images/overview/usb-c/usbc__dqdn0phay4mu_large_2x.jpg" alt="" className='videopro15' />
                        </div>
                    </div>

                    <div className='designtomake-diff'>
                        <div className='display-flex justify_c-spacebetween'>
                            <img src="https://www.apple.com/v/iphone-15-pro/b/images/overview/values/values__ctvouxsekyuu_large_2x.jpg" alt="" className='videopro15' />
                        </div>
                        <p className='white font70' style={{ width: "80%" }}>Designed to </p>
                        <p className='white font70'>make a difference.</p>
                        <hr style={{ border: "0.1px solid gray", marginTop: "50px" }} />
                        <div className='white display-flex justify_c-spacebetween'>
                            <div className='gray'>What matters to you matters to Apple too. From privacy protections that give you more control over your data. To using more recycled materials that minimise environmental impact. To creating built‑in features that make iPhone accessible to all.</div>
                            <div>
                                <p className='gray'>The internal structural frame of iPhone 15 Pro has</p>
                                <Spantag1>100% recycled aluminium</Spantag1>
                            </div>
                        </div>
                    </div>

                    <div className='ios17'>
                        <p className='gray font70'>iOS 17.</p>
                        <p className='white font70' style={{ width: "80%" }}>Style it out. Swap it over.Sticker it up.</p>
                        <div className='display-flex justify_c-spacebetween'>
                            <div><img src="https://www.apple.com/in/iphone-15-pro/images/overview/ios-17/ios17_contact_poster__f2hu76e1efiq_large_2x.jpg" alt="" className='videopro15' /></div>
                            <div><img src="https://www.apple.com/v/iphone-15-pro/b/images/overview/ios-17/ios17_namedrop__cu0pp9gg0igm_large_2x.jpg" alt="" className='videopro15' /></div>
                            <div><img src="https://www.apple.com/v/iphone-15-pro/b/images/overview/ios-17/ios17_live_stickers__bzg6i1dezceq_large_2x.jpg" alt="" className='videopro15' /></div>
                        </div>
                        <div className='display-flex justify_c-spacebetween gray'>
                            <p>Contact Poster. Create your own poster that contacts will see when you call. Pick a favourite pic or Memoji, pair it with a favourite font and there you have it — your very own calling card.</p>
                            <p>NameDrop. Want to swap contact info with someone? Just bring your iPhone close to theirs. You can both choose what you want to share, and the information transfers instantly.</p>
                            <p>Live Stickers. Touch and hold an object in a photo to lift it from the background and create a sticker. Add effects like Puffy and Shiny. Or create animated stickers from Live Photos.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='waytoshop'>
                <div className='gray'><Spantag1>Ways to shop and save at Apple.</Spantag1></div>
                <div className='display-flex justify_c-spacebetween'>
                    <div>
                        <div>
                            <LuMonitorSmartphone style={{ fontSize: "45px" }} />
                            <br />
                            <Spantag2>Save with Apple Trade In.</Spantag2>
                            <Paragraph18>Get ₹21200.00–₹67800.00 in credit towards iPhone 15 or iPhone 15 Pro when you trade in iPhone 11 or higher.20</Paragraph18>
                        </div>
                        <div>
                            <AiFillPlusCircle />
                        </div>
                    </div>
                    <div>
                        <div>
                            <BsCreditCard style={{ fontSize: "45px" }} />
                            <br />
                            <Spantag2>Monthly payment options available.</Spantag2>
                            <Paragraph18>Choose the easy way to finance with convenient monthly payment options.</Paragraph18>
                        </div>
                        <div>
                            <AiFillPlusCircle />
                        </div>
                    </div>
                    <div>
                        <div>
                            <RiTruckLine style={{ fontSize: "45px" }} />
                            <br />
                            <Spantag2>Get flexible delivery and easy pickup.</Spantag2>
                            <Paragraph18>Get free delivery or pickup at your Apple Store.</Paragraph18>
                        </div>
                        <div>
                            <AiFillPlusCircle />
                        </div>
                    </div>
                </div>
            </div>
            <div className='iphone_options'>
                <div>
                    <div className='gray'><Spantag1>iPhone.</Spantag1></div>
                </div>
                <div className='display-flex justify_c-spacebetween'>
                    <div className='gray'>
                        <Paragraph12>Explore iPhone</Paragraph12>
                        <div className='white' style={{ fontSize: "30px", fontWeight: "600" }}>
                            <p>Explore All iPhone</p>
                            <p>iPhone 15 Pro</p>
                            <p>iPhone 15</p>
                            <p>iPhone 14</p>
                            <p>iPhone 13</p>
                            <p>iPhone SE</p>
                        </div>
                        <div className='white' style={{ fontWeight: "600", marginTop: "20px" }}>
                            <Paragraph12>Compare iPhone</Paragraph12>
                            <Paragraph12>Switch from Android</Paragraph12>
                        </div>
                    </div>
                    <div className='gray'>
                        <Paragraph12>Shop iPhone</Paragraph12>
                        <div className='white' style={{ fontWeight: "600", marginTop: "20px" }}>
                            <Paragraph15>Shop iPhone</Paragraph15>
                            <Paragraph15>iPhone Accessories</Paragraph15>
                            <Paragraph15>MagSafe Accessories</Paragraph15>
                            <Paragraph15>Trade In</Paragraph15>
                            <Paragraph15>Ways to Buy</Paragraph15>
                        </div>
                    </div>
                    <div className='gray'>
                        <Paragraph12>Go Futher</Paragraph12>
                        <div className='white' style={{ fontWeight: "600", marginTop: "20px" }}>
                            <Paragraph15>Phone Support</Paragraph15>
                            <Paragraph15>iOS 17</Paragraph15>
                            <Paragraph15>iPhone Privacy</Paragraph15>
                            <Paragraph15>iCloud</Paragraph15>
                            <Paragraph15>Wallet</Paragraph15>
                            <Paragraph15>Siri</Paragraph15>
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

export default Apple15pro