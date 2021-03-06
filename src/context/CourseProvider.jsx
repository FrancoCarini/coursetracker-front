import { useReducer } from 'react'

import CourseContext from './CourseContext'
import CourseReducer from './CourseReducer'
import axios, { axiosPrivate } from '../utils/axiosInstance'

const CourseProvider = ({ children }) => {
  const initialState = {
    isLoading: '',
    showAlert: false,
    alertText: '',
    alertType: '',
    user: null,
    token: null,
    showSidebar: false,
    persist: JSON.parse(localStorage.getItem('persist')) || false,
  }
  const [state, dispatch] = useReducer(CourseReducer, initialState)

  const setUserToken = (user, token) => {
    dispatch({
      type: 'SET_USER_TOKEN',
      payload: {
        user,
        token,
      },
    })
  }

  // Axios request
  axiosPrivate.interceptors.request.use(
    (config) => {
      if (!config.headers['Authorization']) {
        config.headers['Authorization'] = `Bearer ${state.token}`
      }
      return config
    },
    (error) => Promise.reject(error)
  )

  // Axios response
  axiosPrivate.interceptors.response.use(
    (response) => {
      return response
    },
    async (error) => {
      const prevRequest = error?.config
      if (
        error.response.status === 401 &&
        error.response.data.error === 'Expired Token' &&
        !prevRequest?.sent
      ) {
        prevRequest.sent = true
        const { data } = await axios.get('users/refresh', {
          withCredentials: true,
        })
        const { user, token } = data
        setUserToken(user, token)
        error.config.headers['Authorization'] = `Bearer ${token}`
        return axiosPrivate(prevRequest)
      }
      return Promise.reject(error)
    }
  )

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

  const setup = async (currentUser, endpoint, alertText) => {
    dispatch({
      type: 'SETUP_USER_BEGIN',
    })

    try {
      const { data } = await axios.post(
        `users/${endpoint}`,
        currentUser,
        {
          withCredentials: true,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
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

  const toggleSidebar = () => {
    dispatch({
      type: 'TOGGLE_SIDEBAR',
    })
  }

  const logout = () => {
    dispatch({
      type: 'LOGOUT_USER',
    })
  }

  const updateUser = async (name) => {
    dispatch({
      type: 'UPDATE_USER_BEGIN',
    })

    try {
      const { data } = await axiosPrivate.put('users/update', {
        name,
      })

      dispatch({
        type: 'UPDATE_USER_SUCCESS',
        payload: { user: data.user },
      })
    } catch (error) {
      if (error.response.data.error !== 401) {
        dispatch({
          type: 'UPDATE_USER_ERROR',
          payload: {
            msg: error.response.data.error,
          },
        })
      }
    }

    clearAlert()
  }

  return (
    <CourseContext.Provider
      value={{
        ...state,
        displayAlert,
        setup,
        toggleSidebar,
        logout,
        updateUser,
        setUserToken,
      }}
    >
      {children}
    </CourseContext.Provider>
  )
}

export default CourseProvider
