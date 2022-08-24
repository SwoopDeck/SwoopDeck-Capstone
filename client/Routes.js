import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";
import Home from "./components/Home";
import { me } from "./store";
import AllJumps from "./components/AllJumps";
import SingleJump from "./components/SingleJump";
import AddJump from "./components/AddJump";
import CreateUser from "./components/CreateUser";
import UserProfile from "./components/UserProfile";
import Example from "./components/Example";
import AllCharts from "./components/AllCharts";
import AllChartsClass from "./components/AllChartsClass";
/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route exact path="/" component={AllJumps} />
            <Route exact path="/home" component={AllJumps} />
            {/* <Redirect to="/home" /> */}
            {/* <Route exact path='/login' component={ Login } /> */}
            <Route path="/alljumps" component={AllJumps} />
            <Route path="/jumps/:jumpId" component={SingleJump} />
            <Route path="/add" component={AddJump} />
            <Route path="/viewProfile" component={UserProfile} />
            <Route exact path="/charts" component={AllCharts} />
          </Switch>
        ) : (
          <Switch>
            {/* <Route exact path='/' component={ Login } /> */}
            <Route path="/login" component={Login} />
            <Route path="/example" component={Example} />
            <Route path="/signup" component={CreateUser} />
            <Route exact path="/charts" component={AllCharts} />
            <Route exact path="/chartsclass" component={AllChartsClass} />
          </Switch>
        )}
        {/* <Switch>
            <Route path="/example" component={Example}/>
            <Route path="/alljumps" component={AllJumps} />

          </Switch> */}
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
