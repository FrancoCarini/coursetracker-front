import { useContext } from 'react'

import FormRow from '../../components/FormRow'
import FormRowSelect from '../../components/FormRowSelect'
import Alert from '../../components/Alert'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import CourseContext from '../../context/CourseContext'

const AddJob = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    statusOptions,
    topicOptions,
    course,
    handleChange,
    clearValues,
    createCourse,
    editCourse,
  } = useContext(CourseContext)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!url || !title || !platform) {
      displayAlert()
      return
    }
    if (isEditing) {
      editCourse()
      return
    }
    createCourse()
  }

  const handleInputChange = (e) => handleChange(e.target.name, e.target.value)

  const { title, url, platform, status, topic } = course

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          {/* title */}
          <FormRow
            labelText="title"
            type="text"
            name="title"
            value={title}
            handleChange={handleInputChange}
          />
          {/* platform */}
          <FormRow
            labelText="platform"
            type="text"
            name="platform"
            value={platform}
            handleChange={handleInputChange}
          />
          {/* url */}
          <FormRow
            type="text"
            labelText="url"
            name="url"
            value={url}
            handleChange={handleInputChange}
          />
          {/* topic */}
          <FormRowSelect
            labelText="topic"
            name="topic"
            value={topic}
            handleChange={handleInputChange}
            list={topicOptions}
          />
          {/* status */}
          <FormRowSelect
            labelText="status"
            name="status"
            value={status}
            handleChange={handleInputChange}
            list={statusOptions}
          />
          {/* btn container */}
          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
            <button
              className="btn btn-block clear-btn"
              onClick={(e) => {
                e.preventDefault()
                clearValues()
              }}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default AddJob
