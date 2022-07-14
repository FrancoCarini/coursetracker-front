import { useContext, useState } from 'react'
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'

import Wrapper from '../assets/wrappers/Navbar'
import CourseContext from '../context/CourseContext'
import Logo from './Logo'

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false)
  const { toggleSidebar, user, logout } = useContext(CourseContext)
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button type="button" className="dropdown-btn" onClick={logout}>
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default Navbar
