import { useState, useContext } from 'react'

import FormRow from '../../components/FormRow'
import Alert from '../../components/Alert'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import CourseContext from '../../context/CourseContext'

const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useContext(CourseContext)

  const [name, setName] = useState(user?.name)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      displayAlert()
      return
    }
    updateUser(name)
  }

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Profile</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? 'Please Wait ...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  )
}
export default Profile
