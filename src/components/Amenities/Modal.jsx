import React from 'react'
import './Modal.scss'

const Modal = ({ children, isOpen, closeModal }) => {
  return (
    <div className={`modal ${isOpen && 'is-open'}`}>
      <div className='modal__container'>
        <button className='modal__container__close' onClick={closeModal}>Cerrar</button>
        {children}
      </div>
    </div>
  )
}

export default Modal
