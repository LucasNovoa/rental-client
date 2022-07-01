import './userbookingcard.scss'
import React from 'react'
import { selectAllHotels } from '../../redux/services/hotelsServices'
import { useSelector } from 'react-redux'

function Card ({ img, name, price, checkIn, checkOut, setBook, paid, id, book, canceled, cityName }) {
  const hotel = useSelector(selectAllHotels).filter(h => h.name === name)

  const arrive = dateFormat(checkIn)
  const depart = dateFormat(checkOut)

  if (arrive.includes('-')) { arrive.replace('-', '/') }
  if (depart.includes('-')) { depart.replace('-', '/') }

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

  function handleClick () {
    setBook(id)
  }

  return (

    <div className={paid === true && canceled === false ? 'bookingcard' : 'pending'}>
      <div onClick={handleClick} id={id} className='link'>
        <img src={img} alt='img' id={id} className={paid === true && canceled === false ? 'bookingcard__image' : 'pending__image'} />
        <div className='bookingcard__content'>
          <span className='bookingcard__content__res'>▸ Código de Reserva 00{id} ◂</span>
          <p className='bookingcard__content__title'>{name}</p>
          <span className='bookingcard__content__place'>{hotel[0].City.name}, {hotel[0].Country.name}</span>
          <div className='bookingcard__content__check'>Check-In: {arrive}</div>
          <div className='bookingcard__content__check'>Check-Out: {depart}</div>
          <span className='bookingcard__content__go'>☰ ver detalle</span>
          <div className='bookingcard__content__badges'>
            {/* {paid === true && canceled === false &&
              <>
                <p className='bookingcard__content__badges__book'>Precio por noche: ${price}</p>
              </>} */}
            {paid === false && canceled === false &&
              <>
                <p className='pending__content__badges__book'>PAGAR</p>
              </>}
            {canceled === true && (paid === true || paid === false) &&
              <>
                <p className='pending__content__badges__book'>CANCELADA</p>
              </>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
