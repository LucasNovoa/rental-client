import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { SearchBar } from '../components/SearchBar/SearchBar'
import { HotelsContainer } from '../containers/HotelsContainer/HotelsContainer'
import '../scss/Hotels.scss'

export const Hotels = () => {
  return (
    <div className='hotels'>
      <Header />
      <SearchBar />
      <HotelsContainer />
      <Footer />
    </div>
  )
}
