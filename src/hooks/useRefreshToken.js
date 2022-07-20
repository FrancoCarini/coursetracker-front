import { useContext } from 'react'
import axios from '../utils/axiosInstance'
import CourseContext from '../context/CourseContext'

const useRefreshToken = () => {
  const { setUserToken } = useContext(CourseContext)

  const refresh = async () => {
    const { data } = await axios.get('users/refresh', {
      withCredentials: true,
    })
    const { user, token } = data

    setUserToken(user, token)

    return token
  }

  return refresh
}

export default useRefreshToken
