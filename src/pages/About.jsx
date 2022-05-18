import Header from '../components/Header/Header'

import about3 from '../assets/images/about-us3.jpg'
import about4 from '../assets/images/about-us4.jpg'
import about5 from '../assets/images/about-us5.jpg'
import about6 from '../assets/images/about-us6.jpg'

import Footer from '../components/Footer/Footer'

import '../scss/About.scss'

function About () {
  return (
    <>
      <Header />
      <main className='About'>
        <section className='About__Us'>
          <article>
            <h1>Sobre Nosotros</h1>
            <p>
              Somos un grupo de desarrolladores especializados en aplicaciones web, que unimos fuerzas en el desarrollo de una aplicación con un funcionamiento sólido y dinámico. Así nació Rental, una startup con ambición de aplicación de uso global, que brinda soluciones de alojamiento para turistas de todo América Latina.
            </p>
          </article>
        </section>
        <section className='About__Text'>
          <article>
            <h2>Como empezamos</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              quos, doloribus perspiciatis nemo ratione ipsum numquam tempora
              magnam in maiores rerum adipisci laudantium quam praesentium
              temporibus minima?
            </p>
          </article>
          <article>
            <h2>Nuestra Misión</h2>
            <p>
              Nos motiva facilitar al usuario la experiencia a la hora de diagramar un viaje. Sabemos que encontrar la mejor opción al elegir un alojamiento puede ser una tarea ardua y es por eso que buscamos generar una herramienta que brinde una solución tanto al turista, como al propietario.
            </p>
          </article>
        </section>
        <div className='About__Images'>
          <div className='left'>
            <img src={about3} alt='' />
          </div>
          <div className='right'>
            <img src={about4} alt='' />
            <img src={about5} alt='' />
            <img src={about6} alt='' />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export { About }
