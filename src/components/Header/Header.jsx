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
                            ? <Link to='/register'>
                              <li>Registrarse</li>
                              </Link>
                            : <Link to='/profile'><li><img className='header__container__content__ul__userLogo' src={`https://ui-avatars.com/api/?name=${userInfo?.firstName || userInfo?.organization}`} alt='' /></li></Link>
                        }
            {
              !userInfo
                ? <Link to='/login'>
                  <li><button className='header__container__content__ul__btn'>Iniciar Sesión</button></li>
                  </Link>

                : null
                // <Link to='/profile'><li >{userInfo?.name || userInfo?.organization}</li></Link>
            }

            {
              userInfo && <li><button className='header__container__content__ul__cerrarSesion' onClick={() => auth.logOut()}>Cerrar Sesión</button></li>
            }
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
