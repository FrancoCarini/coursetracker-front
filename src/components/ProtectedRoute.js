import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import CourseContext from '../context/CourseContext'

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(CourseContext)

  if (!user) return <Navigate to="/landing" />

  return children
}
export default ProtectedRoute
