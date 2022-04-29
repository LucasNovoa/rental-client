import React from 'react'
import logo from '../../assets/logotemplate.svg'
import bag from '../../assets/bagtemplates.svg'
import './header.scss'

function Header () {
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__container__content'>
          <img src={logo} alt='img' className='header__container__content__logo' />
          <ul className='header__container__content__ul'>
            <li>Home</li>
            <li>Sobre Nosotros</li>
            <li>Log In</li>
            <li>Registrarse</li>
            <li><img src={bag} alt='bag' className='header__container__content__ul__bag' /></li>
            <li><button className='header__container__content__ul__btn'>Reservar</button></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
