import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import './searchBar.scss'
import { useNavigate } from 'react-router-dom'
import { selectAllCities } from '../../redux/services/hotelsServices'
import { selectReservation, updateReservation } from '../../redux/slices/reservationSlice'

const SearchBar = () => {
  const cities = useSelector(selectAllCities)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(updateReservation({
      cityName: filters.city
    }))
    navigate('/hotels', { state: filters })
  }

  const reservation = useSelector(selectReservation)
  console.log(reservation)

  const [results, setResults] = useState(false)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(startDate)
  const [renderCalendar, setRenderCalendar] = useState(false)
  const [renderAmount, setRenderAmount] = useState(false)
  const [amount, setAmount] = useState(1)

  const [filters, setFilters] = useState({})

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection'
  }

  const handleCity = (e) => {
    setFilters({
      ...filters,
      city: e.target.value
    })
    console.log(filters.city)
    if (!e.target.value) {
      setResults(false)
    } else {
      const filter = cities?.filter(el => el.name.toLowerCase().includes(e.target.value.toLowerCase()))
      setResults(filter.splice(0, 5))
    }
  }

  const handlePlaceSelect = (e) => {
    setResults(false)
    setFilters({
      ...filters,
      city: e.target.value
    })
  }

  const handleSelect = ranges => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
    dispatch(updateReservation({
      checkIn: dateFormat(ranges.selection.startDate),
      checkOut: dateFormat(ranges.selection.endDate)
    }))
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
      dispatch(updateReservation({
        guests: amount - 1
      }))
      setFilters({
        ...filters,
        guests: amount - 1
      })
    } else {
      setAmount(amount + 1)
      dispatch(updateReservation({
        guests: amount + 1
      }))
      setFilters({
        ...filters,
        guests: amount + 1
      })
    }
  }

  return (
    <div>
      <div className='searchBar'>
        <div>
          <div className='searchBar__place'>
            <label><h5 className='searchBar__place__title'>Lugar</h5></label>
            <input
              name='city'
              className='searchBar__place__input'
              placeholder='A dónde vas?'
              onFocus={handleFocus}
              onChange={handleCity}
              value={filters.city}
            />
          </div>
          <div>
            {results &&
              <div className='searchBar__place__results'>
                {results?.map(e =>
                  <div key={e.name}>
                    <button
                      className='searchBar__place__results__name'
                      value={e.name}
                      onClick={handlePlaceSelect}
                    >{e.name}
                    </button>
                  </div>
                )}
              </div>}
          </div>
        </div>
        <div>
          <button className='searchBar__check' onClick={handleCalendarRender}>
            <h5 className='searchBar__check__title'>Check-in</h5>
            <h5 className='searchBar__check__value'>{reservation.checkIn}</h5>
          </button>
          <div>
            {renderCalendar &&
              <div className='searchBar__check__calendar'>
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
          </div>
        </div>
        <button className='searchBar__check' onClick={handleCalendarRender}>
          <h5 className='searchBar__check__title'>Check-out</h5>
          <h5 className='searchBar__check__value'>{reservation.checkOut}</h5>
        </button>
        <div>
          <button className='searchBar__amount' onClick={handleAmountRender}>
            <h5 className='searchBar__amount__title'>Huéspedes</h5>
            <h5 className='searchBar__amount__value'>{filters.guests ?? 'Cuantos...'}</h5>
          </button>
          {renderAmount &&
            <div className='searchBar__amount__display'>
              <h5 className='searchBar__amount__display__title'>Huéspedes</h5>
              <div className='searchBar__amount__display__counter'>
                <button name='-' onClick={handleAmount} className='searchBar__amount__display__counter__btn'>-</button>
                <h5 className='searchBar__amount__display__counter__number'>{amount}</h5>
                <button name='+' onClick={handleAmount} className='searchBar__amount__display__counter__btn'>+</button>
              </div>
            </div>}
        </div>
        <button className='searchBar__btn' onClick={handleSearch}>Buscar</button>
      </div>
    </div>
  )
}

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
export { SearchBar }
