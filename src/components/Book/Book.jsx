// import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import './book.scss'

function Book ({ setRes, res, bookHotel }) {
  const hotel = res

  function handleClick (e) {
    e.preventDefault()
    setRes({
      ...res,
      open: false
    })
  }

  function handlePay (e) {
    e.preventDefault()
    // window.open(`${hotel.initPointMP}`)
  }

  return (
    console.log(hotel.checkIn),
      <div className='booking'>
        <button className='booking__close' onClick={e => handleClick(e)}> Cerrar </button>
        <div className='booking__image'>
          <img src={bookHotel.mainImage} />
        </div>
        <div className='booking__info'>
          <h2>{hotel.name}</h2>
          <p>Check-In: {hotel.checkIn}</p>
          <p>Check-Out: {hotel.checkOut}</p>
          <p>Ciudad: {bookHotel.City.name}</p>
          <p>Estado: Pago Pendiente</p>
          <p>Precio por noche: ${bookHotel.price}</p>
          <p>Cantidad de Noches: {hotel.nights}</p>
          <button className='booking__info__pay' onClick={e => handlePay(e)}>Pagar ahora</button>
        </div>
      </div>
  )
}

export default Book
