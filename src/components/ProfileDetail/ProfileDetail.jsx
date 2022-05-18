import './profiledetail.scss'
import SliderHost from '../SliderHost/SliderHost'
/* import { selectAllHotels, getHotels, getHotelsStatus } from '../../redux/slices/hotelSlice'
 */import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../Loader/Loader'
import SliderBooking from '../SliderBooking/SliderBooking'
import Bookings from '../Bookings/Bookings'
import { selectAllHotels, useGetHotelsQuery } from '../../redux/services/hotelsServices'

const ProfileDetail = ({ user, post, setPost }) => {
  const dispatch = useDispatch()
  const hotels = useSelector(selectAllHotels)
  const hostHotels = user?.Hotels
  const bookings = user?.Bookings
  const [book, setBook] = useState(0)

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
    content = <h1>Hola</h1>
  } else if (isError) {
    content = <p>{error}</p>
  }

  /* useEffect(() => {
    if (hotelIdStatus === 'idle') {
      dispatch(getHotels())
    }
  }, [])
 */
  function handleCreate (e) {
    e.preventDefault()
    setPost(!post)
  }

  return (
    <div className='profiledetail'>
      {!user.organization &&
        <h2 className='profiledetail__title'>¡Hola {user.firstName} {user.lastName}!</h2>}
      {user.organization &&
        <h2 className='profiledetail__title'>¡Hola {user.organization}!</h2>}
      <p className='profiledetail__date'> Se registró en {user.createdAt.split('-')[0]}</p>
      {user.role === 'owner' ? <h3>Propietario</h3> : <h3>Huésped</h3>}
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
      {user?.Bookings?.length > 0 &&
        <div>
          {book !== 0 && <Bookings setBook={setBook} book={book} bookings={bookings} user={user} />}
          {book === 0 && <SliderBooking hotels={hotels} user={user} bookings={bookings} setBook={setBook} book={book} />}

        </div>}
    </div>
  )
}

export default ProfileDetail
