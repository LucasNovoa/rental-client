import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectReservation } from '../../redux/slices/reservationSlice'
import './book.scss'
import axios from 'axios'

function Book ({ setRes, res, bookHotel }) {
  const reservation = useSelector(selectReservation)
  const userJSON = JSON.parse(window.localStorage.getItem('user'))

  const checkInDate = `${reservation.checkIn.getDate()}-${reservation.checkIn.getMonth()}-${reservation.checkIn.getFullYear()}`
  const checkOutDate = `${reservation.checkOut.getDate()}-${reservation.checkOut.getMonth()}-${reservation.checkOut.getFullYear()}`

  const [pay, setPay] = useState(false)

  function handleClick (e) {
    e.preventDefault()
    setRes({
      ...res,
      open: false
    })
  }

  const userId = Number(userJSON.id)
  const hotelId = Number(bookHotel.id)

  function handleConfirm (e) {
    e.preventDefault()
    axios.post('https://rental-app-server.herokuapp.com/api/v1/bookings', {
      checkIn: checkInDate,
      checkOut: checkOutDate,
      UserId: 1,
      HotelId: 2
    })
    setPay(true)
    // aca iría el post del booking
  }

  function handlePay (e) {
    e.preventDefault()
    // window.open(`${hotel.initPointMP}`)
    // aca habría que llamar al último elemento de Bookings del usuario, la propiedad initPointMP
    // user.Bookings[user.Bookings.length - 1].initPointMP
  }
  return (
    <div className='booking'>
      <div className='booking__image'>
        <img src={bookHotel.mainImage} />
      </div>
      <div className='booking__info'>
        <h2 className='booking__info__title'><strong>Resumen pre-reserva</strong></h2>
        <h3 className='booking__info__hotel'><strong>{reservation.name}</strong></h3>
        <p className='booking__info__p'><strong>Check-In:</strong> {reservation.checkIn.toDateString()}</p>
        <p className='booking__info__p'><strong>Check-Out:</strong> {reservation.checkOut.toDateString()}</p>
        <p className='booking__info__p'><strong>Ciudad:</strong> {reservation.cityName}</p>
        <p className='booking__info__p'><strong>Estado:</strong> Pago Pendiente</p>
        <p className='booking__info__p'><strong>Precio por noche:</strong> ${bookHotel.price}</p>
        <p className='booking__info__p'><strong>Cantidad de Noches:</strong> {reservation.totalNights}</p>
        <div className='booking__info__btns'>
          {!pay &&
            <>
              <button className='booking__info__btns__red' onClick={e => handleClick(e)}>Cancelar</button>
              <button className='booking__info__btns__red' onClick={e => handleConfirm(e)}>Confirmar</button>
            </>}
          {pay &&
            <>
              <button className='booking__info__btns__red' onClick={e => handlePay(e)}> Pagar ahora </button>
              <button className='booking__info__btns__red' onClick={e => handleClick(e)}> Pagar más tarde </button>
            </>}

        </div>
      </div>
    </div>
  )
}

export default Book
