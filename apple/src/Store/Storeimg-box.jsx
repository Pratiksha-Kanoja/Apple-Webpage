import React from 'react'
import './Storeimg-box.css'

const Storeimgbox = ({children}) => {
  return (
    <div id='storeimg-box'>
        <img src={children} alt="" />
    </div>
  )
}

const Storetextbox= ({children}) => {
  return (
    <div id='store-textbox'>
    {children}
    </div>
  )
}

export {Storeimgbox,Storetextbox}