import axios from 'axios'

const addUser = async (body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json'
    }
  }

  const response = await axios.post('https://rental-app-server.herokuapp.com/api/v1/users', body, config)

  return response.data
}

export { addUser }
