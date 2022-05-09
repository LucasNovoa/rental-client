import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'
import './CreateHotel.scss'
import { postHotel } from '../../redux/slices/hotelSlice'
import { selectAllCountries, getCountries, getCountriesStatus } from '../../redux/slices/countrySlice'
import { selectAllCities, getCities, getCitiesStatus } from '../../redux/slices/citySlice'

function CreateHotel ({ userId }) {
  const dispatch = useDispatch()

  const countries = useSelector(selectAllCountries)
  const countryIdStatus = useSelector(getCountriesStatus)

  useEffect(() => {
    if (countryIdStatus === 'idle') {
      dispatch(getCountries())
    }
  }, [countryIdStatus, dispatch])

  const cities = useSelector(selectAllCities)
  const cityIdStatus = useSelector(getCitiesStatus)

  useEffect(() => {
    if (cityIdStatus === 'idle') {
      dispatch(getCities())
    }
  }, [cityIdStatus, dispatch])

  const navigateTo = useNavigate()
  // eslint-disable-next-line no-unused-vars
  const [errors, setErrors] = useState({})
  const [next, setNext] = useState(1)

  const [input, setInput] = useState({
    name: 'Hotel',
    description: 'Hotel Default',
    stars: 3,
    price: 250,
    CountryId: 2,
    CityId: 2,
    address: 'Prueba 1234',
    latitude: 0,
    longitude: 0,
    guests: 5,
    children: 2,
    email: 'prueba@mail.com',
    phone: '11 4444 5555',
    web: 'prueba.com.ar',
    mainImage: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/327308851.jpg?k=812d27fb80553a7a0231e05a076568937a18b87cb33ec7a3a1f3feb0cc89b4f1&o=&hp=1',
    roomImage: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/111155493.jpg?k=112aa23f3de8bb180d37bf1380442dbb42daaef09b8c5279822d5df413d60b70&o=&hp=1',
    barImage: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/111155847.jpg?k=15f4e83547e57e407eb13f95a491272b69854eb3412fb9ae839370198d7e9ffd&o=&hp=1',
    amenitiesImage: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/111160486.jpg?k=49be336a9fdb24c9550c4d19cde31147bb475913525b907c612e6079e3e90445&o=&hp=1',
    otherImage: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/111161887.jpg?k=f40f9e8069050aadccfca8f6c6de541ef2f3dda9a203ac0052290703d49fed98&o=&hp=1',
    UserId: userId
  })

  function handleNext (e) {
    e.preventDefault()
    setNext(
      next + 1
    )
  }

  function handlePrevious (e) {
    e.preventDefault()
    setNext(
      next - 1
    )
  }

  function handleChange (e) {
    e.preventDefault()
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit (e) {
    e.preventDefault()

    dispatch(postHotel(input))

    swal({
      title: 'Éxito',
      text: '¡Usuario alojamiento publicado éxito!',
      icon: 'success',
      button: 'Ok!'
    })
    setInput({
      name: 'Hotel',
      description: 'Hotel Default',
      stars: 3,
      price: 250,
      CountryId: 2,
      CityId: 2,
      address: 'Prueba 1234',
      latitude: 0,
      longitude: 0,
      guests: 5,
      children: 2,
      email: 'prueba@mail.com',
      phone: '11 4444 5555',
      web: 'prueba.com.ar',
      mainImage: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/327308851.jpg?k=812d27fb80553a7a0231e05a076568937a18b87cb33ec7a3a1f3feb0cc89b4f1&o=&hp=1',
      roomImage: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/111155493.jpg?k=112aa23f3de8bb180d37bf1380442dbb42daaef09b8c5279822d5df413d60b70&o=&hp=1',
      barImage: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/111155847.jpg?k=15f4e83547e57e407eb13f95a491272b69854eb3412fb9ae839370198d7e9ffd&o=&hp=1',
      amenitiesImage: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/111160486.jpg?k=49be336a9fdb24c9550c4d19cde31147bb475913525b907c612e6079e3e90445&o=&hp=1',
      otherImage: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/111161887.jpg?k=f40f9e8069050aadccfca8f6c6de541ef2f3dda9a203ac0052290703d49fed98&o=&hp=1',
      UserId: userId
    })
    navigateTo('/profile')
  }

  return (
    <>
      <div className='publication'>
        <h1>Nuevo Alojamiento</h1>
        <form className='publication__form'>
          <br />
          {next === 1 &&
            <>
              <label>
                <span>Nombre del Alojamiento: </span>
                <br />
                <input name='name' placeholder='Nombre del alojamiento...' type='text' onChange={(e) => handleChange(e)} />
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
                <select name='CountryId' onChange={e => handleChange(e)}>
                  <option name='CountryId' key='' value='all'>Países</option>
                  {countries.map(g => (
                    <option value={g.id} key={g.name}>{g.name}</option>
                  ))}
                </select>
              </label>
              <label>
                <span>Ciudad: </span>
                <select name='CityId' onChange={e => handleChange(e)}>
                  <option name='CityId' key='' value='all'>Ciudades</option>
                  {cities.map(g => (
                    <option value={g.id} key={g.name}>{g.name}</option>
                  ))}
                </select>
              </label>
              <label>
                <span>Dirección: </span>
                <br />
                <input name='address' placeholder='Dirección...' type='text' onChange={(e) => handleChange(e)} />
              </label>
              <label>
                <span>Latitud: </span>
                <br />
                <input name='latitude' placeholder='Latitud...' type='number' onChange={(e) => handleChange(e)} />
              </label>
              <label>
                <span>Longitud: </span>
                <br />
                <input name='longitude' placeholder='Longitud...' type='number' onChange={(e) => handleChange(e)} />
              </label>
            </>}
          {next === 3 &&
            <>
              <label>
                <span>Huéspedes: </span>
                <br />
                <input name='guests' placeholder='Huéspedes...' type='number' onChange={(e) => handleChange(e)} />
              </label>
              <label>
                <span>Niños: </span>
                <br />
                <input name='children' placeholder='Niños...' type='number' onChange={(e) => handleChange(e)} />
              </label>
              <label>
                <span>Email: </span>
                <br />
                <input name='email' placeholder='Email...' type='text' onChange={(e) => handleChange(e)} />
              </label>
              <label>
                <span>Teléfono: </span>
                <br />
                <input name='phone' placeholder='Teléfono...' type='text' onChange={(e) => handleChange(e)} />
              </label>
              <label>
                <span>Web: </span>
                <br />
                <input name='web' placeholder='Web...' type='text' onChange={(e) => handleChange(e)} />
              </label>
            </>}
          {next === 4 &&
            <>
              <label>
                <span>Imagen principal: </span>
                <br />
                <input name='mainImage' placeholder='Imagen principal...' type='text' onChange={(e) => handleChange(e)} />
              </label>
              <label>
                <span>Imagen de la habitación: </span>
                <br />
                <input name='roomImage' placeholder='Imagen de la habitación...' type='text' onChange={(e) => handleChange(e)} />
              </label>
              <label>
                <span>Imagen del bar: </span>
                <br />
                <input name='barImage' placeholder='Imagen del bar...' type='text' onChange={(e) => handleChange(e)} />
              </label>
              <label>
                <span>Imagen de las comodidades: </span>
                <br />
                <input name='amenitiesImage' placeholder='Imagen de las comodidades...' type='text' onChange={(e) => handleChange(e)} />
              </label>
              <label>
                <span>Otra imagen: </span>
                <br />
                <input name='otherImage' placeholder='Otra imagen...' type='text' onChange={(e) => handleChange(e)} />
              </label>
            </>}
        </form>
        {next > 1 && next < 5 &&
          <button className='publication__previous' type='submit' onClick={e => handlePrevious(e)}>Anterior</button>}
        {next < 4 &&
          <button className='publication__next' type='submit' onClick={e => handleNext(e)}>Siguiente</button>}
        {next === 4 &&
          <button className='publication__submit' type='submit' onClick={e => handleSubmit(e)}>Publicar</button>}
      </div>

    </>

  )
}

export default CreateHotel
