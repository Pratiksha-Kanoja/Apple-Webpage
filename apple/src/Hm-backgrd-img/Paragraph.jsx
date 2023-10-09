import React from 'react'
import './Paragraph.css'
const Paragraph = ({children}) => {
  return (
    <div id='paragraph'>
        <p>{children}</p>
    </div>
  )
}
const Paragraphbold = ({children}) => {
  return (
    <div id='paragraph_bold'>
        <p>{children}</p>
    </div>
  )
}

export {Paragraph,Paragraphbold}