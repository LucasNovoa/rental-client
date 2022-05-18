import './profiledetail.scss'
import SliderHost from '../SliderHost/SliderHost'
/* import { selectAllHotels, getHotels, getHotelsStatus } from '../../redux/slices/hotelSlice'
 */import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../Loader/Loader'
import SliderBooking from '../SliderBooking/SliderBooking'
import Bookings from '../Bookings/Bookings'
import { selectAllHotels, useGetHotelsQuery } from '../../redux/services/hotelsServices'
import Reviews from '../Review/Reviews.jsx'

const ProfileDetail = ({ user, post, setPost }) => {
  const dispatch = useDispatch()
  const hotels = useSelector(selectAllHotels)
  const hostHotels = user?.Hotels
  const bookings = user?.Bookings
  const [book, setBook] = useState(0)
  const [rev, setRev] = useState(0)

  const {
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetHotelsQuery()

  let content

  if (isLoading) {
    content = <Loader />
  } else if (isSuccess) {
    content = console.log('Alojamientos cargados con éxito')
  } else if (isError) {
    content = <p>{error}</p>
  }

  function handleCreate (e) {
    e.preventDefault()
    setPost(!post)
  }

  return (
    <div className='profiledetail'>
      {!user?.organization &&
        <h1 className='profiledetail__title'>¡Hola {user?.firstName} {user?.lastName}!</h1>}
      {user?.organization &&
        <h1 className='profiledetail__title'>¡Hola {user?.organization}!</h1>}
      {user?.role === 'owner' ? <h3>Propietario</h3> : <h3>Huésped</h3>}
      {post === false &&
        <button className='profiledetail__post' onClick={e => handleCreate(e)}>Publica tu alojamiento!</button>}
      <div className='profiledetail__divider' />
      {content}
      {hostHotels?.length > 0
        ? <div>
          <SliderHost className='profiledetail__slider' hotels={hostHotels} />
          <div className='profiledetail__divider' />
          </div>
        : <h1>No tienes alojamientos en alquiler</h1>}
      <div className='profiledetail__divider' />

      {bookings?.length > 0
        ? <div>
          {book !== 0 && rev === 0 && <Bookings setBook={setBook} book={book} bookings={bookings} user={user} rev={rev} setRev={setRev} />}
          {book === 0 && rev === 0 && <SliderBooking hotels={hotels} user={user} bookings={bookings} setBook={setBook} book={book} />}
          {rev !== 0 && <Reviews setRev={setRev} book={book} user={user} setBook={setBook} />}
        </div>
        : <h1>No tienes Reservas</h1>}
      <div className='profiledetail__divider' />

    </div>
  )
}

export default ProfileDetail
