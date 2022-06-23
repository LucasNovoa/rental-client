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
    <section className='cp'>
      <Header />
      <div className='ChangePassword'>
        <div className='ChangePassword__Container'>
          <h1>Cambiar contraseña</h1>
          <p>¡Elige una nueva contraseña para ingresar a Rental App!</p>
          <form action='' onSubmit={handleSubmit}>
            {/* <label htmlFor=''>Nueva Contraseña</label> */}
            <input type='password' placeholder='Ingresa tu Nueva Contraseña...' ref={passRef} />
            <button type='submit'>Confirmar</button>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </section>

  )
}

export { ChangePassword }
