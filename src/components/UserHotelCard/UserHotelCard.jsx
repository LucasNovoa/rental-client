import './userhotelcard.scss'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Card ({ img, name, guests, stars }) {
  const filters = {}
  return (
    <div className='card'>
      <Link to={`/hotel/${name}`} state={filters} className='link'>
        <img src={img} alt='img' className='card__image' />
        <div className='card__content'>
          <h3 className='card__content__title'>{name}</h3>
          <div className='card__content__badges'>
            <div className='card__content__badges__stars'>{stars}<AiFillStar /> </div>
            <div className='card__content__badges__huesp'>{guests} Huespedes</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Card
