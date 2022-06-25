import React, { useRef } from 'react'

import Header from '../components/Header/Header'

import { useNavigate } from 'react-router-dom'

import Footer from '../components/Footer/Footer'

import { useAuth } from '../hooks/useAuth'

import '../scss/PasswordRecovery.scss'

import swal from 'sweetalert'

const PasswordRecovery = () => {
  const auth = useAuth()

  const navigate = useNavigate()

  const emailRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()

    const email = emailRef.current.value

    auth.recovery(email).then(() => {
      swal({
        title: 'Éxito',
        text: '¡Revisa tu casilla de correo!',
        icon: 'success',
        button: 'Ok!'
      })
      navigate('/login')
    })
  }

  return (
    <section className='pr'>
      <Header />
      <div className='PasswordRecovery'>
        <div className='PasswordRecovery__Container'>
          <h1>Recuperar Contraseña</h1>
          <p>¡Te enviaremos un correo con el link para cambiar tu contraseña!</p>
          <form action='' onSubmit={handleSubmit}>
            {/* <label htmlFor=''>Correo Electrónico</label> */}
            <input type='text' placeholder='Ingresa aquí tu Correo Electrónico...' ref={emailRef} />
            <button type='submit'>Confirmar</button>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </section>

  )
}

export { PasswordRecovery }
