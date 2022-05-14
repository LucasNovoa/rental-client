import React, { useState, useEffect } from 'react'
import './picturean.scss'
import './picture.scss'

export default function Picture ({ setOn }) {
  const [image, setImage] = useState('')

  function handleChange (e) {
    e.preventDefault()
    setImage({
      ...image,
      image: e.target.value
    })
  }

  function handleClick (e) {
    e.preventDefault()
    setOn(false)
  }

  return (
    console.log(image),
      <section class='cd-intro'>
        <div class='cd-intro-content bouncy'>
          <h1>Foto de perfil: </h1>
          <input type='text' name='image' placeholder='Ingrese URL de la imagen' onChange={e => handleChange(e)} />
          <br />
          <button class='button fadeIn' type='submit' onClick={e => handleClick(e)}>Confirmar</button>
        </div>
      </section>
  )
}
