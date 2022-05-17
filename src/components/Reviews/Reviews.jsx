import { useState } from 'react'
import './reviews.scss'

function Reviews ({ setRev, setBook }) {
  const [review, setReview] = useState({
    description: '',
    price: null,
    facilites: null,
    location: null,
    cleaning: null,
    attentionService: null,
    comfortable: null,
    stayedOn: ''
  })

  function handleClose (e) {
    e.preventDefault()
    setRev(0)
    setBook(0)
  }

  function handleChange (e) {
    e.preventDefault()

    setReview({
      ...review,
      [e.target.name]: e.target.value
    })
  }

  return (
    console.log(review),
      <section className='reviews'>
        <button className='reviews__close' onClick={e => handleClose(e)}> Cerrar </button>
        <br />
        <br />
        <div>
          <h2>Califique cada servicio del 1 al 5, siendo 1 muy malo, y 5 muy bueno</h2>
          <form className='reviews__form'>
            <br />
            <label className='reviews__form__description'>
              <textarea maxLength={200} placeholder='Deje su comentario...' />
            </label>
            <br />
            <label className='reviews__form__label'>
              <span>Precio: </span>
              <select name='price' onChange={e => handleChange(e)}>
                <option name='price' value={1}>1</option>
                <option name='price' value={2}>2</option>
                <option name='price' value={3}>3</option>
                <option name='price' value={4}>4</option>
                <option name='price' value={5}>5</option>
              </select>
            </label>
            <br />
            <label className='reviews__form__label'>
              <span>Instalaciones: </span>
              <select name='facilities' onChange={e => handleChange(e)}>
                <option name='facilities' value={1}>1</option>
                <option name='facilities' value={2}>2</option>
                <option name='facilities' value={3}>3</option>
                <option name='facilities' value={4}>4</option>
                <option name='facilities' value={5}>5</option>
              </select>
            </label>
            <br />
            <label className='reviews__form__label'>
              <span>Ubicación</span>
              <select name='location' onChange={e => handleChange(e)}>
                <option name='location' value={1}>1</option>
                <option name='location' value={2}>2</option>
                <option name='location' value={3}>3</option>
                <option name='location' value={4}>4</option>
                <option name='location' value={5}>5</option>
              </select>
            </label>
            <br />
            <label className='reviews__form__label'>
              <span>Limpieza: </span>
              <select name='cleaning' onChange={e => handleChange(e)}>
                <option name='cleaning' value={1}>1</option>
                <option name='cleaning' value={2}>2</option>
                <option name='cleaning' value={3}>3</option>
                <option name='cleaning' value={4}>4</option>
                <option name='cleaning' value={5}>5</option>
              </select>
            </label>
            <br />
            <label className='reviews__form__label'>
              <span>Atención al cliente: </span>
              <select name='attentionService' onChange={e => handleChange(e)}>
                <option name='attentionService' value={1}>1</option>
                <option name='attentionService' value={2}>2</option>
                <option name='attentionService' value={3}>3</option>
                <option name='attentionService' value={4}>4</option>
                <option name='attentionService' value={5}>5</option>
              </select>
            </label>
            <br />
            <label className='reviews__form__label'>
              <span>Comodidad: </span>
              <select name='comfortable' onChange={e => handleChange(e)}>
                <option name='comfortable' value={1}>1</option>
                <option name='comfortable' value={2}>2</option>
                <option name='comfortable' value={3}>3</option>
                <option name='comfortable' value={4}>4</option>
                <option name='comfortable' value={5}>5</option>
              </select>
            </label>
            <br />
            <label className='reviews__form__label'>
              <span>Fecha de ingreso: </span>

              <input className='reviews__form__label__input' placeholder='DD/MM/AAAA' name='stayedOn' onChange={e => handleChange(e)} />
            </label>
            <br />
            <button className='reviews__form__submit' type='submit' onClick={e => handleClick(e)}>Enviar Reseña</button>
          </form>
        </div>
      </section>
  )
}

export default Reviews
