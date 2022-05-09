/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import logo from '../../assets/logotemplate.svg'
import './header.scss'
import { Link } from 'react-router-dom'

function Header () {
  const [userInfo, setUserInfo] = useState(null)

  const auth = useAuth()

  useEffect(() => {
    const userJSON = window.localStorage.getItem('user')

    if (userJSON) {
      const user = JSON.parse(userJSON)

      setUserInfo(user)
    }
  }, [])

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
              !userInfo
                ? <Link to='/login'>
                  <li>Ingresar</li>
                  </Link>

                : <Link to='/profile'><li>{userInfo?.name || userInfo?.organization}</li></Link>
            }

            {
              userInfo && <li><button onClick={() => auth.logout()}>Cerrar Sesión</button></li>
            }

{
              !userInfo
                ? <Link to='/register'>
                  <li>Registrarse</li>
                  </Link>
                : <Link to='/profile'><li><img src={`https://ui-avatars.com/api/?name=${userInfo?.firstName || userInfo?.organization}`} alt='' /></li></Link>
            }

            {/* <li><img src={bag} alt='bag' className='header__container__content__ul__bag' /></li> */}
            <li><button className='header__container__content__ul__btn'>Reservar</button></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
