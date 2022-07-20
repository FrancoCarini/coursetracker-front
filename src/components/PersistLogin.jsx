import { Outlet } from 'react-router-dom'
import { useState, useEffect, Fragment, useContext } from 'react'

import useRefreshToken from '../hooks/useRefreshToken'
import CourseContext from '../context/CourseContext'

const PersistLogin = () => {
  const [isLoading, setisLoading] = useState(true)
  const refresh = useRefreshToken()
  const { user, persist } = useContext(CourseContext)

  useEffect(() => {
    let isMounted = true

    const verifyRefreshToken = async () => {
      try {
        await refresh()
      } catch (error) {
        console.log(error)
      } finally {
        isMounted && setisLoading(false)
      }
    }

    !user && persist ? verifyRefreshToken() : setisLoading(false)

    return () => (isMounted = false)
  }, [])

  return (
    <Fragment>
      {!persist ? <Outlet /> : isLoading ? <p>Loading...</p> : <Outlet />}
    </Fragment>
  )
}

export default PersistLogin
