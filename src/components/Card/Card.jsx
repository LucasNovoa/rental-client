import './card.scss'
import React from 'react'
import { useSelector } from 'react-redux'
import { AiFillStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { selectReservation } from '../../redux/slices/reservationSlice'
import { selectAllHotels } from '../../redux/services/hotelsServices'

function Card ({ img, name, description, price, hosts, stars, filters = {} }) {
  const encodeName = encodeURI(name)
  const reservation = useSelector(selectReservation)
  const hotel = useSelector(selectAllHotels).filter((h) => h.name === name)
  // console.log('soy filters ======', name, hosts, filters, 'hotel:', hotel[0])
  return (
    <div className='card'>
      <Link to={`/hotel/${encodeName}`} state={reservation} className='link'>
        <img src={img} alt='img' className='card__image' />
        <div className='card__content'>
          <h3 className='card__content__title'>{name}</h3>
          <p className='card__content__place'>{hotel[0].City.name}, {hotel[0].Country.name}</p>
          <p className='card__content__description'>{description}</p>
          <div className='card__content__badges'>
            <div className='card__content__badges__stars'>{stars}<AiFillStar /> </div>
            <div className='card__content__badges__huesp'>{hosts} Huéspedes</div>
          </div>
          <div className='card__content__divider' />
          <div className='card__content__info'>
            <div className='card__content__info__price'><strong>USD {price} </strong> / noche</div>
            <div>
              <br />
              <button className='card__content__info__btn'>Más información</button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Card
