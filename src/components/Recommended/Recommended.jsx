import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectAllHotels, useGetHotelsQuery } from '../../redux/services/hotelsServices'
import Map from '../Map/Map'
import './recommended.scss'

export default function Recommended () {
  const hotels = useSelector(selectAllHotels)

  const {
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetHotelsQuery()

  const place1 = 'Montevideo'
  const place2 = 'San Carlos de Bariloche'
  const place3 = 'Rio de Janeiro'
  const place4 = 'Santiago de Chile'

  const [selectedPlace, setSelectedPlace] = useState(place1)
  const [button1, setButton1] = useState('recommended__places__btn__active')
  const [button2, setButton2] = useState('recommended__places__btn__inactive')
  const [button3, setButton3] = useState('recommended__places__btn__inactive')
  const [button4, setButton4] = useState('recommended__places__btn__inactive')

  const handleClick = (e) => {
    window.scrollTo({
      top: 940,
      behavior: 'smooth'
    })
    if (e.target.name === place1 && selectedPlace !== place1) {
      setSelectedPlace(place1)
      setButton1('recommended__places__btn__active')
      setButton2('recommended__places__btn__inactive')
      setButton3('recommended__places__btn__inactive')
      setButton4('recommended__places__btn__inactive')
    }
    if (e.target.name === place2 && selectedPlace !== place2) {
      setSelectedPlace(place2)
      setButton2('recommended__places__btn__active')
      setButton1('recommended__places__btn__inactive')
      setButton3('recommended__places__btn__inactive')
      setButton4('recommended__places__btn__inactive')
    }
    if (e.target.name === place3 && selectedPlace !== place3) {
      setSelectedPlace(place3)
      setButton3('recommended__places__btn__active')
      setButton2('recommended__places__btn__inactive')
      setButton1('recommended__places__btn__inactive')
      setButton4('recommended__places__btn__inactive')
    }
    if (e.target.name === place4 && selectedPlace !== place4) {
      setSelectedPlace(place4)
      setButton4('recommended__places__btn__active')
      setButton1('recommended__places__btn__inactive')
      setButton3('recommended__places__btn__inactive')
      setButton2('recommended__places__btn__inactive')
    }
  }

  let content
  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    const filteredHotels = hotels.filter(e => e.City.name.includes(selectedPlace))
    content = (
      <Map
        className='recommended__map'
        width='70vw'
        height={700}
        zoom={12.5}
        hotels={filteredHotels}
      />
    )
  } else if (isError) {
    content = <p>{error}</p>
  }

  return (
    <div className='recommended'>
      <h1 className='recommended__title'>Esta semana te recomendamos ✔</h1>
      <div className='recommended__places'>
        <button className={button1} name={place1} onClick={handleClick}>{place1}</button>
        <button className={button2} name={place2} onClick={handleClick}>{place2}</button>
        <button className={button3} name={place3} onClick={handleClick}>{place3}</button>
        <button className={button4} name={place4} onClick={handleClick}>{place4}</button>
      </div>
      {content}
    </div>
  )
}
