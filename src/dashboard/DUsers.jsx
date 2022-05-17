import DHeader from './DHeader'

import DPagination from './DPagination'
import DFormUser from './DFormUser'

import { useState, useEffect } from 'react'
import { PlusIcon } from '@heroicons/react/solid'

import useAlert from '../hooks/useAlert'
import DAlert from './DAlert'

import DModal from './DModal'
import axios from 'axios'

export default function DUsers () {
  const [open, setOpen] = useState(false)
  const [users, setUsers] = useState([])

  const { alert, setAlert, toggleAlert } = useAlert()

  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage] = useState(15)

  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  const currentUsers = users?.slice(indexOfFirstUser, indexOfLastUser)

  const paginateFront = () => setCurrentPage(currentPage + 1)
  const paginateBack = () => setCurrentPage(currentPage - 1)

  useEffect(() => {
    async function getUsers () {
      const response = await axios.get('https://rental-app-server.herokuapp.com/api/v1/users')
      setUsers(response.data)
    }
    try {
      getUsers()
    } catch (error) {
      console.error(error)
    }
  }, [alert])

  return (
    <>
      <DHeader />
      <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
        <div className='lg:flex lg:items-center lg:justify-between mb-8'>
          <div className='flex-1 min-w-0'>
            <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate'>Lista de Usuarios</h2>
          </div>
          <div className='mt-5 flex lg:mt-0 lg:ml-4'>
            <span className='sm:ml-3'>
              <button
                type='button'
                className='inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                onClick={() => setOpen(true)}
              >
                <PlusIcon className='-ml-1 mr-2 h-5 w-5' aria-hidden='true' />
                Agregar Usuario
              </button>
            </span>
          </div>
        </div>
        <DPagination
          thingsPerPage={usersPerPage}
          totalThings={users?.length}
          currentPage={currentPage}
          paginateBack={paginateBack}
          paginateFront={paginateFront}
        />
        <DAlert alert={alert} handleClose={toggleAlert} />
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Nombre y apellido u Organización
                    </th>
                    <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Tipo de persona
                    </th>
                    <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Estado
                    </th>
                    <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Rol
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
                  {currentUsers?.map((person) => (
                    <tr key={person?.email}>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='flex items-center'>
                          <div className='flex-shrink-0 h-10 w-10'>
                            <img className='h-10 w-10 rounded-full' src={`https://ui-avatars.com/api/?background=ff3f3f&color=fff&bold=true&name=${person?.firstName || person?.organization}`} alt='' />
                          </div>
                          <div className='ml-4'>
                            {person?.organization
                              ? <div className='text-sm underline font-semibold text-gray-700'>Organización</div>
                              : <div className='text-sm underline font-semibold text-gray-700'>Usuario</div>}
                            <div className='text-sm font-medium text-gray-700'>{person?.organization || (person?.firstName + ' ' + person?.lastName)}</div>
                            <div className='text-sm text-gray-500'>{person?.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='text-sm text-gray-900 capitalize'>{person?.typePerson}</div>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        {!person?.isBanned
                          ? <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>Activo</span>
                          : <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800'>Penalizado</span>}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize'>{person?.role}</td>
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
      <DModal open={open} setOpen={setOpen}>
        <DFormUser setOpen={setOpen} setAlert={setAlert} />
      </DModal>
    </>
  )
}
