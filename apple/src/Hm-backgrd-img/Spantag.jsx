import React from 'react'
import './Spantag.css'

const Spantag1 = ({children}) => {
  return (
    <span id="span_50">{children}</span>
  )
}

const Spantag2 = ({children}) => {
  return (
    <span id="span_30">{children}</span>
  )
}

export {Spantag1,Spantag2}