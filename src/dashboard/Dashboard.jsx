import DHeader from './DHeader'
import { DChart } from './DChart'

import './styles/tailwind.css'

import useFetch from '../hooks/useFetch'

const Dashboard = () => {
  const users = useFetch('https://rental-app-server.herokuapp.com/api/v1/users')
  const hotels = useFetch('https://rental-app-server.herokuapp.com/api/v1/hotels')

  const typePerson = users?.map((user) => user.typePerson.toUpperCase())
  const rolePerson = users?.map((user) => user.role.toUpperCase())

  const country = hotels?.map((hotel) => hotel.Country.name.toUpperCase())
  const stars = hotels?.map((hotel) => hotel.stars)

  // eslint-disable-next-line no-sequences
  const countOccurrences = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {})

  const usersData = {
    datasets: [
      {
        label: 'Roles',
        data: countOccurrences(rolePerson),
        borderWidth: 2,
        backgroundColor: ['#ffbb11', '#c0c0c0', '#50af95', 'f3ba2f', '2a71d0']
      }
    ]
  }

  const usersData2 = {
    datasets: [
      {
        label: 'Tipos de Persona',
        data: countOccurrences(typePerson),
        borderWidth: 2,
        backgroundColor: ['#ffbb11', '#c0c0c0', '#50af95', 'f3ba2f', '2a71d0']
      }
    ]
  }

  const hotelsData = {
    datasets: [
      {
        label: 'Países',
        data: countOccurrences(country),
        borderWidth: 2,
        backgroundColor: ['#ffbb11', '#c0c0c0', '#50af95', 'f3ba2f', '2a71d0']
      }
    ]
  }

  const hotelsData2 = {
    datasets: [
      {
        label: 'Estrellas',
        data: countOccurrences(stars),
        borderWidth: 2,
        backgroundColor: ['#ffbb11', '#c0c0c0', '#50af95', 'f3ba2f', '2a71d0']
      }
    ]
  }

  return (
    <>
      <DHeader />
      <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 dashboard'>
        <div className='flex w-1/2'>
          <DChart className='' chartData={usersData} titleText='Usuarios' />
          <DChart className='' chartData={usersData2} titleText='Usuarios' />
        </div>
        <hr className='my-10' />
        <div className='flex w-1/2'>
          <DChart className='' chartData={hotelsData} titleText='Hoteles' />
          <DChart className='' chartData={hotelsData2} titleText='Hoteles' />
        </div>
      </div>
    </>
  )
}

export { Dashboard }
