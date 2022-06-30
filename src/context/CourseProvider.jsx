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

  // Methods

  return (
    <CourseContext.Provider value={{ ...state }}>
      {children}
    </CourseContext.Provider>
  )
}

export default CourseProvider
