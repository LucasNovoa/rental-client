import { useState } from 'react'
import { useSelector } from 'react-redux'
import { getHotelsError, getHotelsStatus, selectAllHotels } from '../../redux/slices/hotelSlice'
import Map from '../Map/Map'
import './recommended.scss'

export default function Recommended () {
  const hotels = useSelector(selectAllHotels)
  const status = useSelector(getHotelsStatus)
  const error = useSelector(getHotelsError)

  const place1 = 'Montevideo'
  const place2 = 'San Carlos de Bariloche'

  const [selectedPlace, setSelectedPlace] = useState(place1)
  const [button1, setButton1] = useState('recommended__places__btn__active')
  const [button2, setButton2] = useState('recommended__places__btn__inactive')

  const handleClick = (e) => {
    if (e.target.name === place1 && selectedPlace !== place1) {
      setSelectedPlace(place1)
      setButton1('recommended__places__btn__active')
      setButton2('recommended__places__btn__inactive')
    }
    if (e.target.name === place2 && selectedPlace !== place2) {
      setSelectedPlace(place2)
      setButton2('recommended__places__btn__active')
      setButton1('recommended__places__btn__inactive')
    }
  }

  let content
  if (status === 'loading') {
    content = <p>Loading...</p>
  } else if (status === 'succeeded') {
    const filteredHotels = hotels.filter(e => e.City.name.includes(selectedPlace))
    content = (
      <Map
        className='recommended__map'
        width='80vw'
        height={400}
        hotels={filteredHotels}
      />
    )
  } else if (status === 'failed') {
    content = <p>{error}</p>
  }

  return (
    <div className='recommended'>
      <h1 className='recommended__title'>Recomendados de la semana</h1>
      <div className='recommended__places'>
        <button className={button1} name={place1} onClick={handleClick}>{place1}</button>
        <button className={button2} name={place2} onClick={handleClick}>{place2}</button>
      </div>
      {content}
    </div>
  )
}
