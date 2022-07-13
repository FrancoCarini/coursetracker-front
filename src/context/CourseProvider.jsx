import { useReducer } from 'react'
import axios from 'axios'

import CourseContext from './CourseContext'
import CourseReducer from './CourseReducer'

const CourseProvider = ({ children }) => {
  const token = localStorage.getItem('token')
  const user = localStorage.getItem('user')

  const initialState = {
    isLoading: '',
    showAlert: false,
    alertText: '',
    alertType: '',
    user: user ? JSON.parse(user) : null,
    token: token ? token : null,
  }
  const [state, dispatch] = useReducer(CourseReducer, initialState)

  const displayAlert = () => {
    dispatch({
      type: 'SHOW_ALERT',
    })
    clearAlert()
  }

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({
        type: 'CLEAR_ALERT',
      })
    }, 3000)
  }

  const addUserToLocalStorage = (user, token) => {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
  }

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

  const register = async (newUser) => {
    dispatch({
      type: 'REGISTER_USER_BEGIN',
    })

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}api/users/register`,
        newUser
      )

      const { user, token } = data
      dispatch({
        type: 'REGISTER_USER_SUCCESS',
        payload: {
          user,
          token,
        },
      })
      addUserToLocalStorage(user, token)
    } catch (error) {
      dispatch({
        type: 'REGISTER_USER_ERROR',
        payload: {
          msg: error.response.data.error,
        },
      })
    }

    clearAlert()
  }

  const setup = async (currentUser, endpoint, alertText) => {
    dispatch({
      type: 'SETUP_USER_BEGIN',
    })

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}api/users/${endpoint}`,
        currentUser
      )

      const { user, token } = data
      dispatch({
        type: 'SETUP_USER_SUCCESS',
        payload: {
          user,
          token,
          alertText,
        },
      })
      addUserToLocalStorage(user, token)
    } catch (error) {
      dispatch({
        type: 'SETUP_USER_ERROR',
        payload: {
          msg: error.response.data.error,
        },
      })
    }

    clearAlert()
  }

  return (
    <CourseContext.Provider value={{ ...state, displayAlert, setup }}>
      {children}
    </CourseContext.Provider>
  )
}

export default CourseProvider
