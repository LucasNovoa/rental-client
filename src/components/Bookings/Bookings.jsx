// import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import './bookings.scss'
// import { useNavigate } from 'react-router'

function Bookings ({ setBook, book, userBookings, rev, setRev }) {
  // const navigateTo = useNavigate()
  const booking = userBookings.find(e => e.id === book)

  // const arrivePre = booking.checkIn.substring(0, 10)
  // const departPre = booking.checkOut.substring(0, 10)
  const [day, month, year] = [booking.checkOut.slice(0, 2), booking.checkOut.slice(3, 5), booking.checkOut.slice(6, 10)]

  const arrive = dateFormat(booking.checkIn)
  const depart = dateFormat(booking.checkOut)

  function dateFormat (date) {
    const arr = date.toLocaleString('es-AR').split(' ')[0].split('/')
    let month = ''

    switch (arr[1]) {
      case '01': month = 'Ene'; break
      case '02': month = 'Feb'; break
      case '03': month = 'Mar'; break
      case '04': month = 'Abr'; break
      case '05': month = 'May'; break
      case '06': month = 'Jun'; break
      case '07': month = 'Jul'; break
      case '08': month = 'Ago'; break
      case '09': month = 'Sep'; break
      case '10': month = 'Oct'; break
      case '11': month = 'Nov'; break
      case '12': month = 'Dic'; break
    }

    return arr[0] + ' ' + month + ' ' + arr[2]
  }

  function handleClick (e) {
    e.preventDefault()
    setBook(0)
  }

  function handlePay (e) {
    e.preventDefault()
    window.open(`${booking.initPointMP}`, '_self')
  }

  function handleReview (e) {
    e.preventDefault()
    // setBook(0)
    setRev(1)
  }

  return (
    <div className='bookingCard'>
      <button className='bookingCard__close' onClick={e => handleClick(e)}> Cerrar </button>
      <div className='bookingCard__image'>
        <img className='bookingCard__image__img' src={booking.mainImage} />
      </div>
      <div className='bookingCard__info'>
        <h2>{booking.hotelName}</h2>
        <p>Check-In: {arrive}</p>
        <p>Check-Out: {depart}</p>
        <p>Cantidad de Noches: {booking.nights}</p>
        <p>Precio por noche: USD {booking.pricePerNight},00</p>
        <p>Precio Total: USD {booking.pricePerNight * booking.nights},00</p>
        <p>Método de pago: {booking.payMethod}</p>
        <p>Estado: {booking.paidOut === true ? 'Pago Completado' : 'Pago Pendiente'}</p>
        {booking.paidOut === false && booking.isCancelled === false && <button className='bookingCard__info__pay' onClick={e => handlePay(e)}>Pagar ahora</button>}
        {booking.isCancelled === true && <p className='bookingCard__info__cancel'>RESERVA CANCELADA</p>}
        {booking.paidOut === true && booking.isCancelled === false &&
          <button setRev={setRev} className='bookingCard__info__pay' onClick={e => handleReview(e)} disabled={new Date(`${month}/${day}/${year}`) > new Date()}>Deja tu reseña!</button>}
      </div>
    </div>
  )
}

export default Bookings
