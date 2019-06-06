import axios from 'axios'

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v1',
})

export default api
