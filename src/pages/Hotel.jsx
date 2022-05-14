import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Amenities from '../components/Amenities/Amenities'
import HotelCard from '../components/HotelCard/HotelCard'
import { selectHotelByName } from '../redux/slices/hotelSlice'
import Map from '../components/Map/Map'
import Reservation from '../components/Reservation/Reservation'
import Calendar from '../components/Calendar/Calendar'
import '../scss/Hotel.scss'
import Book from '../components/Book/Book'

const Hotel = () => {
  const [res, setRes] = useState({
    name: '',
    cityName: '',
    checkIn: '',
    checkOut: '',
    guests: 0,
    open: false,
    nights: 1
  })
  const { name } = useParams()
  const hotel = useSelector((state) => selectHotelByName(state, name))
  return (
    <div className='hotel'>
      <Header />
      <HotelCard hotel={hotel} />
      <Reservation res={res} setRes={setRes} hotel={hotel} />
      <div className='hotel__details'>
        {!res.open &&
          <>
            <Calendar />
            <Amenities />
            <Map width='50vw' height={400} hotels={[hotel]} />
          </>}
        {res.open &&
          <Book setRes={setRes} res={res} bookHotel={hotel} />}
      </div>
      <Footer />
    </div>
  )
}

export default Hotel
