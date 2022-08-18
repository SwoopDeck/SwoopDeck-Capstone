import React from 'react'
import {connect} from 'react-redux'
import Sidebar from './Sidebar'
import AllJumps from './AllJumps'

/**
 * COMPONENT
 */
export const Home = props => {
  const {firstName} = props

  return (
    <div className='flex-right'>
      <h3>Welcome</h3>
      <div className="right-top-column">
            <div className="total-freefall-time-integers">3 hours 21 minutes</div>
        <div className="total-freefall-time">Total FreeFall Time</div>
          </div>
      <AllJumps />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.auth.email
  }
}

export default connect(mapState)(Home)
