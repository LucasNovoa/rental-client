import React from 'react'
import Card from '../../components/Card/Card'
import './slider.scss'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import Loader from '../../components/Loader/Loader'
import { useGetHotelsQuery, selectAllHotels } from '../../redux/services/hotelsServices'
import { Link } from 'react-router-dom'

function Slider () {
  const allHotels = useSelector(selectAllHotels)
  // const hotels = useSelector(selectAllHotels)
  const hotels = allHotels.filter(e => e.isBanned === false).filter(e => e.isDeleted === false)

  const {
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetHotelsQuery()

  let content

  if (isLoading) {
    content = <Loader />
  } else if (isSuccess) {
    content = hotels.filter(h => h.stars === 5).slice(0, 10).map((h) => <Card img={h.mainImage} name={h.name} description={h.description} price={h.price} key={h.id} hosts={h.guests} stars={h.stars} />)
  } else if (isError) {
    content = <p>{error}</p>
  }

  const slideLeft = (e) => {
    const slid = document.getElementById('slider')
    slid.scrollLeft -= 700
  }

  const slideRight = (e) => {
    const slid = document.getElementById('slider')
    slid.scrollLeft += 700
  }

  return (
    <section className='slider'>
      <div className='slider__container'>
        <div className='slider__container__top'>
          <h2>Hoteles mejor puntuados</h2>
          <Link to='/hotels' className='slider__container__top__btn'>Ver todos</Link>
        </div>
        <div className='slider__container__bottom'>
          <div className='bgfadel'>
            <AiOutlineArrowLeft className='slider__container__bottom__btnl' onClick={slideLeft} />
          </div>
          <div className='slider__container__bottom__cards' id='slider'>
            {content}
          </div>
          <div className='bgfader'>
            <AiOutlineArrowRight className='slider__container__bottom__btnr' onClick={slideRight} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Slider
