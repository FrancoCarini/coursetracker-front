import { Fragment } from 'react'

import CoursesContainer from '../../components/CoursesContainer'
import SearchContainer from '../../components/SearchContainer'

const AllCourses = () => {
  return (
    <Fragment>
      <SearchContainer />
      <CoursesContainer />
    </Fragment>
  )
}
export default AllCourses
