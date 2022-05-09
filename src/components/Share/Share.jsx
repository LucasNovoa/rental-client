import React from 'react'
import './share.scss'
import { BsFacebook, BsTwitter, BsWhatsapp } from 'react-icons/bs'

const Share = ({ hotel }) => {
  const message = `Mirá el hotel ${hotel.name}, re cheto para caer con la vagancia!`
  const url = window.location.href

  const handleFacebook = (e) => {
    e.preventDefault()
    window.open(`https://www.facebook.com/dialog/feed?app_id=145634995501895&link=${url}&redirect_uri=${url}`, 'Share Hotel', 'width=300', 'height=300', 'scrollbars=NO')
  }

  const handleTwitter = (e) => {
    e.preventDefault()
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${message}`, 'Share Hotel', 'width=300', 'height=300', 'scrollbars=NO')
  }

  const handleWhatsApp = (e) => {
    e.preventDefault()
    window.open(`https://wa.me/?text=${message} ${url}`, 'Share Hotel', 'width=300', 'height=300', 'scrollbars=NO')
  }

  return (
    <div className='share'>
      <button className='share__fb' onClick={handleFacebook}> <BsFacebook /> Facebook</button>
      <button className='share__tw' onClick={handleTwitter}> <BsTwitter /> Twitter</button>
      <button className='share__wp' onClick={handleWhatsApp}> <BsWhatsapp /> WhatsApp</button>
    </div>
  )
}

export default Share
