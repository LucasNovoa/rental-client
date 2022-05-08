import React from 'react'

import Header from '../components/Header/Header'

import Footer from '../components/Footer/Footer'

import '../scss/PasswordRecovery.scss'

const PasswordRecovery = () => {
  return (
    <>
      <Header />
      <div className='PasswordRecovery'>
        <div className='PasswordRecovery__Container'>
          <h1>Recuperar Contraseña</h1>
          <p>Informa el correo el electrónico usado para crear tu cuenta</p>
          <form action=''>
            <label htmlFor=''>Correo Electrónico</label>
            <input type='text' placeholder='Escribe tu Correo Electrónico' />
            <button type='submit'>Confirmar</button>
          </form>
        </div>
      </div>
      <Footer />
    </>

  )
}

export { PasswordRecovery }
