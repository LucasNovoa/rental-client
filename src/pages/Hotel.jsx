import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Amenities from '../components/Amenities/Amenities'
import HotelCard from '../components/HotelCard/HotelCard'
import { selectHotelByName } from '../redux/slices/hotelSlice'
import Map from '../components/Map/Map'

const Hotel = () => {
  const { name } = useParams()
  const hotel = useSelector((state) => selectHotelByName(state, name))
  // console.log(hotel)
  return (
    <div className='hotel'>
      <Header />
      <HotelCard hotel={hotel} />
      <Map width='80vw' height={400} hotels={[hotel]} />
      <Amenities />
      <Footer />
    </div>
  )
}

export default Hotel
