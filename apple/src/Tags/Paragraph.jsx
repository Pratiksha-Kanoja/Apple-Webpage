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

const Paragraph12 = ({children}) => {
  return (
    <div id='paragraph-12'>{children}</div>
  )
}

const Paragraph18 = ({children}) => {
  return (
    <div id='paragraph-18'>{children}</div>
  )
}

const Paragraph15 = ({children}) => {
  return (
    <div id='paragraph-15'>{children}</div>
  )
}

export {Paragraph,Paragraphbold,Paragraph12,Paragraph18,Paragraph15}