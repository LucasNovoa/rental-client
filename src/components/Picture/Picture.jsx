import React, { useState, useEffect } from 'react'
import './picturean.scss'
import './picture.scss'

export default function Picture ({ setOn }) {
  const [picture, setPicture] = useState({
    image: ''
  })

  function handleClick (e) {
    e.preventDefault()
    setOn(false)
  }

  return (
    <section class='cd-intro'>
      <div class='cd-intro-content bouncy'>
        <h1>Foto de perfil: </h1>
        <input type='text' placeholder='Ingrese URL de la imagen' />
        <br />
        <button type='submit' onClick={e => handleClick(e)}>Confirmar</button>
      </div>
    </section>
  )
}
