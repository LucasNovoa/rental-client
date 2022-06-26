import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import './searchBar.scss'
import { useNavigate } from 'react-router-dom'
import { selectAllCities } from '../../redux/services/hotelsServices'
import { selectReservation, updateReservation } from '../../redux/slices/reservationSlice'
import { selectFilters, updateFilters } from '../../redux/slices/filtersSlice'

const SearchBar = () => {
  const reservation = useSelector(selectReservation)
  const filters = useSelector(selectFilters)
  const cities = useSelector(selectAllCities)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [results, setResults] = useState(false)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(startDate)
  const [renderCalendar, setRenderCalendar] = useState(false)
  // const [renderAmount, setRenderAmount] = useState(false)
  const [amount, setAmount] = useState(reservation.guests)
  const [place, setPlace] = useState(filters.city)

  const [inputFilters, setInputFilters] = useState({
    city: place,
    otherFilters: {
      guests: filters.otherFilters.guests
    }
  })

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection'
  }

  // console.log('RESERVATION: ', reservation, 'FILTERS: ', filters, 'INPUT: ', inputFilters)

  const handleSearch = (e) => {
    e.preventDefault()

    dispatch(updateReservation({
      ...reservation,
      cityName: place
    }))
    dispatch(updateFilters({
      ...inputFilters
    }))
    navigate('/hotels', { replace: true })
    // console.log('clic')
  }

  const handleCity = (e) => {
    setInputFilters({
      ...inputFilters,
      city: e.target.value
    })
    if (!e.target.value) {
      setResults(false)
    } else {
      const filter = cities?.filter(el => el.name.toLowerCase().includes(e.target.value.toLowerCase()))
      setResults(filter.splice(0, 15))
    }
  }

  const handlePlaceSelect = (e) => {
    setResults(false)
    setPlace(e.target.value)
    setInputFilters({
      ...inputFilters,
      city: e.target.value
    })
    dispatch(updateReservation({
      cityName: e.target.value
    }))
  }

  const handleSelect = ranges => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
    dispatch(updateReservation({
      checkIn: ranges.selection.startDate,
      checkOut: ranges.selection.endDate
    }))
    // console.log(reservation)
  }

  const handleCalendarRender = () => {
    setResults(false)
    setRenderCalendar(!renderCalendar)
  }

  // const handleAmountRender = () => {
  //   setRenderCalendar(false)
  //   setResults(false)
  //   setRenderAmount(!renderAmount)
  // }

  const handleFocus = () => {
    setRenderCalendar(false)
  }

  const handleAmount = (e) => {
    setRenderCalendar(false)
    setResults(false)
    if (e.target.name === '-') {
      if (amount === 1) return
      if (amount > 1) setAmount(amount - 1)
      dispatch(updateReservation({
        guests: amount - 1
      }))
      setInputFilters({
        ...inputFilters,
        otherFilters: {
          ...inputFilters.otherFilters,
          guests: amount - 1
        }
      })
    } else {
      setAmount(amount + 1)
      dispatch(updateReservation({
        guests: amount + 1
      }))

      setInputFilters({
        ...inputFilters,
        otherFilters: {
          ...inputFilters.otherFilters,
          guests: amount + 1
        }
      })
    }
  }

  return (
    <div>
      <div className='searchBar'>
        <div>
          <div className='searchBar__place'>
            <label><h5 className='searchBar__place__title'>Destino</h5></label>
            <input
              type='text'
              autoComplete='off'
              name='city'
              className='searchBar__place__input'
              placeholder='Elige una ciudad...'
              onFocus={handleFocus}
              onChange={handleCity}
              value={inputFilters.city}
            />
          </div>
          <div>
            {results &&
              <div className='searchBar__place__results'>
                {results.length
                  ? results.map(e =>
                    <div key={e.name}>
                      <button
                        className='searchBar__place__results__name'
                        value={e.name}
                        onClick={handlePlaceSelect}
                      >{e.name}
                      </button>
                    </div>
                  )
                  : <p className='searchBar__place__results__name'>No hay resultados...</p>}
              </div>}
          </div>
        </div>
        <div>
          <button className='searchBar__check' onClick={handleCalendarRender}>
            <h5 className='searchBar__check__title'>Check In</h5>
            <h5 className='searchBar__check__value'>{reservation.checkIn === 'Desde...' ? reservation.checkIn : dateFormat(reservation.checkIn)}</h5>
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
          <h5 className='searchBar__check__title'>Check Out</h5>
          <h5 className='searchBar__check__value'>{reservation.checkOut === 'Hasta...' ? reservation.checkOut : dateFormat(reservation.checkOut)}</h5>
        </button>
        <div className='searchBar__amount'>
          <h5 className='searchBar__amount__title'>Huéspedes</h5>
          <div className='searchBar__amount__title__counter'>
            <button name='-' disabled={amount === 1} onClick={handleAmount} className='searchBar__amount__title__counter__btn'>-</button>
            <h5 className='searchBar__amount__title__counter__number'>{reservation.guests}</h5>
            <button name='+' disabled={amount > 5} onClick={handleAmount} className='searchBar__amount__title__counter__btn'>+</button>
          </div>
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

  return arr[0] + ' ' + month + ' ' + arr[2].slice(0, 4)
}
export { SearchBar }
