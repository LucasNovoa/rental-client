import React, { useRef } from 'react'

import Header from '../components/Header/Header'

import { useNavigate, useSearchParams } from 'react-router-dom'

import Footer from '../components/Footer/Footer'

import { useAuth } from '../hooks/useAuth'

import '../scss/ChangePassword.scss'

const ChangePassword = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const auth = useAuth()

  const token = searchParams.get('token')

  const navigate = useNavigate()

  const passRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()

    const password = passRef.current.value

    auth.changePass(token, password).then(() => {
      navigate('/login')
    })
  }

  return (
    <>
      <Header />
      <div className='ChangePassword'>
        <div className='ChangePassword__Container'>
          <h1>Nueva contraseña</h1>
          <p>Ingresa la nueva contraseña con la que quieres acceder a la aplicación.</p>
          <form action='' onSubmit={handleSubmit}>
            <label htmlFor=''>Nueva Contraseña</label>
            <input type='password' placeholder='Escribe tu Nueva Contraseña' ref={passRef} />
            <button type='submit'>Confirmar</button>
          </form>
        </div>
      </div>
      <Footer />
    </>

  )
}

export { ChangePassword }
