import React, { useRef } from 'react'

import Header from '../components/Header/Header'

import { useNavigate } from 'react-router-dom'

import Footer from '../components/Footer/Footer'

import { useAuth } from '../hooks/useAuth'

import '../scss/PasswordRecovery.scss'

const PasswordRecovery = () => {
  const auth = useAuth()

  const navigate = useNavigate()

  const emailRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()

    const email = emailRef.current.value

    auth.reset(email).then(() => {
      navigate('/changePassword')
    })
  }

  return (
    <>
      <Header />
      <div className='PasswordRecovery'>
        <div className='PasswordRecovery__Container'>
          <h1>Recuperar Contraseña</h1>
          <p>Informa el correo electrónico usado para crear tu cuenta.</p>
          <form action='' onSubmit={handleSubmit}>
            <label htmlFor=''>Correo Electrónico</label>
            <input type='text' placeholder='Escribe tu Correo Electrónico' ref={emailRef} />
            <button type='submit'>Confirmar</button>
          </form>
        </div>
      </div>
      <Footer />
    </>

  )
}

export { PasswordRecovery }
