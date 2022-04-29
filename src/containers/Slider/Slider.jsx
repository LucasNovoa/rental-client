import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import axios from 'axios'
import './slider.scss'
import loader from '../../assets/loader.gif'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

function Slider () {
  const [hotels, setHotels] = useState([])

  const slideLeft = (e) => {
    const slid = document.getElementById('slider')
    slid.scrollLeft = slid.scrollLeft - 500
    console.log('click')
  }

  const slideRight = (e) => {
    const slid = document.getElementById('slider')
    slid.scrollLeft = slid.scrollLeft + 500
  }

  useEffect(() => {
    axios.get('https://polar-waters-05125.herokuapp.com/api/v1/hotels').then(r => {
      setHotels(r.data.slice(0, 10))
    })
  }, [])

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
            {hotels.map(h => {
              return <Card img={h.gallery[0].path} name={h.name} description={h.description} price={h.stars} key={h.name} />
            })}
          </div>
          <AiOutlineArrowRight className='slider__container__bottom__btnr' onClick={slideRight} />
        </div>
      </div>
    </section>
  )
}

export default Slider
