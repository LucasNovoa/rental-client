import './card.scss'
import React from 'react'

function Card ({ img, name, description, price }) {
  return (
    <div className='card'>
      <img src={img} alt='img' className='card__image' />
      <div className='card__content'>
        <h3 className='card__content__title'>{name}</h3>
        <p className='card__content__description'>{description}</p>
        <div className='card__content__badges'>
          <div className='card__content__badges__dorm'>Dormitorios</div>
          <div className='card__content__badges__huesp'>Huespedes</div>
        </div>
        <div className='card__content__divider' />
        <div className='card__content__info'>
          <div className='card__content__info__price'><strong>${price} </strong> / noche</div>
          <button className='card__content__info__btn'>Reservar</button>
        </div>
      </div>
    </div>
  )
}

export default Card
