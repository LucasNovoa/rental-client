import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import './Reservation.scss'
import { useNavigate } from 'react-router'
import { selectAllCities } from '../../redux/services/hotelsServices'
import swal from 'sweetalert'

const Reservation = ({ res, setRes, hotel, filters }) => {
  const navigateTo = useNavigate()
  const cities = useSelector(selectAllCities)
  const userJSON = JSON.parse(window.localStorage.getItem('user'))

  const [results, setResults] = useState(false)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(startDate)
  const [renderCalendar, setRenderCalendar] = useState(false)
  const [renderAmount, setRenderAmount] = useState(false)
  const [amount, setAmount] = useState(filters.guests ?? 1)

  const [place, setPlace] = useState(filters.cityName ?? '')
  const [start, setStart] = useState(dateFormat(filters.checkIn ?? ''))
  const [end, setEnd] = useState(dateFormat(filters.checkOut ?? ''))
  const [guests, setGuests] = useState(filters.guests ? `${filters.guests} huéspedes` : 'Cuántos?')

  useEffect(() => {
    setStart(filters.checkIn ? dateFormat(filters.checkIn) : 'Desde...')
    setEnd(filters.checkOut ? dateFormat(filters.checkOut) : 'Hasta...')
  }, [filters])

  const cityId = cities.find(e => e.name === place) && cities.find(e => e.name === place).id

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection'
  }

  const totalNights = end.split(' ')[0] - start.split(' ')[0]

  const handleCalendarRender = () => {
    setRenderAmount(false)
    setResults(false)
    setRenderCalendar(!renderCalendar)
  }

  const handleAmountRender = () => {
    setRenderCalendar(false)
    setResults(false)
    setRenderAmount(!renderAmount)
  }

  const handleAmount = (e) => {
    if (e.target.name === '-') {
      if (amount === 1) return
      if (amount > 1) setAmount(amount - 1)
      setGuests(amount - 1 + ' huéspedes')
    } else {
      setAmount(amount + 1)
      setGuests(amount + 1 + ' huéspedes')
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (!userJSON) {
      swal({
        title: 'Error',
        text: 'Para reservar debe estar logeado',
        icon: 'error',
        button: 'Ok!'
      })
      navigateTo('/login')
    } else {
      setRes({
        name: hotel.name,
        cityName: hotel.City.name,
        checkIn: start,
        checkOut: end,
        guests,
        open: true,
        nights: totalNights
      })
    }
  }

  return (
    <div className='reservationContainer'>
      <div className='reservation'>
        <div>
          <button className='reservation__check' onClick={handleCalendarRender}>
            <h5 className='reservation__check__title'>Check-in</h5>
            <h5 className='reservation__check__value'>{start}</h5>
          </button>
        </div>
        <button className='reservation__check' onClick={handleCalendarRender}>
          <h5 className='reservation__check__title'>Check-out</h5>
          <h5 className='reservation__check__value'>{end}</h5>
        </button>
        <div>
          <button className='reservation__amount' onClick={handleAmountRender}>
            <h5 className='reservation__amount__title'>Huéspedes</h5>
            <h5 className='reservation__amount__value'>{guests}</h5>
          </button>
          {renderAmount &&
            <div className='reservation__amount__display'>
              <h5 className='reservation__amount__display__title'>Huéspedes</h5>
              <div className='reservation__amount__display__counter'>
                <button name='-' onClick={handleAmount} className='reservation__amount__display__counter__btn'>-</button>
                <h5 className='reservation__amount__display__counter__number'>{amount}</h5>
                <button name='+' onClick={handleAmount} className='reservation__amount__display__counter__btn'>+</button>
              </div>
            </div>}
        </div>
        <button className='reservation__btn' onClick={handleSearch}>Reservar</button>
      </div>

    </div>
  )
}

export default Reservation

function dateFormat (date) {
  const arr = date.toLocaleString('es-AR').split(' ')[0].split('/')
  let month = ''

  switch (arr[1]) {
    case '1': month = 'Ene'; break
    case '2': month = 'Feb'; break
    case '3': month = 'Mar'; break
    case '4': month = 'Abr'; break
    case '5': month = 'May'; break
    case '6': month = 'Jun'; break
    case '7': month = 'Jul'; break
    case '8': month = 'Ago'; break
    case '9': month = 'Sep'; break
    case '10': month = 'Oct'; break
    case '11': month = 'Nov'; break
    case '12': month = 'Dic'; break
  }

  return arr[0] + ' ' + month + ' ' + arr[2]
}
