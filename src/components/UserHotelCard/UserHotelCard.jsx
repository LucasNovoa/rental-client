import './userhotelcard.scss'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Card ({ img, name, guests, stars, banned }) {
  const filters = {}
  return (
    <div className={banned === false ? 'card' : 'banned'}>
      <Link to={`/hotel/${name}`} state={filters} className='link'>
        <img src={img} alt='img' className='card__image' />
        <div className={banned === false ? 'card__content' : 'banned__content'}>
          <h3 className={banned === false ? 'card__content__title' : 'banned__content__title'}>{name}</h3>
          <div className={banned === false ? 'card__content__badges' : 'banned__content__badges'}>
            {banned === false &&
              <>
                <div className='card__content__badges__stars'>{stars}<AiFillStar /> </div>
                <div className='card__content__badges__huesp'>{guests} Huespedes</div>
              </>}
            {banned === true &&
              <div className='card__content__badges__huesp'><p> Hotel inhabilitado </p></div>}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Card
