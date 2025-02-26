import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useLocation } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Amenities from '../components/Amenities/Amenities'
import Resenas from '../components/Resenas/Resenas'
import datos from '../components/datos'
import HotelCard from '../components/HotelCard/HotelCard'
import Map from '../components/Map/Map'
import Reservation from '../components/Reservation/Reservation'
import Calendar from '../components/Calendar/Calendar'
import '../scss/Hotel.scss'
import Book from '../components/Book/Book'
import Loader from '../components/Loader/Loader'
import { useGetHotelsByNameQuery } from '../redux/services/hotelsServices'
import OwnerCard from '../components/OwnerCard/OwnerCard'
import Modal from 'react-modal'
import { updateReservation, selectReservation } from '../redux/slices/reservationSlice'
import { selectFilters } from '../redux/slices/filtersSlice'

const Hotel = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const filters = useSelector(selectFilters)
  const { name } = useParams()
  const [res, setRes] = useState({
    name,
    cityName: filters.city ?? '',
    checkIn: filters.checkIn ?? '',
    checkOut: filters.checkIn ?? '',
    guests: filters.guests ?? 1,
    open: false,
    nights: 1
  })

  const decodeName = decodeURI(name)

  const {
    data: hotel,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetHotelsByNameQuery(decodeName)

  const closeModal = () => {
    setRes({
      ...res,
      open: false
    })
  }

  let content

  if (isLoading) {
    content = <Loader />
  } else if (isSuccess) {
    const { ids, entities } = hotel

    dispatch(updateReservation({
      name: entities[ids].name,
      cityName: entities[ids].City.name
      // guests: entities[ids].guests
    }))

    content = (
      <div>
        <HotelCard hotel={entities[ids]} />
        <Reservation
          hotel={entities[ids]}
          setRes={setRes}
          res={res}
        />
        <div className='hotel__details'>
          <OwnerCard userId={entities[ids].UserId} />
          <>
            <Calendar filters={filters} />
            <Amenities hotels={entities[ids]} />
            <Map width='50vw' height={400} hotels={[entities[ids]]} zoom='15' />
            <Resenas data={datos} />
          </>
          <Modal
            isOpen={res.open}
            onRequestClose={closeModal}
            ariaHideApp={false}
            className='hotel__modal'
            overlayClassName='hotel__overlay'
          >
            <Book setRes={setRes} res={res} bookHotel={entities[ids]} />
          </Modal>
        </div>
      </div>
    )
  } else if (isError) {
    content = <p>{error}</p>
  }

  return (
    <div className='hotel'>
      <Header />
      {content}
      <Footer />
    </div>
  )
}

export default Hotel
