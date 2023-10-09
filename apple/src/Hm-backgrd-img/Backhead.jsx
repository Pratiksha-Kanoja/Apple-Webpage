import './Backhead.css'
import React, { Children } from 'react'

const Backhead = ({children}) => {
  return (
    <div id='back_head'>{children}</div>
  )
}

export default Backhead