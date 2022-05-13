import React from 'react'
import UserHotelCard from '../../components/UserHotelCard/UserHotelCard'
import './sliderhost.scss'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

function SliderHost ({ hotels }) {
  const slideLeft = (e) => {
    const slid = document.getElementById('slider')
    slid.scrollLeft -= 500
  }

  const slideRight = (e) => {
    const slid = document.getElementById('slider')
    slid.scrollLeft += 500
  }

  return (
    <section className='slider'>
      <div className='slider__container'>
        <div className='slider__container__top'>
          <h2>Tus Alojamientos: </h2>
        </div>
        <div className='slider__container__bottom'>
          <AiOutlineArrowLeft className='slider__container__bottom__btnl' onClick={slideLeft} />
          <div className='slider__container__bottom__cards' id='slider'>
            {hotels.map((h) => <UserHotelCard img={h.mainImage} name={h.name} description={h.description} key={h.id} hosts={h.maxPax} stars={h.stars} />)}
          </div>
          <AiOutlineArrowRight className='slider__container__bottom__btnr' onClick={slideRight} />
        </div>
      </div>
    </section>
  )
}

export default SliderHost
