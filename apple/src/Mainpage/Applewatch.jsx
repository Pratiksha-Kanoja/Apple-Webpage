import React from 'react'
import Header from '../Component/Header'
import { useState } from 'react'
import { Backheadfirst, Backheadsecond, Backheadthird } from '../Hm-backgrd-img/Backtext'
import { Paragraph, Paragraphbold, Paragraph12, Paragraph18, Paragraph15 } from '../Tags/Paragraph'
import { Spantag1, Spantag2, Spantag35, Spantag25, Spantag40 } from '../Tags/Spantag'
import Image_seven from '../Hm-backgrd-img/Images/Image_seven.png'
import './Applewatch.css'
const Applewatch = () => {
    const [product, setproduct] = useState([
        {
            new: "New", title: "Apple Watch Series 9", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-s9-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693943487336",
            image2: [{
                img1: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-case-41-aluminum-pink-nc-s9_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692920740110",
                img2: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-case-45-aluminum-midnight-cell-s9_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692920745177",
                img3: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-case-41-aluminum-starlight-nc-s9_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692920742817",
                img4: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-case-45-stainless-gold-s9_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692973854100"
            }],
            price: "From $399 or $33.25/mo.for 12 mo.*", bttn: "Buy"
        },
        { new: "New", title: "Apple Watch Ultra 2", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-ultra2-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693611623658", image2: "", price: "From $799 or $66.58/mo. for 12 mo.*", bttn: "Buy" },
        {
            new: "", title: "Apple Watch SE", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-se-digitalmat-gallery-1-202309?wid=728&hei=666&fmt=png-alpha&.v=1693271766625",
            image2: [{
                img1: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-case-41-aluminum-pink-nc-s9_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692920740110",
                img2: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-case-45-aluminum-midnight-cell-s9_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692920745177",
                img3: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-case-45-stainless-gold-s9_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692973854100"
            }],
            price: "From $249 or $20.75/mo. for 12 mo.*", bttn: "Buy"
        },
        {
            new: "New", title: "Apple Watch Hermès", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-hermes-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1692799806688",
            image2: [{
                img1: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-case-41-aluminum-pink-nc-s9_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692920740110",
                img2: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-case-45-stainless-gold-s9_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692973854100"
            }],
            price: "From $1249 or $104.08/mo. for 12 mo*", bttn: "Buy"
        },
        { new: "New", title: "Apple Watch Series 9", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-s9-digitalmat-gallery-3-202309?wid=728&hei=666&fmt=png-alpha&.v=1692847847702", image2: "", price: "Available in 8 case finishes", bttn: "Buy" },
        { new: "New", title: "Apple Watch Ultra 2", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-ultra2-digitalmat-gallery-2-202309?wid=728&hei=666&fmt=png-alpha&.v=1692603384610", image2: "", price: "From $799 or $66.58/mo. for 12 mo.*", bttn: "Buy" },
        { new: "New", title: "Apple Watch Ultra 2", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-ultra2-digitalmat-gallery-3-202309?wid=728&hei=666&fmt=png-alpha&.v=1692603384550", image2: "", price: "From $799 or $66.58/mo. for 12 mo.*", bttn: "Buy" },
        { new: "New", title: "Apple Watch Ultra 2", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-ultra2-digitalmat-gallery-4-202309?wid=728&hei=666&fmt=png-alpha&.v=1692603384617", image2: "", price: "From $799 or $66.58/mo. for 12 mo.*", bttn: "Buy" },
        { new: "", title: "Apple Watch SE", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-se-digitalmat-gallery-1-202309?wid=728&hei=666&fmt=png-alpha&.v=1693271766625", image2: "", price: "From $249 or $20.75/mo. for 12 mo.*", bttn: "Buy" },
        { new: "", title: "Apple Watch SE", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-se-digitalmat-gallery-2-202309?wid=728&hei=666&fmt=png-alpha&.v=1693849713342", image2: "", price: "From $249 or $20.75/mo. for 12 mo.*", bttn: "Buy" },
        { new: "", title: "Apple Watch SE", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-se-digitalmat-gallery-3-202309?wid=728&hei=666&fmt=png-alpha&.v=1693849835005", image2: "", price: "From $249 or $20.75/mo. for 12 mo.*", bttn: "Buy" },
        { new: "", title: "Apple Watch SE", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-se-digitalmat-gallery-4-202309?wid=728&hei=666&fmt=png-alpha&.v=1693894356398", image2: "", price: "From $249 or $20.75/mo. for 12 mo.*", bttn: "Buy" }
    ])
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

                    <div>{product?.length ?
                        <div className='display-flex justify_c-spacebetween'>
                            {product.map((pro) => (
                                <div className='product_box'>
                                    <p>{pro.new}</p>
                                    <p>{pro.title}</p>
                                    <div>
                                        <img src={pro.image} alt="" className='videopro15' />
                                    </div>
                                    <div>{pro.image2 ?.length?
                                        <div className='display-flex justify_c-spacebetween'>
                                            {pro.image2.map((img)=>(
                                                <div className='image2'>
                                                    <img src={img.img1} alt="" />
                                                    <img src={img.img2} alt="" />
                                                    <img src={img.img3} alt="" />
                                                    <img src={img.img4} alt="" />
                                                </div>
                                            )
                                            )}
                                        </div>
                                        :
                                        <div></div>
                                }
                                        
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