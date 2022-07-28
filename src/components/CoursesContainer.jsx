import { useEffect, useContext } from 'react'

import Loading from './Loading'
import Course from './Course'
import Wrapper from '../assets/wrappers/JobsContainer'
import CourseContext from '../context/CourseContext'
import PageButtonContainer from './PageButtonContainer'

const CoursesContainer = () => {
  const { getCourses, courses, page, isLoading, numOfPages, totalCourses } =
    useContext(CourseContext)

  useEffect(() => {
    getCourses()
  }, [page])

  if (isLoading) return <Loading center />

  if (courses.length === 0)
    return (
      <Wrapper>
        <h2>No courses to display...</h2>
      </Wrapper>
    )

  return (
    <Wrapper>
      <h5>
        {totalCourses} course{courses.length > 1 && 's'} found
      </h5>
      <div className="jobs">
        {courses.map((course) => {
          return <Course key={course._id} course={course} />
        })}
      </div>
      {numOfPages > 1 && <PageButtonContainer />}
    </Wrapper>
  )
}
export default CoursesContainer
