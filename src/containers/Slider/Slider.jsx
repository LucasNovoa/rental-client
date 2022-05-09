import React from 'react'
import Card from '../../components/Card/Card'
import './slider.scss'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { getHotelsError, getHotelsStatus } from '../../redux/slices/hotelSlice'
import Loader from '../../components/Loader/Loader'

function Slider ({ hotels }) {
  const status = useSelector(getHotelsStatus)
  const error = useSelector(getHotelsError)

  let content

  if (status === 'loading') {
    content = <Loader />
  } else if (status === 'succeeded') {
    content = hotels.slice(10, 20).map((h) => <Card img={h.mainImage} name={h.name} description={h.description} price={h.price} key={h.id} hosts={h.maxPax} stars={h.stars} />)
  } else if (status === 'failed') {
    content = <p>{error}</p>
  }

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
          <h2>Hoteles mejor puntuados</h2>
          <button className='slider__container__top__btn'>Ver todos</button>
        </div>
        <div className='slider__container__bottom'>
          <AiOutlineArrowLeft className='slider__container__bottom__btnl' onClick={slideLeft} />
          <div className='slider__container__bottom__cards' id='slider'>
            {content}
          </div>
          <AiOutlineArrowRight className='slider__container__bottom__btnr' onClick={slideRight} />
        </div>
      </div>
    </section>
  )
}

export default Slider
