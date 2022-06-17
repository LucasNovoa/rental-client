import { useRef } from 'react'

import LoginButton from '../components/LoginButton'

import { useNavigate, Link } from 'react-router-dom'

import Header from '../components/Header/Header'

import { useAuth } from '../hooks/useAuth'

import swal from 'sweetalert'

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
      navigate('/profile')
    }).catch(() => swal({
      text: 'Usuario o Contraseña incorrectos',
      button: {
        text: 'Reintentar',
        closeModal: 'true'
      },
      icon: 'warning'
    }))
  }

  return (
    <section className='bg'>
      <Header />
      <form className='Login' onSubmit={handleSubmit}>
        <label className='Login__Label' htmlFor='email-address'>
          <span>Correo Electrónico:</span>
          <input type='email' name='' required placeholder='Correo Electrónico' ref={emailRef} />
        </label>

        <label className='Login__Label' htmlFor='password'>
          <span>Contraseña:</span>
          <input type='password' name='' required placeholder='Contraseña' ref={passwordRef} />
        </label>

        <button className='buttonLoginPage' type='submit'>Ingresar</button>

        <Link to='/passwordRecovery'><p>Olvidé mi contraseña</p></Link>
        <LoginButton />
        <Link to='/register'><p>Aún no tengo cuenta...</p></Link>
      </form>
    </section>
  )
}

export { Login }
