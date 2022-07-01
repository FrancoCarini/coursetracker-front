import { useReducer } from 'react'

import CourseContext from './CourseContext'
import CourseReducer from './CourseReducer'

const CourseProvider = ({ children }) => {
  const initialState = {
    isLoading: '',
    showAlert: false,
    alertText: '',
    alertType: '',
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

  return (
    <CourseContext.Provider value={{ ...state, displayAlert }}>
      {children}
    </CourseContext.Provider>
  )
}

export default CourseProvider
