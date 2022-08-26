import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Login, Signup } from './components/AuthForm';
import Home from './components/Home';
import { me } from './store';
import AllJumps from './components/AllJumps';
import SingleJump from './components/SingleJump';
import AddJump from './components/AddJump';
import CreateUser from './components/CreateUser';
import UserProfile from './components/UserProfile';
import Example from './components/Example';
import AllDropzones from './components/AllDropzones';
import AllUsers from './components/AllUsers';
import JoinLoad from './components/JoinLoad';
import CreateLoad from './components/CreateLoad';
import DropzoneProfile from './components/DropzoneProfile';
import PastLoads from './components/PastLoads';
import TodaysLoads from './components/TodaysLoads';
import SingleUser from './components/SingleUser';
import SingleDropzone from './components/SingleDropzone';
import EditUser from './components/EditUser'
import EditDropzone from './components/EditDropzone'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn, isAdmin, isDropzone } = this.props;

    let adminRoutes = (<Switch>
      {/* Routes if logged in and Admin */}
    <Route exact path="/users" component={AllUsers} />
    <Route exact path="/dropzones" component={AllDropzones} />
    <Route exact path="/" component={AllJumps} />
    <Route exact path="/home" component={AllJumps} />
    {/* <Redirect to="/home" /> */}
    {/* <Route exact path='/login' component={ Login } /> */}
    <Route path="/alljumps" component={AllJumps} />
    <Route path="/jumps/:jumpId" component={SingleJump} />
    <Route path="/add" component={AddJump} />
    <Route path="/viewProfile" component={UserProfile} />
    <Route exact path="/users/:id" component={SingleUser} />
    <Route exact path="/dropzones/:id" component={SingleDropzone} />
    <Route exact path="/dropzones/edit/:id" component={EditDropzone} />
    <Route exact path="/users/edit/:id" component={EditUser} />

    </Switch>)

    let userRoutes = (<Switch>
      {/* Routes if logged in but not Admin */}
      <Route exact path="/" component={AllJumps} />
      <Route exact path="/home" component={AllJumps} />
      <Route path="/alljumps" component={AllJumps} />
      <Route path="/jumps/:jumpId" component={SingleJump} />
      <Route path="/add" component={AddJump} />
      <Route path="/viewProfile" component={UserProfile} />
      <Route path="/joinload" component={JoinLoad} />
      <Route path="/users/edit/:id" component={EditUser} />
      </Switch>)

      let dropzoneRoutes = (<Switch>
        {/* DROPZONE ONLY ROUTES*/}
      <Route path="/pastloads" component={PastLoads} />
      <Route path="/todaysloads" component={TodaysLoads} />
      <Route path="/createload" component={CreateLoad} />
      <Route path="/dropzoneProfile" component={DropzoneProfile} />
      </Switch>)

        let notLoggedIn = (<Switch>
          {/* <Route exact path='/' component={ Login } /> */}
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/example" component={Example} />
          <Route path="/signup" component={CreateUser} />
        </Switch>)
    return (
      <div>
        {isLoggedIn ? (
          <div>
          {isAdmin ? (adminRoutes
          ) : (
            <div>
              {isDropzone ? dropzoneRoutes : userRoutes}
            </div>
            )}
            </div>) :  notLoggedIn}
        
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
    isAdmin: !!state.auth.isAdmin,
    isDropzone: !!state.auth.isDropzone,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
