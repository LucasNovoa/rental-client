import { useState } from 'react'
import { useDispatch } from 'react-redux'
import './reviews.scss'
import { postReview } from '../../redux/slices/review.Slice'

function Reviews ({ setRev, setBook, book, userBookings }) {
  const dispatch = useDispatch()
  const reviewedBook = userBookings.find(b => b.id === book)
  const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  const [day, month, year] = [reviewedBook.checkOut.slice(0, 2), monthNames[reviewedBook.checkOut.slice(3, 5) && reviewedBook.checkOut.slice(4, 5) - 1], reviewedBook.checkOut.slice(6, 10)]
  const stayedOn = `${month} ${year}`
  const [review, setReview] = useState({
    description: '',
    priceQualityRatio: 1,
    facilities: 1,
    location: 1,
    cleaning: 1,
    attentionService: 1,
    comfortable: 1,
    stayedOn,
    BookingId: book
  })

  function handleClose (e) {
    e.preventDefault()
    setRev(0)
    setBook(0)
  }

  function handleChangeDesc (e) {
    e.preventDefault()
    // setBook(book)
    setReview({
      ...review,
      [e.target.name]: e.target.value
    })
  }

  function handleChange (e) {
    e.preventDefault()
    // setBook(book)
    setReview({
      ...review,
      [e.target.name]: +e.target.value
    })
  }

  function handleSubmit (e) {
    e.preventDefault()
    // console.log(review, stayedOn)
    dispatch(postReview(review))
    setBook(0)
    setRev(0)
  }

  return (
    <section className='reviews'>
      <button className='reviews__close' onClick={e => handleClose(e)}> Cerrar </button>
      <br />
      <br />
      <div>
        <p>Califique cada ítem de 1 a 5, siendo 1 muy malo y 5 muy bueno!</p>
        <form className='reviews__form' onSubmit={e => handleSubmit(e)}>
          <br />
          <label className='reviews__form__description'>
            <textarea name='description' maxLength={200} placeholder='Deje su comentario...' onChange={e => handleChangeDesc(e)} />
          </label>
          <br />
          <label className='reviews__form__label'>
            <span>Relación precio/calidad: </span>
            <select name='priceQualityRatio' onChange={e => handleChange(e)}>
              <option name='priceQualityRatio' value={1}>1</option>
              <option name='priceQualityRatio' value={2}>2</option>
              <option name='priceQualityRatio' value={3}>3</option>
              <option name='priceQualityRatio' value={4}>4</option>
              <option name='priceQualityRatio' value={5}>5</option>
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
          {/* <label className='reviews__form__label'>
            <span>Fecha de ingreso: </span>

            <input className='reviews__form__label__input' placeholder='DD/MM/AAAA' maxLength={10} name='stayedOn' onChange={e => handleChange(e)} />
          </label>
          <br /> */}

          <button className='reviews__form__submit' type='submit' onClick={e => handleSubmit(e)}>Enviar Reseña</button>

        </form>
      </div>
    </section>
  )
}

export default Reviews
