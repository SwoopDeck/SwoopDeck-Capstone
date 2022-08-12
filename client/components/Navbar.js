import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    {/* <h1>Digital Logbook</h1> */}
    <nav>
      {isLoggedIn ? (
        <div className='nav-container'>
          {/* The navbar will show these links after you log in */}
          <h1 className='navLogo'>Digital Logbook</h1>
          <div className='nav-links'></div>
          <Link className='navLink' href="#" onClick={handleClick}>
            Logout
          </Link>
        </div>
      ) : (
        <div className='nav-container'>
          {/* The navbar will show these links before you log in */}
          <h1 className='navLogo'>Digital Logbook</h1>
          <div className='nav-links'></div>
          <Link to="/login" className='navLink'>Login</Link>
          <Link to="/signup" className='navLink'>Sign Up</Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.auth.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)
