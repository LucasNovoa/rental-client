import React from 'react'
import './aboutCompo.scss'
import about1 from '../../assets/images/about1.jpeg'
import about2 from '../../assets/images/about3.jpeg'
import about3 from '../../assets/images/about2.jpeg'
import about4 from '../../assets/images/about4.jpeg'

function AboutCompo () {
  return (
    <section className='about'>
      <div className='about__container'>
        <div className='about__container__photos'>
          <div className='about__container__photos__c_one'>
            <img src={about4} alt='about4' className='aboutImages' />
            <img src={about3} alt='about3' className='aboutImages' />
          </div>
          <div className='about__container__photos__c_two'>
            <img src={about2} alt='about2' className='aboutImages' />
            <img src={about1} alt='about1' className='aboutImages' />
          </div>
        </div>
        <div className='about__container__data'>
          <h2 className='about__container__data__title'>¿Qué nos hace diferentes?</h2>
          <p className='about__container__data__ptop'>Nuestra aplicación es pionera en brindar un servicio de alquiler de alojamiento tanto a hoteles, hostels, y residencias dedicadas al turismo, como a propietarios particulares que busquen rentar un alojamiento propio.</p>
          <div className='about__container__data__divider' />
          <p className='about__container__data__pbottom'>Hemos diseñado y desarrollado una plataforma que brinde soluciones simples, con una interfaz intuitiva, al alcance de todos los usuarios que quieran formar parte de nuestra comunidad.</p>
          {/* <button className='about__container__data__btn'>Sobre Nosotros</button> */}
        </div>
      </div>
    </section>
  )
}

export default AboutCompo
