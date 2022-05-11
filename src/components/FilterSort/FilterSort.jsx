import './FilterSort.scss'
import { AiFillStar } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { filter, selectAllFilters } from '../../redux/slices/filterSlice'
import { useState } from 'react'

const FilterSort = () => {
  const dispatch = useDispatch()
  const filters = useSelector(selectAllFilters)

  const [price, setPrice] = useState('')
  const [stars, setStars] = useState('')

  const handlePriceChange = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    if (e.target.value < 1 || !e.target.value) setPrice('999999')
    else setPrice(e.target.value)
    console.log(price)
  }

  const handlePriceClick = (e) => {
    e.preventDefault()
    dispatch(filter({ highestPrice: price }))
  }

  const handleStarsChange = (e) => {
    e.preventDefault()
    setStars(e.target.value)
  }

  const handleStarsClick = (e) => {
    e.preventDefault()
    if (stars === 'All') dispatch(filter({ stars: '' }))
    else dispatch(filter({ stars }))
  }

  return (
    <div className='container'>
      <div className='container__filter'>
        <div className='container__filter__price'>
          <h5>Precio máximo</h5>
          <input type='number' placeholder='100' min='0' onChange={handlePriceChange} />
          <h5>U$S</h5>
        </div>
        <button className='container__filter__price__btn' onClick={handlePriceClick}>Filtrar</button>
        <div className='container__filter__stars'>
          <h5>Estrellas</h5>
          <select name='stars' onChange={handleStarsChange}>
            <option value='All'>Todas las</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
          <AiFillStar />
          <button className='container__filter__stars__btn' onClick={handleStarsClick}>Filtrar</button>
        </div>
      </div>
      {/* <div>
        <h5>Ordenar por</h5>
      </div> */}
    </div>
  )
}

export default FilterSort
