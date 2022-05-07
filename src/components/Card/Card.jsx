import './card.scss'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Card ({ img, name, description, price, hosts, stars }) {
  return (
    <div className='card'>
      <Link to={`/hotel/${name}`} className='link'>
        <img src={img} alt='img' className='card__image' />
        <div className='card__content'>
          <h3 className='card__content__title'>{name}</h3>
          <p className='card__content__description'>{description}</p>
          <div className='card__content__badges'>
            <div className='card__content__badges__stars'>{stars}<AiFillStar /> </div>
            <div className='card__content__badges__huesp'>{hosts} Huespedes</div>
          </div>
          <div className='card__content__divider' />
          <div className='card__content__info'>
            <div className='card__content__info__price'><strong>${price} </strong> / noche</div>
            <button className='card__content__info__btn'>Reservar</button>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Card
