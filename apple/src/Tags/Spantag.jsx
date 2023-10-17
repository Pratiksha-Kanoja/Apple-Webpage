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

const Spantag25 = ({children}) => {
  return (
    <span id="span_25">{children}</span>
  )
}

const Spantag35 = ({children}) => {
  return (
    <span id="span_35">{children}</span>
  )
}

export {Spantag1,Spantag2,Spantag35,Spantag25}