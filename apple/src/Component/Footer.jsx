import React from 'react'
import './Footer.css'
import { Paragraph, Paragraphbold } from '../Tags/Paragraph'
const Footer = ({children}) => {
  return (
    <div id='Footer'>
      <div>
        
        <Paragraph>{children}</Paragraph>
        <div>
          <div>
            <Paragraphbold>Shop and Learn</Paragraphbold>
            <Paragraph>Store</Paragraph>
            <Paragraph>Mac</Paragraph>
            <Paragraph>iPad</Paragraph>
            <Paragraph>iPhone</Paragraph>
            <Paragraph>Watch</Paragraph>
            <Paragraph>AirPods</Paragraph>
            <Paragraph>TV & Home</Paragraph>
            <Paragraph>AirTag</Paragraph>
            <Paragraph>Accessories</Paragraph>
            <Paragraph>Gift Cards</Paragraph>

            <Paragraphbold>Apple Wallet</Paragraphbold>
            <Paragraph>Wallet</Paragraph>
          </div>
          <div>
            <Paragraphbold>Account</Paragraphbold>
            <Paragraph>Manage Your Apple ID</Paragraph>
            <Paragraph>Apple Store Account</Paragraph>
            <Paragraph>iCloud.com</Paragraph>
            <Paragraphbold>Entertainment</Paragraphbold>
            <Paragraph>Apple One</Paragraph>
            <Paragraph>Apple TV+</Paragraph>
            <Paragraph>Apple Music</Paragraph>
            <Paragraph>Apple Arcade</Paragraph>
            <Paragraph>Apple Podcasts</Paragraph>
            <Paragraph>Apple Books</Paragraph>
            <Paragraph>App Store</Paragraph>
          </div>
          <div>
            <Paragraphbold>Apple Store</Paragraphbold>
            <Paragraph>Find a Store</Paragraph>
            <Paragraph>Genius Bar</Paragraph>
            <Paragraph>Today at Apple</Paragraph>
            <Paragraph>Apple Camp</Paragraph>
            <Paragraph>Apple Trade In</Paragraph>
            <Paragraph>Ways to Buy</Paragraph>
            <Paragraph>Recycling Programme</Paragraph>
            <Paragraph>Order Status</Paragraph>
            <Paragraph>Shopping Help</Paragraph>
          </div>
          <div>
            <Paragraphbold>For Business</Paragraphbold>
            <Paragraph>Apple and Business</Paragraph>
            <Paragraph>Shop for Business</Paragraph>
            <Paragraphbold>For Education</Paragraphbold>
            <Paragraph>Apple and Education</Paragraph>
            <Paragraph>Shop for Education</Paragraph>
            <Paragraph>Shop for University</Paragraph>
            <Paragraphbold>For Healthcare</Paragraphbold>
            <Paragraph>Apple in Healthcare</Paragraph>
            <Paragraph>Health on Apple Watch</Paragraph>
          </div>
          <div>
            <Paragraphbold>Apple Values</Paragraphbold>
            <Paragraph>Accessibility</Paragraph>
            <Paragraph>Education</Paragraph>
            <Paragraph>Environment</Paragraph>
            <Paragraph>Privacy</Paragraph>
            <Paragraph>Supplier Responsibility</Paragraph>
            <Paragraphbold>About Apple</Paragraphbold>
            <Paragraph>Newsroom</Paragraph>
            <Paragraph>Apple Leadership</Paragraph>
            <Paragraph>Career Opportunities</Paragraph>
            <Paragraph>Investors</Paragraph>
            <Paragraph>Ethics & Compliance</Paragraph>
            <Paragraph>Events</Paragraph>
            <Paragraph>Contact Apple</Paragraph>
          </div>
        </div>
        <Paragraph>More ways to shop: Find an Apple Store or other retailer near you. Or call 000800 040 1966.</Paragraph>
        <div>
        <Paragraph>Copyright © 2023 Apple Inc. All rights reserved.</Paragraph>
          <div>
            <Paragraph>Privacy Policy | Terms of Use | Sales Policy | Legal | Site Map</Paragraph>
          </div>
          <Paragraph>India</Paragraph>
        </div>
      </div>
    </div>
  )
}

export default Footer