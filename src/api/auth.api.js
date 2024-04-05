import axios from 'axios'
import { API_ROOT } from '../utils/constans'

export const signinAPI = async(data) => {
  const response = await axios.post(`${API_ROOT}/api/auth/signin`, data)
  return response.data
}