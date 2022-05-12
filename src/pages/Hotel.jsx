import React from 'react'
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

const Hotel = () => {
  const { name } = useParams()
  const hotel = useSelector((state) => selectHotelByName(state, name))
  console.log(hotel)
  return (
    <div className='hotel'>
      <Header />
      <HotelCard hotel={hotel} />
      <Reservation />
      <div className='hotel__details'>
        <Calendar />
        <Amenities />
        <Map width='50vw' height={400} hotels={[hotel]} />
      </div>
      <Footer />
    </div>
  )
}

export default Hotel
