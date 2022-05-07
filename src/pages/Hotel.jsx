import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import HotelCard from '../components/HotelCard/HotelCard'
import { selectHotelByName } from '../redux/slices/hotelSlice'

const Hotel = () => {
  const { name } = useParams()
  const hotel = useSelector((state) => selectHotelByName(state, name))

  return (
    <div className='hotel'>
      <Header />
      <HotelCard hotel={hotel} />
      <Footer />
    </div>
  )
}

export default Hotel
