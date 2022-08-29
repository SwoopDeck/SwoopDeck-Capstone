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
import ErrorPage from './components/ErrorPage';
import EditUser from './components/EditUser';
import EditDropzone from './components/EditDropzone';
import JoinDropzone from './components/JoinDropzone';
import AllChartsClass from './components/AllChartsClass';
import DropzoneLoadList from './components/DropzoneLoadList';
import LoadDetailsDZ from './components/LoadDetailsDZ';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn, isAdmin, isDropzone } = this.props;

    let adminRoutes = (
      <Switch>
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
        <Route path="/users/:id" component={SingleUser} />
        <Route path="/dropzones/:id" component={SingleDropzone} />

        <Route exact path="/dropzones/edit/:id" component={EditDropzone} />
        <Route exact path="/users/edit/:id" component={EditUser} />
        <Route exact path="/:dropzoneId/loads" component={DropzoneLoadList} />
        <Route path="/:dropzoneId/loads/:loadId" component={LoadDetailsDZ} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    );

    let userRoutes = (
      <Switch>
        {/* Routes if logged in but not Admin */}
        <Route exact path="/" component={AllJumps} />
        <Route exact path="/home" component={AllJumps} />
        <Route path="/alljumps" component={AllJumps} />
        <Route path="/jumps/:jumpId" component={SingleJump} />
        <Route path="/add" component={AddJump} />
        <Route path="/viewProfile" component={UserProfile} />

        <Route path="/:dropzoneId/loads" component={JoinLoad} />
        <Route path="/join/dropzone" component={JoinDropzone} />
        <Route path="/users/edit/:id" component={EditUser} />
        <Route path="*" component={ErrorPage} />
        <Route exact path="/allchartsclass/:id" component={AllChartsClass} />
      </Switch>
    );

    let dropzoneRoutes = (
      <Switch>
        {/* DROPZONE ONLY ROUTES*/}
        <Route path="/pastloads" component={PastLoads} />

        <Route
          exact
          path="/:dropzoneId/todaysLoads"
          component={DropzoneLoadList}
        />
        {/*<Route path="/createload" component={CreateLoad} />
        <Route path="/dropzoneProfile" component={DropzoneProfile} />
        <Route path="/dropzoneLoadList" component={DropzoneLoadList} /> */}

        {/* <Route exact path="/:dropzoneId/loads" component={TodaysLoads} /> */}
        <Route
          exact
          path="/:dropzoneId/loads/:loadId"
          component={LoadDetailsDZ}
        />

        <Route path="/createload" component={CreateLoad} />
        <Route path="/dropzoneProfile" component={DropzoneProfile} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    );

    let notLoggedIn = (
      <Switch>
        {/* <Route exact path='/' component={ Login } /> */}
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/example" component={Example} />
        <Route path="/signup" component={CreateUser} />

        <Route path="*" component={ErrorPage} />
      </Switch>
    );
    return (
      <div>
        {isLoggedIn ? (
          <div>
            {isAdmin ? (
              adminRoutes
            ) : (
              <div>{isDropzone ? dropzoneRoutes : userRoutes}</div>
            )}
          </div>
        ) : (
          notLoggedIn
        )}
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
