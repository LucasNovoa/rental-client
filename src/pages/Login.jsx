import { useRef } from 'react'

import { useNavigate, Link } from 'react-router-dom'

import Header from '../components/Header/Header'

import { useAuth } from '../hooks/useAuth'

import '../scss/Login.scss'

function Login () {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const auth = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    const email = emailRef.current.value
    const password = passwordRef.current.value

    auth.signIn(email, password).then(() => {
      navigate('/')
    })
  }

  return (
    <>
      <Header />
      <form className='Login' onSubmit={handleSubmit}>
        <label className='Login__Label' htmlFor='email-address'>
          <span>Correo Electrónico</span>
          <input type='email' name='' required placeholder='Correo Electrónico' ref={emailRef} />
        </label>

        <label className='Login__Label' htmlFor='password'>
          <span>Contraseña</span>
          <input type='password' name='' required placeholder='Contraseña' ref={passwordRef} />
        </label>

        <button className='btn' type='submit'>Ingresar</button>

        <Link to='/passwordRecovery'>¿Te olvidaste la contraseña?</Link>

      </form>

      <button className='btn' type='submit' onClick={() => auth.signInGoogle()}>Ingresar con Google</button>

    </>
  )
}

export { Login }
