import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'
import swal from 'sweetalert'
import { selectAllCities, selectAllCountries } from '../../redux/services/hotelsServices.js'
import { postHotel } from '../../redux/slices/hotelSlice'

function CreateHotel ({ userId, submit }) {
  const dispatch = useDispatch()

  const amenitiesList = ['WiFi', 'TV', 'Calefacción', 'Chimenea', 'Cocina', 'Estacionamiento', 'Jacuzzi', 'Sala de Juegos', 'Refrigerador', 'Alquiler de Autos', 'Ascensor', 'Bañera', 'Cama King Size', 'Cócteles', 'Desayunos', 'Botones', 'Piscina', 'Servicio a la habitación']

  const countries = useSelector(selectAllCountries)

  const cities = useSelector(selectAllCities)

  const [next, setNext] = useState(1)

  const [input, setInput] = useState({
    name: '',
    description: '',
    stars: null,
    price: null,
    CountryId: null,
    CityId: null,
    address: '',
    latitude: null,
    longitude: null,
    guests: null,
    children: null,
    amenities: [],
    email: '',
    phone: '',
    web: '',
    mainImage: '',
    roomImage: '',
    barImage: '',
    amenitiesImage: '',
    otherImage: '',
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

  function handleCheck (e) {
    e.preventDefault()
    setInput({
      ...input,
      [e.target.name]: [...input.amenities, e.target.value]
    })
  }

  function handleQuit (e) {
    submit(e)
  }

  async function handleSubmit (e) {
    e.preventDefault()
    if (!input.name || !input.description || !input.stars || !input.price || !input.CountryId || !input.CityId || !input.address || !input.latitude || !input.longitude || !input.guests || !input.children || !input.amenities[0] || !input.email || !input.phone || !input.web || !input.mainImage || !input.roomImage || !input.amenitiesImage || !input.barImage || !input.otherImage) {
      swal({
        title: 'Error',
        text: 'Complete la información faltante',
        icon: 'error',
        button: 'Ok!'
      })
    } else {
      try {
        // await addNewHotel({ body: input })
        dispatch(postHotel(input))
        submit(e)
        // setTimeout(window.location.reload(), 2000)

        swal({
          title: 'Éxito',
          text: '¡Usuario alojamiento publicado éxito!',
          icon: 'success',
          button: 'Ok!'
        })

        setInput({
          name: '',
          description: '',
          stars: null,
          price: null,
          CountryId: null,
          CityId: null,
          address: '',
          latitude: null,
          longitude: null,
          guests: null,
          children: null,
          amenities: [],
          email: '',
          phone: '',
          web: '',
          mainImage: '',
          roomImage: '',
          barImage: '',
          amenitiesImage: '',
          otherImage: '',
          UserId: userId

        })
      } catch (err) {
        console.error('Failed')
      }
    }
  }

  return (
    console.log(input),
      <>
        <div className='publication'>
          <h1 className='publication__title'>Nuevo Alojamiento</h1>
          <form className='publication__form' onSubmit={e => handleSubmit(e)}>
            {next === 1 &&
              <>
                <label className='publication__form__input'>
                  <span>Nombre del Alojamiento: </span>
                  <br />
                  <input name='name' placeholder='Nombre del alojamiento...' type='text' onChange={(e) => handleChange(e)} />
                </label>
                <label className='publication__form__description'>
                  <span>Descripción: </span>
                  <br />
                  <textarea maxLength='210' name='description' placeholder='Descripción...' type='text' onChange={(e) => handleChange(e)} />
                </label>
                <label className='publication__form__input'>
                  <span>Email: </span>
                  <br />
                  <input name='email' placeholder='Email...' type='text' onChange={(e) => handleChange(e)} />
                </label>
                <label className='publication__form__input'>
                  <span>Teléfono: </span>
                  <br />
                  <input name='phone' placeholder='Teléfono...' type='text' onChange={(e) => handleChange(e)} />
                </label>
                <label className='publication__form__input'>
                  <span>Web: </span>
                  <br />
                  <input name='web' placeholder='Web...' type='text' onChange={(e) => handleChange(e)} />
                </label>
              </>}
            {next === 2 &&
              <>
                <label className='publication__form__input'>
                  <span>País: </span>
                  <br />
                  <select name='CountryId' onChange={e => handleChange(e)}>
                    <option name='CountryId' key='' value='all'>Países</option>
                    {countries.map(g => (
                      <option value={g.id} key={g.name}>{g.name}</option>
                    ))}
                  </select>
                </label>
                <label className='publication__form__input'>
                  <span>Ciudad: </span>
                  <br />
                  <select name='CityId' onChange={e => handleChange(e)}>
                    <option name='CityId' key='' value='all'>Ciudades</option>
                    {cities.filter(e => e.CountryId === parseInt(input.CountryId)).map(g => (
                      <option value={g.id} key={g.name}>{g.name}</option>
                    ))}
                  </select>
                </label>
                <label className='publication__form__input'>
                  <span>Dirección: </span>
                  <br />
                  <input name='address' placeholder='Dirección...' type='text' onChange={(e) => handleChange(e)} />
                </label>
                <label className='publication__form__input'>
                  <span>Latitud: </span>
                  <br />
                  <input name='latitude' placeholder='Latitud...' type='number' onChange={(e) => handleChange(e)} />
                </label>
                <label className='publication__form__input'>
                  <span>Longitud: </span>
                  <br />
                  <input name='longitude' placeholder='Longitud...' type='number' onChange={(e) => handleChange(e)} />
                </label>
              </>}
            {next === 3 &&
              <>
                <label className='publication__form__input'>
                  <span>Huéspedes: </span>
                  <br />
                  <input name='guests' placeholder='Huéspedes...' type='number' onChange={(e) => handleChange(e)} />
                </label>
                <label className='publication__form__input'>
                  <span>Niños: </span>
                  <br />
                  <input name='children' placeholder='Niños...' type='number' onChange={(e) => handleChange(e)} />
                </label>
                <label className='publication__form__input'>
                  <span>Estrellas: </span>
                  <br />
                  <input name='stars' placeholder='Estrellas...' type='number' onChange={(e) => handleChange(e)} />
                </label>
                <label className='publication__form__input'>
                  <span>Precio: </span>
                  <br />
                  <input name='price' placeholder='Precio...' type='number' onChange={(e) => handleChange(e)} />
                </label>
                <label className='publication__form__input'>
                  <span>Seleccione las Amenities: </span>
                  <br />
                  <select name='amenities' onChange={e => handleCheck(e)}>
                    <option name='amenities' key='' value='all'>Amenities</option>
                    {amenitiesList.filter(e => !input.amenities.includes(e)).map(g => (
                      <option value={g} key={g}>{g}</option>
                    ))}
                  </select>
                </label>
                {input.amenities[0] &&
                  <label className='publication__form__amenitiesList'>
                    <p>{input.amenities + ','}</p>
                  </label>}
              </>}
            {next === 4 &&
              <>
                <label className='publication__form__input'>
                  <span>Imagen principal: </span>
                  <br />
                  <input name='mainImage' placeholder='Imagen principal...' type='text' onChange={(e) => handleChange(e)} />
                </label>
                <label className='publication__form__input'>
                  <span>Imagen de la habitación: </span>
                  <br />
                  <input name='roomImage' placeholder='Imagen de la habitación...' type='text' onChange={(e) => handleChange(e)} />
                </label>
                <label className='publication__form__input'>
                  <span>Imagen del bar: </span>
                  <br />
                  <input name='barImage' placeholder='Imagen del bar...' type='text' onChange={(e) => handleChange(e)} />
                </label>
                <label className='publication__form__input'>
                  <span>Imagen de las comodidades: </span>
                  <br />
                  <input name='amenitiesImage' placeholder='Imagen de las comodidades...' type='text' onChange={(e) => handleChange(e)} />
                </label>
                <label className='publication__form__input'>
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
          <button className='publication__quit' type='submit' onClick={e => handleQuit(e)}> X </button>
        </div>
      </>
  )
}

export default CreateHotel
