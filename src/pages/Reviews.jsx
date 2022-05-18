import React from 'react'
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Reviews from '../components/Review/Reviews.jsx'

export default function RevPage () {
  return (
    <>
      <section className='revpage'>
        <Header />
        <Reviews />
        <Footer />
      </section>
    </>
  )
}
