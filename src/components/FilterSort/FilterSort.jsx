import './FilterSort.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { BiSortAlt2 } from 'react-icons/bi'
import { selectFilters, updateFilters } from '../../redux/slices/filtersSlice'

const FilterSort = ({ less, setLess, cap, setCap, setFilterPrice, minStars, maxStars, setMinStars, setMaxStars, setFilterStars }) => {
  const [stars, setStars] = useState({ min: 1, max: 5 })

  function handleLess (e) {
    e.preventDefault()
    setLess(e.target.value)
  }

  function handleCap (e) {
    e.preventDefault()
    setCap(e.target.value)
  }

  function handleMinStars (e) {
    e.preventDefault()
    setMinStars(e.target.value)
  }

  function handleMaxStars (e) {
    e.preventDefault()
    setMaxStars(e.target.value)
  }

  function handleReset (e) {
    e.preventDefault()
    setLess(1)
    setCap(50000)
    setMaxStars(1)
    setMinStars(5)
    setFilterPrice({ min: less, max: cap })
    setFilterStars({ min: less, max: less })
  }

  function handleFilter (e) {
    e.preventDefault()
    setFilterPrice({
      min: less || 1,
      max: cap || 500000
    })
    setFilterStars({
      min: minStars || 1,
      max: maxStars || 5
    })
  }

  return (
    <div>
      <div className='containerFS'>
        <div className='containerFS__filter'>
          <div className='containerFS__filter__price'>
            <h5 className='containerFS__filter__price__title'>Precio</h5>
            <div className='containerFS__filter__price__options'>
              <div className='containerFS__filter__price__options__minPrice'>
                <h5>Min</h5>
                <input name='min' type='number' placeholder='100' min='0' onChange={e => handleLess(e)} />
                <h5>U$S</h5>
              </div>
              <div className='containerFS__filter__price__options__maxPrice'>
                <h5>Max</h5>
                <input name='max' type='number' placeholder='100' min='0' onChange={e => handleCap(e)} />
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
                    onChange={e => handleMinStars(e)}
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
                  onChange={e => handleMaxStars(e)}
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
            <button className='containerFS__filter__btn__reset' onClick={e => handleReset(e)}>Reset</button>
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
