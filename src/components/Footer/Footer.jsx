import './Footer.scss'
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
                Páginas
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
                      Log In
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className='footer__container__top__grid__listUtiles'>
                Páginas útiles
              </div>
              <ul className='footer__container__top__grid__ul2'>
                <li className='footer__container__top__grid__ul2__li1'>
                  <a href='/template-pages/start-here' className='footer__container__top__grid__ul2__li1__href'>
                    Inicie aquí
                  </a>
                </li>
                <li className='footer__container__top__grid__ul2__li2'>
                  <a href='/template-pages/style-guide' className='footer__container__top__grid__ul2__li2__href'>
                    Guía de estilos
                  </a>
                </li>
                <li className='footer__container__top__grid__ul2__li3'>
                  <a href='https://rentaltemplate.webflow.io/404' className='footer__container__top__grid__ul2__li3__href'>
                    404 No encontrado
                  </a>
                </li>
                <li className='footer__container__top__grid__ul2__li4'>
                  <a href='https://rentaltemplate.webflow.io/401' className='footer__container__top__grid__ul2__li4__href'>
                    Protección con password
                  </a>
                </li>
                <li className='footer__container__top__grid__ul2__li5'>
                  <a href='/template-pages/licenses' className='footer__container__top__grid__ul2__li5__href'>
                    Licencias
                  </a>
                </li>

              </ul>
            </div>
            <div>
              <div className='footer__container__top__grid__listInstagram'>
                Síguenos en Instagram
              </div>
              <div className='footer__container__top__grid__ulInstagram'>
                <a href='https://www.instagram.com/' className='footer__container__top__grid__ulInstagram__href1'>
                  <img src='https://assets.website-files.com/61f981dc0f719d75a5d78239/61fae5bb9a4f153c395996b4_instagram-footer-image-1-rental-webflow-ecommerce-template.jpg' alt='Follow Us On Instagram' className='footer__container__top__grid__ulInstagram__href1__img' />
                </a>
                <a href='https://www.instagram.com/' className='footer__container__top__grid__ulInstagram__href2'>
                  <img src='https://assets.website-files.com/61f981dc0f719d75a5d78239/61fae5bd99cd1482459f5a18_instagram-footer-image-2-rental-webflow-ecommerce-template.jpg' alt='Follow Us On Instagram' className='footer__container__top__grid__ulInstagram__href2__img' />
                </a>
                <a href='https://www.instagram.com/' className='footer__container__top__grid__ulInstagram__href3'>
                  <img src='https://assets.website-files.com/61f981dc0f719d75a5d78239/61fae5bdf1a790368e70ba6a_instagram-footer-image-3-rental-webflow-ecommerce-template.jpg' alt='Follow Us On Instagram' className='footer__container__top__grid__ulInstagram__href3__img' />
                </a>
                <a href='https://www.instagram.com/' className='footer__container__top__grid__ulInstagram__href4'>
                  <img src='https://assets.website-files.com/61f981dc0f719d75a5d78239/61fae5bc4b2dee4295767ada_instagram-footer-image-4-rental-webflow-ecommerce-template.jpg' alt='Follow Us On Instagram' className='footer__container__top__grid__ulInstagram__href4__img' />
                </a>
                <a href='https://www.instagram.com/' className='footer__container__top__grid__ulInstagram__href5'>
                  <img src='https://assets.website-files.com/61f981dc0f719d75a5d78239/61fae5bdc1dfb22fd4ef26fa_instagram-footer-image-5-rental-webflow-ecommerce-template.jpg' alt='Follow Us On Instagram' className='footer__container__top__grid__ulInstagram__href5__img' />
                </a>
                <a href='https://www.instagram.com/' className='footer__container__top__grid__ulInstagram__href6'>
                  <img src='https://assets.website-files.com/61f981dc0f719d75a5d78239/61fae5bbdbd7a3ef87e031c8_instagram-footer-image-6-rental-webflow-ecommerce-template.jpg' alt='Follow Us On Instagram' className='footer__container__top__grid__ulInstagram__href6__img' />
                </a>
              </div>
            </div>
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
