import { useRef } from 'react'

import { useNavigate } from 'react-router-dom'

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
          <span>Email</span>
          <input type='email' name='' required placeholder='Email Address' ref={emailRef} />
        </label>

        <label className='Login__Label' htmlFor='password'>
          <span>Password</span>
          <input type='password' name='' required placeholder='Password' ref={passwordRef} />
        </label>

        <button type='submit'>Sign In</button>
      </form>
    </>
  )
}

export { Login }
