import './userhostcard.scss'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Card ({ img, name, hosts, stars, banned }) {
  const filters = {}
  console.log({ img, name, hosts, stars, banned })
  return (
    <div className={banned === false ? 'cards' : 'banned'}>
      <Link to={`/hotel/${name}`} state={filters} className='link'>
        <img src={img} alt='img' className={banned === false ? 'cards__image' : 'banned__image'} />
        <div className={banned === false ? 'cards__content' : 'banned__content'}>
          <h3 className={banned === false ? 'cards__content__title' : 'banned__content__title'}>{name}</h3>
          <div className={banned === false ? 'cards__content__badges' : 'banned__content__badges'}>
            {banned === false &&
              <>
                <div className='cards__content__badges__stars'>{stars}<AiFillStar /> </div>
                <div className='cards__content__badges__huesp'>{hosts} Huespedes</div>
              </>}
            {banned === true &&
              <div>
                <div className='banned__content__badges__stars'>{stars}<AiFillStar /> </div>
                <div className='banned__content__badges__huesp'>{hosts} Huespedes</div>
                <div className='banned__content__badges__banned'><p> ∷ Pendiente Habilitación ∷ </p></div>
              </div>}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Card
