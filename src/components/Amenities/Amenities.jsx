import React from 'react'
import './Amenities.scss'
import Modal from './Modal'
import { useModal } from './useModal'

const Amenities = (props) => {
  const [isOpenModal, openModal, closeModal] = useModal(false)
  const arreglo = ['kitchen', 'fireplace', 'wifi', 'refrigerator'] // este arreglo debe venir de la BD de hoteles
  const arregloControl = ['wifi', 'tv', 'heater', 'fireplace', 'kitchen', 'parking', 'hotTub', 'game', 'refrigerator'] // arreglo para el control de los amenities básicos
  const arregloControlTotal = ['wifi', 'tv', 'heater', 'fireplace', 'kitchen', 'parking', 'hotTub', 'game', 'refrigerator', 'alquilerCoches', 'ascensor', 'banera', 'camaKingSize', 'cocteles', 'desayuno', 'equipaje', 'piscina', 'servicios'] // arreglo para el control de los amenities totales
  const arregloEspanol = ['WiFi', 'TV', 'Calefacción', 'Chimenea', 'Cocina', 'Estacionamiento', 'Jacuzzi', 'Sala de Juegos', 'Refrigerador', 'Alquiler de Autos', 'Ascensor', 'Bañera', 'Cama King Size', 'Cócteles', 'Desayunos', 'Botones', 'Piscina', 'Servicio a la habitación'] // arreglo de etiquetas para mostrar al renderizar el componente
  return (
    <div className='amenities'>
      <h1 className='amenities__title'>{'Lo que este lugar ofrece '}</h1>
      <div className='amenities__wrapper'>
        <div className='amenities__wrapper__grid'>
          {arregloControl.map((e, index) => {
            let visible = false
            if (arreglo.includes(e)) visible = true
            const icon = `../assets/iconsAmenities/${e}.svg`
            return (
              <React.Fragment key={index}>
                <div>
                  <img src={icon} className='amenities__wrapper__grid__category__img' />
                  <div className={`amenities__wrapper__grid__category__text ${!visible && 'tachado'}`}>{arregloEspanol[index]}</div>
                </div>
              </React.Fragment>
            )
          })}
        </div>
      </div>
      <div className='dos'>
        <Modal isOpen={isOpenModal} closeModal={closeModal}>
          <h2 className='amenities__title'>{'Lo que este lugar ofrece '}</h2>
          <div className='amenities__wrapper__grid'>
            {arregloControlTotal.map((e, index) => {
              let visible = false
              if (arreglo.includes(e)) visible = true
              const icon = `../assets/iconsAmenities/${e}.svg`
              return (
                <React.Fragment key={index}>
                  <div>
                    <img src={icon} className='amenities__wrapper__grid__category__img' />
                    <div className={`amenities__wrapper__grid__category__text ${!visible && 'tachado'}`}>{arregloEspanol[index]}</div>
                  </div>
                </React.Fragment>
              )
            })}
          </div>
        </Modal>
        <button onClick={openModal} className='uno'>Ver todos los amenities</button>
      </div>
    </div>
  )
}

export default Amenities
