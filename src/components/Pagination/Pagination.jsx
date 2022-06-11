import React from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import './pagination.scss'

function Pagination ({ page, setPage, maxPage }) {
  const prevPage = (e) => {
    e.preventDefault()
    page > 0 ? setPage(page - 1) : setPage(0)
  }

  const nextPage = (e) => {
    e.preventDefault()
    page < maxPage ? setPage(page + 1) : setPage(page)
  }

  return (
    <div className='pagination'>
      <AiOutlineArrowLeft className='pagination__btnr' onClick={prevPage} />
      <span>{page + 1} / {Math.round(maxPage + 1)}</span>
      <AiOutlineArrowRight className='pagination__btnl' onClick={nextPage} />
    </div>
  )
}

export default Pagination
