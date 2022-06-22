import { useParams } from 'react-router-dom'

import DHeader from './DHeader'
import DFormUser from './DFormUser'
import { useEffect, useState } from 'react'
import axios from 'axios'

const DEditUser = () => {
  const [user, setUser] = useState({})

  const { id } = useParams()

  useEffect(() => {
    async function getUser () {
      const response = await axios.get('https://rental-bookings-server.herokuapp.com/api/v1/users/' + id)
      setUser(response.data)
    }
    getUser()
  }, [])

  delete user.Hotels
  delete user.Bookings
  delete user.Reviews

  return (
    <>
      <DHeader />
      <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
        <DFormUser user={user} />
      </div>
    </>

  )
}

export default DEditUser
