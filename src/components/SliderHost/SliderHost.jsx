import React from 'react'
import UserHotelCard from '../../components/UserHotelCard/UserHotelCard'
import './sliderhost.scss'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

function SliderHost ({ hotels }) {
  const slideLeft = (e) => {
    const slid = document.getElementById('slider')
    slid.scrollLeft -= 1080
  }

  const slideRight = (e) => {
    const slid = document.getElementById('slider')
    slid.scrollLeft += 1080
  }

  return (
    <section className='sliderHost'>
      <div className='sliderHost__container'>
        <div className='sliderHost__container__top'>
          <h2>Tus Alojamientos: </h2>
        </div>
        <div className='sliderHost__container__bottom'>
          <AiOutlineArrowLeft className='sliderHost__container__bottom__btnl' onClick={slideLeft} />
          <div className='sliderHost__container__bottom__cards' id='slider'>
            {hotels.filter(e => e.isDeleted === false).map((h) => <UserHotelCard img={h.mainImage} name={h.name} description={h.description} key={h.id} hosts={h.guests} stars={h.stars} banned={h.isBanned} />)}
          </div>
          <AiOutlineArrowRight className='sliderHost__container__bottom__btnr' onClick={slideRight} />
        </div>
      </div>
    </section>
  )
}

export default SliderHost
