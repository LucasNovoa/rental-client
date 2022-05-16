import React, { useState, useEffect } from 'react'
import './picturean.scss'
import './picture.scss'
import axios from 'axios'
import { clearPrewarmedResources } from 'mapbox-gl'

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
    // console.log(localStorage.getItem('user.image'))
    await axios.patch(URI, { image: imagen.imagen })

    // localStorage.setItem('user.image', JSON.stringify(imagen.imagen))
    // let image = ''
    // localStorage.setItem('image', JSON.stringify(user))
    // image = imagen.imagen
    // console.log(image)

    setOn(false)
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
