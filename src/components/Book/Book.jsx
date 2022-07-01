import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectReservation } from '../../redux/slices/reservationSlice'
import './book.scss'
import { useNavigate } from 'react-router'
import { getBookings, postBooking } from '../../redux/slices/book.Slice'

function Book ({ setRes, res, bookHotel }) {
  const reservation = useSelector(selectReservation)
  const userJSON = JSON.parse(window.localStorage.getItem('user'))
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const checkInDate = dateBack(reservation.checkIn)
  const checkOutDate = dateBack(reservation.checkOut)
  const userId = Number(userJSON.id)
  const hotelId = Number(bookHotel.id)
  const [book, setBook] = useState({
    checkIn: checkInDate,
    checkOut: checkOutDate,
    UserId: userId,
    HotelId: hotelId
  })

  // const checkInDate = `${reservation.checkIn.getDate()}-${reservation.checkIn.getMonth()}-${reservation.checkIn.getFullYear()}`
  // const checkOutDate = `${reservation.checkOut.getDate()}-${reservation.checkOut.getMonth()}-${reservation.checkOut.getFullYear()}`

  const [pay, setPay] = useState(false)
  const [linkMP, setLinkMP] = useState('')

  // useEffect(() => {
  //   dispatch(getBookings())
  // }, [])

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

  function handleConfirm (e) {
    e.preventDefault()
    dispatch(postBooking(book)).then(r => {
      setLinkMP(r.payload.data.initPointMP)
    })
    setPay(true)
  }

  function handlePay (e) {
    e.preventDefault()
    window.open(linkMP, '_self')
  }
  return (
    <div className='booking'>
      <div className='booking__image'>
        <img src={bookHotel.mainImage} />
      </div>
      <div className='booking__info'>
        <h2 className='booking__info__title'><strong>Resumen Pre-Reserva</strong></h2>
        <h3 className='booking__info__hotel'><strong>Hospedaje: {reservation.name}</strong></h3>
        <p className='booking__info__p'><strong>Ciudad:</strong> {reservation.cityName}</p>
        <p className='booking__info__p'><strong>Check-In:</strong> {reservation.checkIn.toDateString()}</p>
        <p className='booking__info__p'><strong>Check-Out:</strong> {reservation.checkOut.toDateString()}</p>
        <p className='booking__info__p'><strong>Cantidad de Noches:</strong> {reservation.totalNights}</p>
        <p className='booking__info__p'><strong>Precio por noche:</strong> USD {bookHotel.price},00</p>
        <p className='booking__info__p'><strong>Monto Total a Pagar:</strong> USD {reservation.totalNights * bookHotel.price},00</p>
        <p className='booking__info__p'><strong>Estado:</strong> Pago Pendiente</p>
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
