import DHeader from './DHeader'

import { useState, useEffect } from 'react'
import { PlusIcon } from '@heroicons/react/solid'

import axios from 'axios'

export default function DHotels () {
  const [open, setOpen] = useState(false)
  const [hotels, setHotels] = useState([])

  useEffect(() => {
    async function getHotels () {
      const response = await axios.get('https://rental-app-server.herokuapp.com/api/v1/hotels')
      setHotels(response.data)
    }
    try {
      getHotels()
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <>
      <DHeader />
      <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
        <div className='lg:flex lg:items-center lg:justify-between mb-8'>
          <div className='flex-1 min-w-0'>
            <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate'>Lista de Hoteles</h2>
          </div>
          <div className='mt-5 flex lg:mt-0 lg:ml-4'>
            <span className='sm:ml-3'>
              <button
                type='button'
                className='inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                onClick={() => setOpen(true)}
              >
                <PlusIcon className='-ml-1 mr-2 h-5 w-5' aria-hidden='true' />
                Agregar Hotel
              </button>
            </span>
          </div>
        </div>
        <div className='-my-2 sm:-mx-6 lg:-mx-8'>
          <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='shadow border-b border-gray-200 sm:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      # ID
                    </th>
                    <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      País
                    </th>
                    <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Estrellas y Comodidades
                    </th>
                    <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Huéspedes y Niños
                    </th>
                    <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Precio
                    </th>
                    <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Estado
                    </th>
                    <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Contacto
                    </th>
                    <th scope='col' className='relative px-6 py-3'>
                      <span className='sr-only'>Editar</span>
                    </th>
                    <th scope='col' className='relative px-6 py-3'>
                      <span className='sr-only'>Eliminar</span>
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  {hotels?.map((hotel) => (
                    <tr key={hotel?.id}>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='flex items-center'>
                          <div className='flex-shrink-0 h-10 w-10'>
                            <img className='h-10 w-10 rounded-full' src={`https://ui-avatars.com/api/?background=ff3f3f&color=fff&bold=true&name=${hotel?.id}`} alt='' />
                          </div>
                        </div>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='text-sm font-medium text-gray-700'>{hotel?.Country.name}</div>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='flex items-center'>
                          <div className='ml-4'>
                            <div className='text-sm font-medium text-gray-700'>Estrellas: {hotel?.stars}</div>
                            <div className='text-sm font-medium text-gray-700'>Comodidades: {hotel?.amenities.length}</div>
                          </div>
                        </div>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='flex items-center'>
                          <div className='ml-4'>
                            <div className='text-sm font-medium text-gray-700'>Huéspedes: {hotel?.guests}</div>
                            <div className='text-sm font-medium text-gray-700'>Niños: {hotel?.children}</div>
                          </div>
                        </div>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>${hotel?.price}</div>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        {!hotel?.isBanned
                          ? <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>Activo</span>
                          : <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800'>Penalizado</span>}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='flex items-center'>
                          <div className='ml-4'>
                            <div className='text-sm font-medium text-gray-700'>{hotel?.email}</div>
                            <div className='text-sm font-medium text-gray-700'>{hotel?.phone}</div>
                            <div className='text-sm font-medium text-red-500 underline'><a href={hotel?.web}>Click Aquí</a></div>
                          </div>
                        </div>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                        <a href='#' className='text-indigo-600 hover:text-indigo-900'>
                          Editar
                        </a>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                        <a href='#' className='text-indigo-600 hover:text-indigo-900'>
                          Eliminar
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
