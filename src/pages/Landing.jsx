import { Link } from 'react-router-dom'

import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import Logo from '../components/Logo'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Course <span>Tracking</span> App
          </h1>
          <p>
            Track and register all of your courses that you're taking and check
            what you're learning.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="course hunt" className="img main-img" />
      </div>
    </Wrapper>
  )
}

export default Landing
