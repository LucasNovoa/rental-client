import React from 'react'
import UserBookingCard from '../../components/UserBookingCard/UserBookingCard'
import './sliderbooking.scss'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

function SliderHost ({ bookings, book, setBook }) {
  const slideLeft = (e) => {
    const slid = document.getElementById('sliderBooking')
    slid.scrollLeft -= 1080
  }

  const slideRight = (e) => {
    const slid = document.getElementById('sliderBooking')
    slid.scrollLeft += 1080
  }

  return (
    <section className='sliderBooking'>
      <div className='sliderBooking__container'>
        <div className='sliderBooking__container__top'>
          <h2>Tus Reservas: </h2>
        </div>
        <div className='sliderBooking__container__bottom'>
          <AiOutlineArrowLeft className='sliderBooking__container__bottom__btnl' onClick={slideLeft} />
          <div className='sliderBooking__container__bottom__cards' id='sliderBooking'>
            {bookings.map((h) => <UserBookingCard canceled={h.isCancelled} book={book} setBook={setBook} img={h.mainImage} name={h.hotelName} price={h.pricePerNight} id={h.id} key={h.id} hosts={h.maxPax} stars={h.stars} checkIn={h.checkIn} checkOut={h.checkOut} paid={h.paidOut} />)}
          </div>
          <AiOutlineArrowRight className='sliderBooking__container__bottom__btnr' onClick={slideRight} />
        </div>
      </div>
    </section>
  )
}

export default SliderHost
