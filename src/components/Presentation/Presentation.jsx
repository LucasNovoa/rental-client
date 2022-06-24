import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './presentation.scss'
import { updateFilters } from '../../redux/slices/filtersSlice'
import { selectReservation, updateReservation } from '../../redux/slices/reservationSlice'

function Presentation () {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const reservation = useSelector(selectReservation)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(updateFilters({
      city: '',
      otherFilters: {
        guests: 1
      }
    }))
    dispatch(updateReservation({
      ...reservation,
      name: '',
      cityName: '',
      guests: 1,
      open: false,
      nights: 1
    }))
    navigate('/hotels', { replace: true })
  }

  return (
    <section className='presentation'>
      <div className='presentation__data'>
        <h1 className='presentation__data__title'>Encuentra tu alojamiento ideal</h1>
        <p className='presentation__data__description'>Te conectamos con miles de personas alrededor del mundo para que lo consigas!</p>
        <div className='presentation__data__buttonRow'>
          {/* <Link to='/hotels'> */}
          <button className='presentation__data__buttonRow__red' onClick={handleClick}>Explorar Alojamientos</button>
          {/* </Link> */}
          <Link to='/about'>
            <button className='presentation__data__buttonRow__white'>Sobre nosotros</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Presentation
