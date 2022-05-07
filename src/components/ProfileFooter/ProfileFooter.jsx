import './ProfileFooter.scss'
import React from 'react'
import image from '../../assets/favicon.jpg'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

export default function Footer () {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__container__top'>
          <div className='footer__container__top__grid'>
            <div>
              <a href='/' className='footer__container__top__grid__logoWrapper'>
                <span className='footer__container__top__grid__logoWrapper__span'>
                  <img src={image} alt='Rental - Logo' className='footer__container__top__grid__logoWrapper__span__logo' />
                  <h1>Rental</h1>
                </span>
              </a>
              <p className='footer__container__top__grid__mgBottom'>
                Vive la mejor experiencia, ubicando el lugar ideal para tus vacaciones, retiro o viajes de trabajo, Rental te guía a la mejor opción para ti.
              </p>
              <div className='footer__container__top__grid__social'>
                <a href='https://facebook.com/' className='footer__container__top__grid__social__href'>
                  <div className='social-icon-font'><FaFacebookF className='icon' /></div>
                </a>
                <a href='https://twitter.com/' className='footer__container__top__grid__social__href'>
                  <div className='social-icon-font'><FaTwitter className='icon' /></div>
                </a>
                <a href='https://www.instagram.com/' className='footer__container__top__grid__social__href'>
                  <div className='social-icon-font'><FaInstagram className='icon' /></div>
                </a>
                <a href='https://youtube.com/' className='footer__container__top__grid__social__href'>
                  <div className='social-icon-font'><FaYoutube className='icon' /></div>
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
                    <a href='/' className='footer__container__top__grid__listCont__ul1__li1__href'>
                      Inicio
                    </a>
                  </li>
                  <li className='footer__container__top__grid__listCont__ul1__li2'>
                    <a href='/about' className='footer__container__top__grid__listCont__ul1__li2__href'>
                      Acerca de ...
                    </a>
                  </li>
                  <li className='footer__container__top__grid__listCont__ul1__li5'>
                    <a href='/contact' className='footer__container__top__grid__listCont__ul1__li5__href'>
                      Contáctanos
                    </a>
                  </li>
                  <li className='footer__container__top__grid__listCont__ul1__li6'>
                    <a href='/hotels' className='footer__container__top__grid__listCont__ul1__li6__href'>
                      Ver Hoteles
                    </a>
                  </li>
                  <li className='footer__container__top__grid__ul2__li6'>
                    <a href='/register' className='footer__container__top__grid__ul2__li6__href'>
                      Registrarse
                    </a>
                  </li>
                  <li className='login'>
                    <a href='/template-pages/changelog' className='footer__container__top__grid__ul2__li6__href'>
                      Ingresar
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div />
          </div>
        </div>
        <div className='footer__container__newsWrapper'>
          <div className='footer__container__newsWrapper__wrapper'>
            <div className='footer__container__newsWrapper__wrapper__start'>
              <img src='https://assets.website-files.com/61f981dc0f719d75a5d78239/61fae5bac8b5c39df6384e27_newsletter-footer-icon-rental-webflow-ecommerce-template.svg' alt='' className='footer__container__newsWrapper__wrapper__start__img' />
              <div>
                <div className='footer__container__newsWrapper__wrapper__start__subscribe'>
                  <div className='footer__container__newsWrapper__wrapper__start__subscribe__text'>
                    Suscríbete a nuestro boletín informativo
                  </div>
                </div>
                <div>
                  Únase a las más de 5000 personas que usan nuestra aplicación
                </div>
              </div>
            </div>
            <div className='footer__container__newsWrapper__wrapper__input'>
              <form>
                <div className='footer__container__newsWrapper__wrapper__input__subscribe'>
                  <input type='email' className='footer__container__newsWrapper__wrapper__input__subscribe__input' maxLength='256' placeholder='Introduce tu email' />
                  <input type='submit' value='Suscribirse' data-wait='Por favor espere...' className='footer__container__newsWrapper__wrapper__input__subscribe__bottom' />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
