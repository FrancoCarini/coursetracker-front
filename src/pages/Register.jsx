import { useState, useEffect } from 'react'

import Logo from '../components/Logo'
import Wrapper from '../assets/wrappers/RegisterPage'
import FormRow from '../components/FormRow'
import Alert from '../components/Alert'

const Register = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    isMember: true,
    showAlert: false,
  })

  const handleChange = (e) => {
    console.log(e.target)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
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
        {values.showAlert && <Alert />}
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
