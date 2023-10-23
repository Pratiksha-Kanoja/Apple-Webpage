import React, { useState } from 'react'
import './Watch_Singleproduct.css'
import { useParams } from 'react-router-dom';

const Watch_Singleproduct = () => {
    const [product, setproduct] = useState([
        {
            new: "New", title: "Apple Watch Series 9", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-s9-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693943487336",
            image2: [
                {img1: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-case-41-aluminum-pink-nc-s9_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692920740110"},
                {img1: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-case-45-aluminum-midnight-cell-s9_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692920745177"},
                {img1: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-case-41-aluminum-starlight-nc-s9_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692920742817"},
                {img1: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-case-45-stainless-gold-s9_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692973854100"}],
            price: "From $399 or $33.25/mo.for 12 mo.*", bttn: "Buy" , id: 1
        },
        { new: "New", title: "Apple Watch Ultra 2", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-ultra2-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693611623658", image2: "", price: "From $799 or $66.58/mo. for 12 mo.*", bttn: "Buy", id:2 },
        {
            new: "", title: "Apple Watch SE", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-se-digitalmat-gallery-1-202309?wid=728&hei=666&fmt=png-alpha&.v=1693271766625",
            image2: [{img1: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-case-41-aluminum-pink-nc-s9_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692920740110"},
                {img1: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-case-45-aluminum-midnight-cell-s9_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692920745177"},
                {img1: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-case-45-stainless-gold-s9_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692973854100"}],
            price: "From $249 or $20.75/mo. for 12 mo.*", bttn: "Buy", id:3
        },
        {
            new: "New", title: "Apple Watch Hermès", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-hermes-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1692799806688",
            image2: [{img1: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-case-41-aluminum-pink-nc-s9_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692920740110"},
                {img1: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-case-45-aluminum-midnight-cell-s9_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692920745177"}],
            price: "From $1249 or $104.08/mo. for 12 mo*", bttn: "Buy" ,id:4
        },
        { new: "New", title: "Apple Watch Series 9", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-s9-digitalmat-gallery-3-202309?wid=728&hei=666&fmt=png-alpha&.v=1692847847702", image2: "", price: "Available in 8 case finishes", bttn: "Buy", id:5 },
        { new: "New", title: "Apple Watch Ultra 2", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-ultra2-digitalmat-gallery-2-202309?wid=728&hei=666&fmt=png-alpha&.v=1692603384610", image2: "", price: "From $799 or $66.58/mo. for 12 mo.*", bttn: "Buy", id:6 },
        { new: "New", title: "Apple Watch Ultra 2", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-ultra2-digitalmat-gallery-3-202309?wid=728&hei=666&fmt=png-alpha&.v=1692603384550", image2: "", price: "From $799 or $66.58/mo. for 12 mo.*", bttn: "Buy", id:7 },
        { new: "New", title: "Apple Watch Ultra 2", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-ultra2-digitalmat-gallery-4-202309?wid=728&hei=666&fmt=png-alpha&.v=1692603384617", image2: "", price: "From $799 or $66.58/mo. for 12 mo.*", bttn: "Buy", id:8 },
        { new: "", title: "Apple Watch SE", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-se-digitalmat-gallery-1-202309?wid=728&hei=666&fmt=png-alpha&.v=1693271766625", image2: "", price: "From $249 or $20.75/mo. for 12 mo.*", bttn: "Buy", id:9 },
        { new: "", title: "Apple Watch SE", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-se-digitalmat-gallery-2-202309?wid=728&hei=666&fmt=png-alpha&.v=1693849713342", image2: "", price: "From $249 or $20.75/mo. for 12 mo.*", bttn: "Buy", id:10 },
        { new: "", title: "Apple Watch SE", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-se-digitalmat-gallery-3-202309?wid=728&hei=666&fmt=png-alpha&.v=1693849835005", image2: "", price: "From $249 or $20.75/mo. for 12 mo.*", bttn: "Buy", id:11 },
        { new: "", title: "Apple Watch SE", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-se-digitalmat-gallery-4-202309?wid=728&hei=666&fmt=png-alpha&.v=1693894356398", image2: "", price: "From $249 or $20.75/mo. for 12 mo.*", bttn: "Buy", id:12 }
    ])
    const { id } = useParams();
  return (
    <div>
        {product?.id? 
        <div>{product.map((singlepro)=>(
          <div>
             <p>{singlepro.title}</p>
          </div>  
        )).id}</div> 
        : 
        <div>Loading....</div> }
    </div>
   
  )
}

export default Watch_Singleproduct