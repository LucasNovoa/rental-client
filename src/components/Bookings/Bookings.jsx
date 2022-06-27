// import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import './bookings.scss'
// import { useNavigate } from 'react-router'

function Bookings ({ setBook, book, bookings, rev, setRev }) {
  // const navigateTo = useNavigate()
  const hotel = bookings.find(e => e.id === book)

  // const arrivePre = hotel.checkIn.substring(0, 10)
  // const departPre = hotel.checkOut.substring(0, 10)

  const arrive = dateFormat(hotel.checkIn)
  const depart = dateFormat(hotel.checkOut)

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
    window.open(`${hotel.initPointMP}`, '_self')
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
        <img className='bookingCard__image__img' src={hotel.mainImage} />
      </div>
      <div className='bookingCard__info'>
        <h1>{hotel.hotelName}</h1>
        <p>Check-In: {arrive}</p>
        <p>Check-Out: {depart}</p>
        <p>Cantidad de Noches: {hotel.nights}</p>
        <p>Precio por noche: USD {hotel.pricePerNight},00</p>
        <p>Precio Total: USD {hotel.pricePerNight * hotel.nights},00</p>
        <p>Método de pago: {hotel.payMethod}</p>
        <p>Estado: {hotel.paidOut === true ? 'Pago Completado' : 'Pago Pendiente'}</p>
        {hotel.paidOut === false && hotel.isCancelled === false && <button className='bookingCard__info__pay' onClick={e => handlePay(e)}>Pagar ahora</button>}
        {hotel.isCancelled === true && <p className='bookingCard__info__cancel'>RESERVA CANCELADA</p>}
        {hotel.paidOut === true && hotel.isCancelled === false && <button setRev={setRev} className='bookingCard__info__pay' onClick={e => handleReview(e)}>Deja tu reseña!</button>}
      </div>
    </div>
  )
}

export default Bookings
