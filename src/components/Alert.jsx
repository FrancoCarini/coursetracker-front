import { useContext } from 'react'

import CourseContext from '../context/CourseContext'

const Alert = () => {
  const { alertType, alertText } = useContext(CourseContext)

  return <div className={`alert alert-${alertType}`}>{alertText}</div>
}
export default Alert
