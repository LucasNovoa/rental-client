import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'
import './CreateHotel.scss'

function CreateHotel () {
  const dispatch = useDispatch()
  const navigateTo = useNavigate()
  // eslint-disable-next-line no-unused-vars
  const [errors, setErrors] = useState({})
  const [next, setNext] = useState(1)
  const [previous, setPrevious] = useState(next)
  const [input, setInput] = useState({
    name: '',
    description: '',
    stars: 0,
    price: 0,
    country: '',
    city: '',
    address: '',
    latitude: 0,
    longitude: 0,
    guests: 0,
    children: 0,
    email: '',
    phone: '',
    web: '',
    mainImage: '',
    roomImage: '',
    barImage: '',
    amenitiesImage: '',
    otherImage: ''
    // UserId
  })

  function handleNext (e) {
    e.preventDefault()
    console.log(next)
    setNext(
      next + 1
    )
  }

  function handleChange (e) {
    e.preventDefault()
    setInput({
      ...input,
      [e.target.name]: e.target.value

    })
  }

  return (
    <>
      <section className='publication'>

        <div className='publication'>
          <h1>Nuevo Alojamiento</h1>
          <form className='publication__data__form'>
            <br />

            {next === 1 &&
              <>
                <label>
                  <span>Nombre: </span>
                  <br />
                  <input name='name' placeholder='Nombre...' type='text' onChange={(e) => handleChange(e)} />
                </label>
                <label>
                  <span>Descripción: </span>
                  <br />
                  <input name='description' placeholder='Descripción...' type='text' onChange={(e) => handleChange(e)} />
                </label>
                <label>
                  <span>Estrellas: </span>
                  <br />
                  <input name='stars' placeholder='Estrellas...' type='number' onChange={(e) => handleChange(e)} />
                </label>
                <label>
                  <span>Precio: </span>
                  <br />
                  <input name='price' placeholder='Precio...' type='number' onChange={(e) => handleChange(e)} />
                </label>
              </>}
            {next === 2 &&
              <>
                <label>
                  <span>País: </span>
                  <br />
                  <input name='name' placeholder='Nombre...' type='text' onChange={(e) => handleChange(e)} />
                </label>
                <label>
                  <span>Descripción: </span>
                  <br />
                  <input name='description' placeholder='Descripción...' type='text' onChange={(e) => handleChange(e)} />
                </label>
                <label>
                  <span>Estrellas: </span>
                  <br />
                  <input name='stars' placeholder='Estrellas...' type='number' onChange={(e) => handleChange(e)} />
                </label>
                <label>
                  <span>Precio: </span>
                  <br />
                  <input name='price' placeholder='Precio...' type='number' onChange={(e) => handleChange(e)} />
                </label>
              </>}
          </form>
          <button type='submit' onClick={e => handleNext(e)}>Siguiente</button>
        </div>
      </section>
    </>

  )
}

/* eslint-disable no-undef */

{ /* function Register () {

    onSubmit={e => handleSubmit(e)}

  function handleType (e) {
    e.preventDefault()
    setInput({
      typePerson: e.target.value
    })
  }

  function handleSubmit (e) {
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
    console.log(input),

  )
} */ }

export default CreateHotel

{ /* {input.typePerson === 'legal' &&
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
              <div className='publication__data__buttonRow'>
                <button className='publication__data__buttonRow__button__submit' type='submit' onClick={(e) => handleSubmit(e)}>Registrarse</button>
              </div>
            </div>
          </section>
      </> */ }
