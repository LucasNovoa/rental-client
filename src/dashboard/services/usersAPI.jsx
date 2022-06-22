import axios from 'axios'

const addUser = async (body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json'
    }
  }

  const response = await axios.post('https://rental-bookings-server.herokuapp.com/api/v1/users', body, config)

  return response.data
}

const deleteUser = async (id) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json'
    }
  }

  const response = await axios.delete('https://rental-bookings-server.herokuapp.com/api/v1/users/' + id, config)

  return response.data
}

const updateUser = async (id, body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json'
    }
  }

  const response = await axios.patch('https://rental-bookings-server.herokuapp.com/api/v1/users/' + id, body, config)

  return response.data
}

export { addUser, deleteUser, updateUser }
