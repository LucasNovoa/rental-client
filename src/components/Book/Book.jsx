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
    <div className='booking'>
      <div className='booking__image'>
        <img src={bookHotel.mainImage} />
      </div>
      <div className='booking__info'>
        <h2 className='booking__info__title'><strong>Resumen pre-reserva</strong></h2>
        <h3 className='booking__info__hotel'><strong>{hotel.name}</strong></h3>
        <p className='booking__info__p'><strong>Check-In:</strong> {hotel.checkIn}</p>
        <p className='booking__info__p'><strong>Check-Out:</strong> {hotel.checkOut}</p>
        <p className='booking__info__p'><strong>Ciudad:</strong> {bookHotel.City.name}</p>
        <p className='booking__info__p'><strong>Estado:</strong> Pago Pendiente</p>
        <p className='booking__info__p'><strong>Precio por noche:</strong> ${bookHotel.price}</p>
        <p className='booking__info__p'><strong>Cantidad de Noches:</strong> {hotel.nights}</p>
        <div className='booking__info__btns'>
          <button className='booking__info__btns__red' onClick={e => handlePay(e)}>Pagar ahora</button>
          <button className='booking__info__btns__white' onClick={e => handleClick(e)}> Pagar más tarde </button>
        </div>
      </div>
    </div>
  )
}

export default Book
