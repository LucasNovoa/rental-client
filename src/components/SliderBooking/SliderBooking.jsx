import React from 'react'
import UserBookingCard from '../../components/UserBookingCard/UserBookingCard'
import './sliderbooking.scss'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

function SliderHost ({ bookings, book, setBook }) {
  const slideLeft = (e) => {
    const slid = document.getElementById('sliderBooking')
    slid.scrollLeft -= 500
  }

  const slideRight = (e) => {
    const slid = document.getElementById('sliderBooking')
    slid.scrollLeft += 500
  }

  return (
    <section className='slider'>
      <div className='slider__container'>
        <div className='slider__container__top'>
          <h2>Tus Reservas: </h2>
        </div>
        <div className='slider__container__bottom'>
          <AiOutlineArrowLeft className='slider__container__bottom__btnl' onClick={slideLeft} />
          <div className='slider__container__bottom__cards' id='sliderBooking'>
            {bookings.map((h) => <UserBookingCard book={book} setBook={setBook} img={h.mainImage} name={h.hotelName} price={h.pricePerNight} id={h.id} key={h.id} hosts={h.maxPax} stars={h.stars} checkIn={h.checkIn} checkOut={h.checkOut} paid={h.paidOut} />)}
          </div>
          <AiOutlineArrowRight className='slider__container__bottom__btnr' onClick={slideRight} />
        </div>
      </div>
    </section>
  )
}

export default SliderHost
