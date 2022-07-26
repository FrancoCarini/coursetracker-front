import { useContext } from 'react'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'

import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa'
import Wrapper from '../assets/wrappers/Job'
import CourseInfo from './CourseInfo'
import CourseContext from '../context/CourseContext'

const Course = ({ course }) => {
  const { _id, title, status, platform, url, topic, createdAt } = course
  const { setEditCourse, deleteCourse } = useContext(CourseContext)

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{platform.charAt(0)}</div>
        <div className="info">
          <h5>{title}</h5>
          <p>{platform}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <CourseInfo
            icon={<FaLocationArrow />}
            text="Go to Course"
            url={url}
          />
          <CourseInfo
            icon={<FaCalendarAlt />}
            text={dayjs(createdAt).format('MMM D, YYYY')}
          />
          <CourseInfo icon={<FaBriefcase />} text={topic} />
          <div
            className={`status ${status.replaceAll(' ', '-').toLowerCase()}`}
          >
            {status}
          </div>
        </div>
        <footer>
          <div className="actions">
            <Link
              to="/add-course"
              className="btn edit-btn"
              onClick={() => setEditCourse(course)}
            >
              Edit
            </Link>
            <button
              type="button"
              className="btn delete-btn"
              onClick={() => deleteCourse(_id)}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  )
}
export default Course
