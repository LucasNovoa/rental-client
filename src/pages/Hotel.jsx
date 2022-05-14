<<<<<<< HEAD
import React from 'react'
=======
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
>>>>>>> 91cc200bfe522f2108704f985b620e6d318feb59
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Amenities from '../components/Amenities/Amenities'
import HotelCard from '../components/HotelCard/HotelCard'
<<<<<<< HEAD
import { useGetHotelsByNameQuery } from '../redux/services/hotelsServices'
import Loader from '../components/Loader/Loader'
=======
import { selectHotelByName } from '../redux/slices/hotelSlice'
import Map from '../components/Map/Map'
import Reservation from '../components/Reservation/Reservation'
import Calendar from '../components/Calendar/Calendar'
import '../scss/Hotel.scss'
import Book from '../components/Book/Book'
>>>>>>> 91cc200bfe522f2108704f985b620e6d318feb59

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
<<<<<<< HEAD

  const {
    data: hotel,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetHotelsByNameQuery(name)

  let content

  if (isLoading) {
    content = <Loader />
  } else if (isSuccess) {
    const { ids, entities } = hotel
    content = <HotelCard hotel={entities[ids]} />
  } else if (isError) {
    content = <p>{error}</p>
  }

=======
  const hotel = useSelector((state) => selectHotelByName(state, name))
<<<<<<< HEAD
  // console.log(hotel)
>>>>>>> e2dd7724acc9ddbd46b8697452eba42bdf24c38e
  return (
    <div className='hotel'>
      <Header />
      {content}
      <Amenities />
=======
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
>>>>>>> 91cc200bfe522f2108704f985b620e6d318feb59
      <Footer />
    </div>
  )
}

export default Hotel
