import React, { useState } from 'react'
import './picturean.scss'
import './picture.scss'
import axios from 'axios'

export default function Picture ({ user, setOn }) {
  const [imagen, setImagen] = useState('')
  const URI = `https://rental-app-server.herokuapp.com/api/v1/users/${user.id}`

  function handleChange (e) {
    e.preventDefault()
    setImagen({
      imagen: e.target.value
    })
  }

  async function handleClick (e) {
    e.preventDefault()
    await axios.patch(URI, { image: imagen.imagen })
    setOn(false)
    window.location.reload()
  }

  function handleClose (e) {
    e.preventDefault()
    setOn(false)
  }

  return (
    <section className='cd-intro'>
      <div className='cd-intro-content bouncy'>
        <h1>Foto de perfil: </h1>
        <input type='text' name='image' placeholder='Ingrese URL de la imagen' onChange={e => handleChange(e)} />
        <br />
        {!imagen && <button class='button fadeIn' type='submit' onClick={e => handleClose(e)}>Cancelar</button>}
        {imagen && <button class='button fadeIn' type='submit' onClick={e => handleClick(e)}>Confirmar</button>}
      </div>
    </section>
  )
}
