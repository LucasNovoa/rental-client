import './FilterSort.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { BiSortAlt2 } from 'react-icons/bi'

const FilterSort = () => {
  const dispatch = useDispatch()

  const [price, setPrice] = useState({ min: 0, max: 99999 })
  const [stars, setStars] = useState({ min: 1, max: 5 })

  const handlePriceChange = (e) => {
    e.preventDefault()
    setPrice({ ...price, [e.target.name]: e.target.value })
  }

  const handleStarsChange = (e) => {
    e.preventDefault()
    setStars({ ...stars, [e.target.name]: e.target.value })
  }

  const handleReset = (e) => {
    e.preventDefault()
    setPrice({ min: 0, max: 99999 })
    setStars({ min: 1, max: 5 })
  }

  const handleFilter = (e) => {
    e.preventDefault()
  }

  console.log('price: ', price, 'stars: ', stars)

  return (
    <div>
      <div className='containerFS'>
        <div className='containerFS__filter'>
          <div className='containerFS__filter__price'>
            <h5 className='containerFS__filter__price__title'>Precio</h5>
            <div className='containerFS__filter__price__options'>
              <div className='containerFS__filter__price__options__minPrice'>
                <h5>Min</h5>
                <input name='min' type='number' placeholder='100' min='0' onChange={handlePriceChange} />
                <h5>U$S</h5>
              </div>
              <div className='containerFS__filter__price__options__maxPrice'>
                <h5>Max</h5>
                <input name='max' type='number' placeholder='100' min='0' onChange={handlePriceChange} />
                <h5>U$S</h5>
              </div>
            </div>
          </div>
          <div className='containerFS__filter__vl' />
          <div className='containerFS__filter__stars'>
            <h5 className='containerFS__filter__stars__title'>Estrellas</h5>
            <div className='containerFS__filter__stars__options'>
              <div className='containerFS__filter__stars__options__minStars'>
                <h5>Min</h5>
                <div className='containerFS__filter__stars__options__minStars__select'>
                  <select
                    name='min'
                    min={1}
                    max={stars.max}
                    onChange={handleStarsChange}
                  >
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                  </select>
                </div>
              </div>
              <div className='containerFS__filter__stars__options__maxStars'>
                <h5>Max</h5>
                <select
                  defaultValue={5}
                  min={stars.min}
                  max={5}
                  className='containerFS__filter__stars__options__maxStars__select'
                  name='max'
                  onChange={handleStarsChange}
                >
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </select>
              </div>
            </div>
          </div>
          <div className='containerFS__filter__btn'>
            <button className='containerFS__filter__btn__reset' onClick={handleReset}>Reset</button>
            <button className='containerFS__filter__btn__filtrar' onClick={handleFilter}>Filtrar</button>
          </div>
        </div>
        <div className='containerFS__sort'>
          <div className='containerFS__sort__title'>
            <h5>Ordenar</h5>
            <BiSortAlt2 className='containerFS__sort__title__icon' />
          </div>
          <div className='containerFS__sort__options'>
            <div className='containerFS__sort__options__price'>
              <h5 className='containerFS__sort__options__price__title'>Precio</h5>
              <select>
                <option>Ordenar</option>
                <option>Ascendente</option>
                <option>Descendente</option>
              </select>
            </div>
            <div className='containerFS__sort__options__stars'>
              <h5>Estrellas</h5>
              <select>
                <option>Ordenar</option>
                <option>Ascendente</option>
                <option>Descendente</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterSort
