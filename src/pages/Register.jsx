import '../scss/register.scss'
import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
import { postUser } from '../redux/slices/userSlice'
import Header from '../components/Header/Header'

function Register () {
  const dispatch = useDispatch()

  // eslint-disable-next-line no-unused-vars
  const [errors, setErrors] = useState({})
  const [input, setInput] = useState({
    name: '',
    lastName: '',
    userName: '',
    email: '',
    birthDate: '',
    password: '',
    repeatPassword: '',
    profilePic: ''
  })

  function handleChange (e) {
    e.preventDefault()
    setInput({
      ...input,
      [e.target.name]: e.target.value

    })
  }

  function handleSubmit (e) {
    e.preventDefault()

    if (input.name.length >= 1 && input.lastName.length >= 1 && input.userName.length >= 1 && input.password.length >= 1) {
      dispatch(postUser(input))

      alert('User Created Successfully')
      setInput({
        name: '',
        lastName: '',
        userName: '',
        email: '',
        birthDate: '',
        password: '',
        repeatPassword: '',
        profilePic: ''
      })
    } else { alert('Complete the missing info') }
  }

  return (
    <>
      <Header />
      <section className='registration'>

        <div className='registration__data'>
          <h1>User Register</h1>
          <form className='registration__data__form' onSubmit={e => handleSubmit(e)}>
            <label>
              <span>Name: </span>
              <br />
              <input name='name' placeholder='Name...' type='text' onChange={(e) => handleChange(e)} />
            </label>

            <label>
              <span>Last name: </span>
              <br />
              <input name='lastName' placeholder='Last name...' type='text' onChange={(e) => handleChange(e)} />

            </label>

            <label>
              <span>User name: </span>
              <br />
              <input name='userName' placeholder='User name...' type='text' onChange={(e) => handleChange(e)} />

            </label>

            <label>
              <span>Email: </span>
              <br />
              <input name='email' placeholder='Email...' type='text' onChange={(e) => handleChange(e)} />

            </label>

            <label>
              <span>Birth date: </span>
              <br />
              <input name='birthDate' placeholder='Date of Birth...' type='text' onChange={(e) => handleChange(e)} />

            </label>

            <label>
              <span>Password: </span>
              <br />
              <input name='password' placeholder='Choose Password...' type='password' onChange={(e) => handleChange(e)} />

            </label>

            <label>
              <span>Repeat Password: </span>
              <br />
              <input name='repeatPassword' placeholder='Repeat Password...' type='password' onChange={(e) => handleChange(e)} />

            </label>

            <label>
              <span>Select your Profile Picture</span>
              <br />
              <input placeholder='Profile Picture...' name='profilePic' type='text' onChange={(e) => handleChange(e)} />

            </label>

          </form>
          <div className='registration__data__buttonRow'>
            <button className='registration__data__buttonRow__button__submit' type='submit' onClick={(e) => handleSubmit(e)}>Register!</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Register
