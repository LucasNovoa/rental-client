import React, { useState } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { SearchBar } from '../components/SearchBar/SearchBar'
import { HotelsContainer } from '../containers/HotelsContainer/HotelsContainer'
import FilterSort from '../components/FilterSort/FilterSort'
import '../scss/Hotels.scss'

export const Hotels = () => {
  const [less, setLess] = useState(null)
  const [cap, setCap] = useState(null)
  const [filterPrice, setFilterPrice] = useState({ min: null, max: null })
  const [minStars, setMinStars] = useState(null)
  const [maxStars, setMaxStars] = useState(null)
  const [filterStars, setFilterStars] = useState({ min: null, max: null })

  return (
    <div className='hotels'>
      <Header />
      <SearchBar />
      <FilterSort less={less} setLess={setLess} cap={cap} setCap={setCap} setFilterPrice={setFilterPrice} minStars={minStars} setMinStars={setMinStars} maxStars={maxStars} setMaxStars={setMaxStars} setFilterStars={setFilterStars} />
      <HotelsContainer less={less} setLess={setLess} cap={cap} setCap={setCap} filterPrice={filterPrice} minStars={minStars} setMinStars={setMinStars} maxStars={setMaxStars} setMaxStars={setMaxStars} filterStars={filterStars} />
      <Footer />
    </div>
  )
}
