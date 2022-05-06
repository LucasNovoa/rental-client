import React from 'react'
import logo from '../../assets/logotemplate.svg'
import bag from '../../assets/bagtemplates.svg'
import './header.scss'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__container__content'>
          <Link to='/'>
            <img src={logo} alt='img' className='header__container__content__logo' />
          </Link>
          <ul className='header__container__content__ul'>
            <Link to='/'>
              <li>Home</li>
            </Link>
            <Link to='/about'>
              <li>Sobre Nosotros</li>
            </Link>
            <Link to='/login'>
              <li>Log In</li>
            </Link>
            <Link to='/register'>
              <li>Registrarse</li>
            </Link>
            <li><img src={bag} alt='bag' className='header__container__content__ul__bag' /></li>
            <li><button className='header__container__content__ul__btn'>Reservar</button></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
