import { useState, useContext } from 'react'

import Logo from '../components/Logo'
import Wrapper from '../assets/wrappers/RegisterPage'
import FormRow from '../components/FormRow'
import Alert from '../components/Alert'
import CourseContext from '../context/CourseContext'

const Register = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    isMember: true,
  })

  const { isLoading, showAlert, displayAlert } = useContext(CourseContext)

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { name, email, password, isMember } = values

    if (!email || !password || (!isMember && !name)) {
      displayAlert()
      return
    }

    console.log(values)
  }

  const toggleMember = () => {
    setValues({
      ...values,
      isMember: !values.isMember,
    })
  }

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
            labelText="name"
          />
        )}

        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
          labelText="Email"
        />
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
          labelText="Password"
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}
export default Register
