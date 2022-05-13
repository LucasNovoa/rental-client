// import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import './bookings.scss'
import { useNavigate } from 'react-router'

function Bookings ({ setBook, book, bookings }) {
  const hotel = bookings.find(e => e.id === book)
  const navigateTo = useNavigate()

  const arrivePre = hotel.checkIn.substring(0, 10)
  const departPre = hotel.checkOut.substring(0, 10)

  const arrive = dateFormat(arrivePre)
  const depart = dateFormat(departPre)

  function dateFormat (date) {
    const arr = date.toLocaleString('es-AR').split(' ')[0].split('-')
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

    return arr[2] + ' ' + month + ' ' + arr[0]
  }

  function handleClick (e) {
    e.preventDefault()
    setBook(0)
  }

  function handlePay (e) {
    e.preventDefault()
    // navigateTo(hotel.)
  }

  return (
    <div className='booking'>
      <button onClick={e => handleClick(e)}> X </button>
      <div className='booking__image'>
        <img src={hotel.mainImage} />
      </div>
      <div className='booking__info'>
        <h1>Hotel: {hotel.hotelName}</h1>
        <p>Check-In: {arrive}</p>
        <p>Check-Out: {depart}</p>
        <p>Precio por noche: ${hotel.pricePerNight}</p>
        <p>Estado: {hotel.paidOut === true ? 'Pago Completado' : 'Pago Pendiente'}</p>
        {hotel.paidOut === false && <button onClick={e => handlePay(e)}>Pagar ahora</button>}
        <p>Método de pago: {hotel.payMethod}</p>
        <p>Cantidad de Noches: {hotel.nights}</p>
      </div>
    </div>
  )
}

export default Bookings
