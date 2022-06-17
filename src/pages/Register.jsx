/* eslint-disable no-undef */
import '../scss/register.scss'
import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
import Header from '../components/Header/Header'
import '../scss/RegisterType.scss'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import { postUser } from '../redux/slices/userSlice'

function Register () {
  const dispatch = useDispatch()
  const navigateTo = useNavigate()
  // eslint-disable-next-line no-unused-vars
  const [errors, setErrors] = useState({})
  const [input, setInput] = useState({
    typePerson: '',
    firstName: '',
    lastName: '',
    organization: '',
    email: '',
    password: '',
    repeatPass: '',
    image: ''
  })

  function handleType (e) {
    e.preventDefault()
    setInput({
      typePerson: e.target.value
    })
  }

  function handleChange (e) {
    e.preventDefault()
    setInput({
      ...input,
      [e.target.name]: e.target.value

    })
  }

  async function handleSubmit (e) {
    e.preventDefault()
    if (input.typePerson === 'natural') {
      if (!input.email || !input.password || !input.firstName || !input.lastName || !input.repeatPass) {
        swal({
          title: 'Error',
          text: 'Complete la información faltante',
          icon: 'error',
          button: 'Ok!'
        })
      } else {
        try {
          dispatch(postUser(input))
          swal({
            title: 'Éxito',
            text: '¡Usuario creado con éxito!',
            icon: 'success',
            button: 'Ok!'
          })
          setInput({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            repeatPass: '',
            image: ''
          })
          navigateTo('/login')
        } catch (e) {
          console.error(e)
        }
      }
    } else if (input.typePerson === 'legal') {
      if (!input.email || !input.password || !input.organization || !input.repeatPass) {
        swal({
          title: 'Error',
          text: 'Complete la información faltante',
          icon: 'error',
          button: 'Ok!'
        })
      } else {
        dispatch(postUser(input))
        swal({
          title: 'Éxito',
          text: '¡Usuario creado con éxito!',
          icon: 'success',
          button: 'Ok!'
        })
        setInput({
          organization: '',
          email: '',
          password: '',
          repeatPass: '',
          image: ''
        })
        navigateTo('/login')
      }
    }
  }

  return (
    <>
      <Header />
      {!input.typePerson &&
        <section className='welcome'>
          <div className='welcome__data'>
            <h2>¡Bienvenido!</h2>
            <h3>¿Eres una persona o una empresa?</h3>
            <button type='submit' value='natural' onClick={e => handleType(e)}>Soy una persona</button>
            <button type='submit' value='legal' onClick={e => handleType(e)}>Represento a una empresa</button>
          </div>
        </section>}
      {input.typePerson &&
        <section className='registration'>

          <div className='registration__data'>
            <h1>Registro</h1>
            <form className='registration__data__form' onSubmit={e => handleSubmit(e)}>
              <br />
              {input.typePerson === 'natural' &&
                <>
                  <label>
                    <span>Nombre: </span>
                    <br />
                    <input name='firstName' placeholder='Nombre...' type='text' onChange={(e) => handleChange(e)} />
                  </label>
                  <label>
                    <span>Apellido/s: </span>
                    <br />
                    <input name='lastName' placeholder='Apellido/s...' type='text' onChange={(e) => handleChange(e)} />
                  </label>
                </>}
              {input.typePerson === 'legal' &&
                <label>
                  <span>Empresa: </span>
                  <br />
                  <input name='organization' placeholder='Empresa...' type='text' onChange={(e) => handleChange(e)} />

                </label>}

              <label>
                <span>Email: </span>
                <br />
                <input name='email' placeholder='Email...' type='text' onChange={(e) => handleChange(e)} />

              </label>
              <label>
                <span>Contraseña: </span>
                <br />
                <input name='password' placeholder='Contraseña...' type='password' onChange={(e) => handleChange(e)} />

              </label>

              <label>
                <span>Repita Contraseña: </span>
                <br />
                <input name='repeatPass' placeholder='Repita Contraseña...' type='password' onChange={(e) => handleChange(e)} />

              </label>

              <label>
                <span>Elija su foto de perfil: </span>
                <br />
                <input placeholder='Foto de perfil...' name='image' type='text' onChange={(e) => handleChange(e)} />

              </label>
              <br />

            </form>
            <div className='registration__data__buttonRow'>
              <button className='registration__data__buttonRow__button__submit' type='submit' onClick={(e) => handleSubmit(e)}>Registrarse</button>
            </div>
          </div>
        </section>}
      {/* <Footer /> */}
    </>
  )
}

export default Register
