import '../UserBookingCard/userbookingcard.scss'
import React from 'react'
import { Link } from 'react-router-dom'

function Card ({ img, name, price, checkIn, checkOut, setBook, paid }) {
  const arrivePre = checkIn.substring(0, 10)
  const departPre = checkOut.substring(0, 10)

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

  return (
    <div className={paid === true ? 'bookingcard' : 'pending'}>
      <div onClick={e => setBook(e)} className='link'>
        <img src={img} alt='img' className='card__image' />
        <div className='card__content'>
          <h3 className='card__content__title'>{name}</h3>
          <div className='card__content__badges'>
            <ul className='card__content__badges__ul'>
              {paid === false
                ? <>
                  <li className='card__content__badges__huesp'><p>Pendiente de Pago</p></li>
                  <li><div className='card__content__badges__huesp'>Check-In: {arrive}</div></li>
                  <li><div className='card__content__badges__huesp'>Check-Out: {depart}</div></li>
                  </>
                : <>
                  <li className='card__content__badges__huesp'><p>Precio por noche: ${price}</p></li>
                  <li><div className='card__content__badges__huesp'>Check-In: {arrive}</div></li>
                  <li><div className='card__content__badges__huesp'>Check-Out: {depart}</div></li>
                  </>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
