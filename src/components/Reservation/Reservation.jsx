import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import './Reservation.scss'
import { filterHotels } from '../../redux/slices/hotelSlice'
import { selectAllCities } from '../../redux/slices/citySlice'
import { filter, selectAllFilters } from '../../redux/slices/filterSlice'
import { useNavigate } from 'react-router-dom'

const Reservation = () => {
  const cities = useSelector(selectAllCities)
  const filters = useSelector(selectAllFilters)

  // PROVISORIO ---->
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(filterHotels(place))
    dispatch(filter({
      cityId,
      cityName: place,
      checkIn: startDate.toLocaleDateString(),
      checkOut: endDate.toLocaleDateString(),
      guests: amount
    }))
    setRenderCalendar(false)
    setRenderAmount(false)
    navigate('/hotels/')
  }
  // -------------->

  const [results, setResults] = useState(false)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(startDate)
  const [renderCalendar, setRenderCalendar] = useState(false)
  const [renderAmount, setRenderAmount] = useState(false)
  const [amount, setAmount] = useState(filters.guests)

  const [place, setPlace] = useState(filters.cityName || '')
  const [start, setStart] = useState(dateFormat(filters.checkIn))
  const [end, setEnd] = useState(dateFormat(filters.checkOut))
  const [guests, setGuests] = useState(filters.guests ? `${filters.guests} huéspedes` : 'Cuántos?')

  useEffect(() => {
    setStart(dateFormat(filters.checkIn))
    setEnd(dateFormat(filters.checkOut))
  }, [filters])

  const cityId = cities.find(e => e.name === place) && cities.find(e => e.name === place).id

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection'
  }

  const handleChange = (e) => {
    setPlace(e.target.value)
    if (!e.target.value) {
      setResults(false)
    } else {
      const filter = cities?.filter(el => el.name.toLowerCase().includes(e.target.value.toLowerCase()))
      setResults(filter.splice(0, 5))
    }
  }

  const handlePlaceSelect = (e) => {
    setResults(false)
    setPlace(e.target.value)
  }

  const handleSelect = ranges => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
    setStart(dateFormat(ranges.selection.startDate))
    setEnd(dateFormat(ranges.selection.endDate))
  }

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

  const handleFocus = () => {
    setRenderCalendar(false)
    setRenderAmount(false)
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

  return (
    <div className='reservationContainer'>
      <div className='reservation'>
        <div>
          <button className='reservation__check' onClick={handleCalendarRender}>
            <h5 className='reservation__check__title'>Check-in</h5>
            <h5 className='reservation__check__value'>{start}</h5>
          </button>
          {/* <div>
            {renderCalendar &&
              <div className='reservation__check__calendar'>
                <DateRangePicker
                  ranges={[selectionRange]}
                  minDate={new Date()}
                  onChange={handleSelect}
                  rangeColors={['#ff3f3f']}
                  showDateDisplay={false}
                  dateDisplayFormat='d MMM yyyy'
                  months={2}
                  direction='horizontal'
                />
              </div>}
          </div> */}
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
