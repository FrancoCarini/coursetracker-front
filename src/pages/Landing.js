import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="corse tracker" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Course <span>Trackig</span> App
          </h1>
          <p>
            Track and register all of your courses that you're taking and check
            what you're learning.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="course hunt" className="img main-img" />
      </div>
    </Wrapper>
  )
}

export default Landing
