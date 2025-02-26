import './Footer.scss'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/favicon.jpg'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
import axios from 'axios'
import swal from 'sweetalert'

export default function Footer () {
  const userJSON = window.localStorage.getItem('user')
  const [mail, setMail] = useState({
    email: ''
  })

  function handleInput (e) {
    e.preventDefault()
    setMail(
      e.target.value
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (mail.includes('@')) {
      axios.post('https://rental-bookings-server.herokuapp.com/api/v1/suscriptors', { email: mail })
      swal({
        title: 'Felicitaciones',
        text: '¡Te suscribiste con éxito!',
        button: 'Ok!',
        icon: 'success'
      })
    } else {
      swal({
        title: '¡Atención!',
        text: 'Ingresa un email válido',
        button: 'OK',
        icon: 'warning'
      })
    }
  }

  const handleClick = (e) => {
    if (userJSON) e.preventDefault()
  }

  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__container__top'>
          <div className='footer__container__top__grid'>
            <div>
              <a href='/' className='footer__container__top__grid__logoWrapper'>
                <span className='footer__container__top__grid__logoWrapper__span'>
                  <img
                    src={image}
                    alt='Rental - Logo'
                    className='footer__container__top__grid__logoWrapper__span__logo'
                  />
                  <h1>Rental</h1>
                </span>
              </a>
              <p className='footer__container__top__grid__mgBottom'>
                Vive la mejor experiencia, ubicando el lugar ideal para tus
                vacaciones, retiro o viajes de trabajo, Rental te guía a la
                mejor opción para ti.
              </p>
              <div className='footer__container__top__grid__social'>
                <a
                  href='https://facebook.com/'
                  target='_blank'
                  className='footer__container__top__grid__social__href' rel='noreferrer'
                >
                  <div className='social-icon-font'>
                    <FaFacebookF className='icon' />
                  </div>
                </a>
                <a
                  href='https://twitter.com/'
                  target='_blank'
                  className='footer__container__top__grid__social__href' rel='noreferrer'
                >
                  <div className='social-icon-font'>
                    <FaTwitter className='icon' />
                  </div>
                </a>
                <a
                  href='https://www.instagram.com/'
                  target='_blank'
                  className='footer__container__top__grid__social__href' rel='noreferrer'
                >
                  <div className='social-icon-font'>
                    <FaInstagram className='icon' />
                  </div>
                </a>
                <a
                  href='https://youtube.com/'
                  target='_blank'
                  className='footer__container__top__grid__social__href' rel='noreferrer'
                >
                  <div className='social-icon-font'>
                    <FaYoutube className='icon' />
                  </div>
                </a>
              </div>
            </div>
            <div>
              <div className='footer__container__top__grid__listTitle'>
                Links Útiles
              </div>
              <div className='footer__container__top__grid__listCont'>
                <ul className='footer__container__top__grid__listCont__ul1'>
                  <li className='footer__container__top__grid__listCont__ul1__li1'>
                    <Link
                      to='/'
                      className='footer__container__top__grid__listCont__ul1__li1__href'
                    >
                      Inicio
                    </Link>
                  </li>
                  <li className='footer__container__top__grid__listCont__ul1__li2'>
                    <Link
                      to='/about'
                      className='footer__container__top__grid__listCont__ul1__li2__href'
                    >
                      Acerca de ...
                    </Link>
                  </li>
                  {/* <li className='footer__container__top__grid__listCont__ul1__li5'>
                    <a
                      href='/contact'
                      className='footer__container__top__grid__listCont__ul1__li5__href'
                    >
                      Contáctanos
                    </a>
                  </li> */}
                  <li className='footer__container__top__grid__listCont__ul1__li6'>
                    <Link
                      to='/hotels'
                      className='footer__container__top__grid__listCont__ul1__li6__href'
                    >
                      Ver Hoteles
                    </Link>
                  </li>
                  <li className='footer__container__top__grid__ul2__li6'>
                    <Link
                      to='/register'
                      onClick={handleClick}
                      className={!userJSON ? 'footer__container__top__grid__ul2__li6__href' : 'footer__container__top__grid__ul2__li6__logged'}
                    >
                      Registrarse
                    </Link>
                  </li>
                  <li className='login'>
                    <Link
                      to='/login'
                      onClick={handleClick}
                      className={!userJSON ? 'footer__container__top__grid__ul2__li6__href' : 'footer__container__top__grid__ul2__li6__logged'}
                    >
                      Ingresar
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div />
            <div>
              <div className='footer__container__top__grid__listInstagram'>
                Síguenos en Instagram
              </div>
              <div className='footer__container__top__grid__ulInstagram'>
                <a
                  href='https://www.instagram.com/'
                  target='_blank'
                  className='footer__container__top__grid__ulInstagram__href1' rel='noreferrer'
                >
                  <img
                    src='https://assets.website-files.com/61f981dc0f719d75a5d78239/61fae5bb9a4f153c395996b4_instagram-footer-image-1-rental-webflow-ecommerce-template.jpg'
                    alt='Follow Us On Instagram'
                    className='footer__container__top__grid__ulInstagram__href1__img'
                  />
                </a>
                <a
                  href='https://www.instagram.com/'
                  target='_blank'
                  className='footer__container__top__grid__ulInstagram__href2' rel='noreferrer'
                >
                  <img
                    src='https://assets.website-files.com/61f981dc0f719d75a5d78239/61fae5bd99cd1482459f5a18_instagram-footer-image-2-rental-webflow-ecommerce-template.jpg'
                    alt='Follow Us On Instagram'
                    className='footer__container__top__grid__ulInstagram__href2__img'
                  />
                </a>
                <a
                  href='https://www.instagram.com/'
                  target='_blank'
                  className='footer__container__top__grid__ulInstagram__href3' rel='noreferrer'
                >
                  <img
                    src='https://assets.website-files.com/61f981dc0f719d75a5d78239/61fae5bdf1a790368e70ba6a_instagram-footer-image-3-rental-webflow-ecommerce-template.jpg'
                    alt='Follow Us On Instagram'
                    className='footer__container__top__grid__ulInstagram__href3__img'
                  />
                </a>
                <a
                  href='https://www.instagram.com/'
                  target='_blank'
                  className='footer__container__top__grid__ulInstagram__href4' rel='noreferrer'
                >
                  <img
                    src='https://assets.website-files.com/61f981dc0f719d75a5d78239/61fae5bc4b2dee4295767ada_instagram-footer-image-4-rental-webflow-ecommerce-template.jpg'
                    alt='Follow Us On Instagram'
                    className='footer__container__top__grid__ulInstagram__href4__img'
                  />
                </a>
                <a
                  href='https://www.instagram.com/'
                  target='_blank'
                  className='footer__container__top__grid__ulInstagram__href5' rel='noreferrer'
                >
                  <img
                    src='https://assets.website-files.com/61f981dc0f719d75a5d78239/61fae5bdc1dfb22fd4ef26fa_instagram-footer-image-5-rental-webflow-ecommerce-template.jpg'
                    alt='Follow Us On Instagram'
                    className='footer__container__top__grid__ulInstagram__href5__img'
                  />
                </a>
                <a
                  href='https://www.instagram.com/'
                  target='_blank'
                  className='footer__container__top__grid__ulInstagram__href6' rel='noreferrer'
                >
                  <img
                    src='https://assets.website-files.com/61f981dc0f719d75a5d78239/61fae5bbdbd7a3ef87e031c8_instagram-footer-image-6-rental-webflow-ecommerce-template.jpg'
                    alt='Follow Us On Instagram'
                    className='footer__container__top__grid__ulInstagram__href6__img'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='footer__container__newsWrapper'>
          <div className='footer__container__newsWrapper__wrapper'>
            <div className='footer__container__newsWrapper__wrapper__start'>
              <img
                src='https://assets.website-files.com/61f981dc0f719d75a5d78239/61fae5bac8b5c39df6384e27_newsletter-footer-icon-rental-webflow-ecommerce-template.svg'
                alt=''
                className='footer__container__newsWrapper__wrapper__start__img'
              />
              <div className='footer__container__newsWrapper__wrapper__start__text'>
                <div className='footer__container__newsWrapper__wrapper__start__subscribe'>
                  <div className='footer__container__newsWrapper__wrapper__start__subscribe__text'>
                    Suscríbete a nuestro boletín informativo
                  </div>
                </div>
                <div className='footer__container__newsWrapper__wrapper__start__usuarios'>
                  Únase a nuestra comunidad!
                </div>
              </div>
            </div>
            <div className='footer__container__newsWrapper__wrapper__input'>
              <form onSubmit={handleSubmit}>
                <div className='footer__container__newsWrapper__wrapper__input__subscribe'>
                  <input
                    type='email'
                    name='email'
                    className='footer__container__newsWrapper__wrapper__input__subscribe__input'
                    maxLength='256'
                    placeholder='Introduce tu email'
                    onChange={e => handleInput(e)}
                  />
                  <button type='submit' className='footer__container__newsWrapper__wrapper__input__subscribe__bottom' onClick={e => handleSubmit(e)}>
                    Suscribirse
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
