import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectReservation } from '../../redux/slices/reservationSlice'
import './book.scss'
import axios from 'axios'
import { useNavigate } from 'react-router'

function Book ({ setRes, res, bookHotel }) {
  const reservation = useSelector(selectReservation)
  const userJSON = JSON.parse(window.localStorage.getItem('user'))
  const navigate = useNavigate()

  // const checkInDate = `${reservation.checkIn.getDate()}-${reservation.checkIn.getMonth()}-${reservation.checkIn.getFullYear()}`
  // const checkOutDate = `${reservation.checkOut.getDate()}-${reservation.checkOut.getMonth()}-${reservation.checkOut.getFullYear()}`
  const checkInDate = dateBack(reservation.checkIn)
  const checkOutDate = dateBack(reservation.checkOut)

  const [pay, setPay] = useState(false)
  const [linkMP, setLinkMP] = useState('')

  function handleCancel (e) {
    e.preventDefault()
    setRes({
      ...res,
      open: false
    })
  }

  function handlePayLater (e) {
    e.preventDefault()
    setRes({
      ...res,
      open: false
    })
    navigate('/profile')
  }

  const userId = Number(userJSON.id)
  const hotelId = Number(bookHotel.id)

  function handleConfirm (e) {
    e.preventDefault()
    axios.post('https://rental-x-server.herokuapp.com/api/v1/bookings', {
      checkIn: checkInDate,
      checkOut: checkOutDate,
      UserId: userId,
      HotelId: hotelId
    }).then(r => setLinkMP(r.data.initPointMP))
    setPay(true)
  }

  console.log('userJSOON: ', hotelId)

  function handlePay (e) {
    e.preventDefault()
    window.open(linkMP)
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
              <button className='booking__info__btns__red' onClick={e => handleCancel(e)}>Cancelar</button>
              <button className='booking__info__btns__red' onClick={e => handleConfirm(e)}>Confirmar</button>
            </>}
          {pay &&
            <>
              <button className='booking__info__btns__red' onClick={e => handlePay(e)}> Pagar ahora </button>
              <button className='booking__info__btns__red' onClick={e => handlePayLater(e)}> Pagar más tarde </button>
            </>}

        </div>
      </div>
    </div>
  )
}

export default Book

function dateBack (date) {
  const yyyy = date.getFullYear()
  let mm = date.getMonth() + 1 // Months start at 0!
  let dd = date.getDate()

  if (dd < 10) dd = `0${dd}`
  if (mm < 10) mm = `0${mm}`

  return `${dd}/${mm}/${yyyy}`
}
