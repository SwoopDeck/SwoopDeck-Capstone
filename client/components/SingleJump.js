import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSingleJump } from "../store/jumps";
import { me } from "../store/auth";
import { updateJump } from "../store/jumps";
// import EditItem from "./EditItem";

class SingleJump extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
   this.props.getJump(this.props.user.id, this.props.match.params.jumpId)
  }
  render() {
    console.log(this.props)
    let {jump} = this.props
    console.log(jump)
    let singleJump = jump[0] || {}
    console.log(singleJump)
    return (
      <div>
       <h1>Jump Number: {singleJump.jumpNumber}</h1>
       <div>AIRCRAFT: {singleJump.aircraft}</div>
       <div>EQUIPMENT: {singleJump.equipment}</div>
       <div>EXIT ALTITUDE: {singleJump.exitAltitude}</div>
       <div>FREE FALL TIME: {singleJump.freeFallTime}</div>
       <div>JUMP TYPE: {singleJump.jumpType}</div>
       <div>JUMPERS: {singleJump.jumpers}</div>
       <div>LOCATION: {singleJump.location}</div>
       <div>PULL ALTITUDE: {singleJump.pullAltitude}</div>
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    jump: state.jumps,
    user: state.auth,
  };
};
const mapDispatch = (dispatch) => ({
    getJump: (userId, jumpId) => dispatch(fetchSingleJump(userId, jumpId)),
});

export default connect(mapState, mapDispatch)(SingleJump);
