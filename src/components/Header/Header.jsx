/* eslint-disable react/jsx-indent */
import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import logo from '../../assets/logotemplate.svg'
import bag from '../../assets/bagtemplates.svg'
import './header.scss'
import { Link } from 'react-router-dom'

function Header () {
  const auth = useAuth()

  const userData = {
    name: auth?.user?.firstName || auth?.user?.organization,
    email: auth?.user?.email,
    image: `https://ui-avatars.com/api/?name=${auth?.user?.name || auth?.user?.organization}`
  }

  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__container__content'>
          <Link to='/'>
            <img src={logo} alt='img' className='header__container__content__logo' />
          </Link>
          <ul className='header__container__content__ul'>
            <Link to='/'>
              <li>Inicio</li>
            </Link>
            <Link to='/about'>
              <li>Sobre Nosotros</li>
            </Link>

            {
              !userData.name
                ? <Link to='/login'>
                  <li>Ingresar</li>
                  </Link>

                : <Link to='/profile'><li>{userData.name}</li></Link>
            }

            {
              !userData.name
                ? <Link to='/register'>
                  <li>Registrarse</li>
                  </Link>
                : <Link to='/profile'><li><img src={userData.image} alt='' /></li></Link>
            }

            {
              userData.name && <li><button onClick={() => auth.logout()}>Cerrar Sesión</button></li>
            }

            <li><img src={bag} alt='bag' className='header__container__content__ul__bag' /></li>
            <li><button className='header__container__content__ul__btn'>Reservar</button></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
