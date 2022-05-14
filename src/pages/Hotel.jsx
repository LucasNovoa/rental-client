import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Amenities from '../components/Amenities/Amenities'
import HotelCard from '../components/HotelCard/HotelCard'
import { useGetHotelsByNameQuery } from '../redux/services/hotelsServices'
import Loader from '../components/Loader/Loader'

const Hotel = () => {
  const { name } = useParams()

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

  return (
    <div className='hotel'>
      <Header />
      {content}
      <Amenities />
      <Footer />
    </div>
  )
}

export default Hotel
