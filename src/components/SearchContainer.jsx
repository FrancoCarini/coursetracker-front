import { useContext } from 'react'

import FormRow from './FormRow'
import FormRowSelect from './FormRowSelect'
import Wrapper from '../assets/wrappers/SearchContainer'
import CourseContext from '../context/CourseContext'

const SearchContainer = () => {
  const {
    isLoading,
    filters,
    sortOptions,
    clearFilters,
    handleChangeFilters,
    statusOptions,
    topicOptions,
    getCourses,
    changePage,
  } = useContext(CourseContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    changePage(1)
    getCourses()
  }

  const { status, title, platform, topic, sort } = filters

  const onChange = (e) => {
    handleChangeFilters(e.target.name, e.target.value)
  }

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h4>search form</h4>
        <div className="form-center">
          {/* Title */}
          <FormRow
            type="text"
            name="title"
            value={title}
            handleChange={onChange}
          />

          {/* Platform */}
          <FormRow
            type="text"
            name="platform"
            value={platform}
            handleChange={onChange}
          />

          {/* Status */}
          <FormRowSelect
            labelText="status"
            name="status"
            value={status}
            handleChange={onChange}
            list={statusOptions}
          />

          {/* Topic */}
          <FormRowSelect
            labelText="topic"
            name="topic"
            value={topic}
            handleChange={onChange}
            list={topicOptions}
          />

          {/* Sort */}
          <FormRowSelect
            name="sort"
            value={sort}
            list={sortOptions}
            handleChange={onChange}
          />
          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-block submit-btn"
              disabled={isLoading}
            >
              Filter
            </button>
            <button
              type="button"
              className="btn btn-block clear-btn"
              disabled={isLoading}
              onClick={clearFilters}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default SearchContainer
