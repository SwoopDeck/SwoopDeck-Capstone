import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSingleJump } from "../store/jumps";
import EditJump from "./editjump";
import { me } from "../store/auth";
import { updateJump } from "../store/jumps";
import Sidebar from "./Sidebar";
// import EditItem from "./EditItem";

class SingleJump extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
   this.props.getJump(this.props.user.id, this.props.match.params.jumpId)
  }
  render() {
    let {jump} = this.props
    let singleJump = jump[0] || {}
    return (
      <div>
        <Sidebar />
       <h1>Jump Number: {singleJump.jumpNumber}</h1>
       <div>AIRCRAFT: {singleJump.aircraft}</div>
       <div>EQUIPMENT: {singleJump.equipment}</div>
       <div>EXIT ALTITUDE: {singleJump.exitAltitude}</div>
       <div>FREE FALL TIME: {singleJump.freeFallTime}</div>
       <div>JUMP TYPE: {singleJump.jumpType}</div>
       <div>JUMPERS: {singleJump.jumpers}</div>
       <div>LOCATION: {singleJump.location}</div>
       <div>PULL ALTITUDE: {singleJump.pullAltitude}</div>
       <EditJump/>
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
