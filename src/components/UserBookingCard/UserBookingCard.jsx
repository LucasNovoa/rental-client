import './userbookingcard.scss'
import React, { useState } from 'react'

function Card ({ img, name, price, checkIn, checkOut, setBook, paid, id, book, canceled }) {
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

    <div className={paid === true ? 'bookingcard' : 'pending'}>
      <div onClick={handleClick} id={id} className='link'>
        <img src={img} alt='img' id={id} className='card__image' />
        <div className='bookingcard__content'>
          <h2 className='bookingcard__content__title'>{name}</h2>
          <div className='bookingcard__content__badges'>
            <ul className='bookingcard__content__badges__ul'>
              {paid === false && canceled === false &&
                <>
                  <li className='pending__content__badges__ul__book'><p>Pendiente de Pago</p></li>
                  <li><div className='pending__content__badges__ul__book'>Check-In: {arrive}</div></li>
                  <li><div className='pending__content__badges__ul__book'>Check-Out: {depart}</div></li>
                </>}
              {paid === true &&
                <>
                  <li className='bookingcard__content__badges__ul__book'><p>Precio por noche: ${price}</p></li>
                  <li><div className='bookingcard__content__badges__ul__book'>Check-In: {arrive}</div></li>
                  <li><div className='bookingcard__content__badges__ul__book'>Check-Out: {depart}</div></li>
                </>}
              {canceled === true &&
                <>
                  <li className='bookingcard__content__badges__book'><p>CANCELADO</p></li>
                  <li><div className='bookingcard__content__badges__ul__book'>Check-In: {arrive}</div></li>
                  <li><div className='bookingcard__content__badges__ul__book'>Check-Out: {depart}</div></li>
                </>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
