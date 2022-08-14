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
    this.props.getJump(this.props.user.id, this.props.match.params.jumpId);
  }
  render() {
    let { jump } = this.props;
    let singleJump = jump[0] || {};
    return (
      <div className="flex-right">
        <h1 style={{ marginLeft: "2rem", marginTop: "2rem" }}>Jump type</h1>
        <div className="select-jump-type-container">
          <button className="jump-type">Belly</button>
          <button className="jump-type">Angle</button>
          <button className="jump-type">Head up</button>
          <button className="jump-type">Head down</button>
          <button className="jump-type">Formation</button>
          <button className="jump-type">FreeFly</button>
          <button className="jump-type">High altitude</button>
          <button className="jump-type">AFF</button>
          <button className="jump-type">Balloon</button>
          <button className="jump-type">Heli</button>
          <button className="jump-type">High pull</button>
          <button className="jump-type">CRW</button>
        </div>

        <form id="jump-form-container">
          {/* <div>JUMP NUMBER:
          </div> */}
          <div className="jump-form-div">
            <label> Jump number</label>
            <input
              className="jump-info-field"
              type="text"
              name="jumpNumber"
              placeholder={singleJump.jumpNumber}
            />
          </div>
          <div className="jump-form-div">
            <label> Location</label>
            <input
              className="jump-info-field"
              type="text"
              name="location"
              placeholder={singleJump.location}
            />
          </div>
          <div className="jump-form-div">
            <label> Aircraft</label>
            <input
              className="jump-info-field"
              type="text"
              name="aircraft"
              placeholder={singleJump.aircraft}
            />
          </div>
          <div className="jump-form-div">
            <label> Equipment</label>
            <input
              className="jump-info-field"
              type="text"
              name="equipment"
              placeholder={singleJump.equipment}
            />
          </div>
          <div className="jump-form-div">
            <label> Exit altitude</label>
            <input
              className="jump-info-field"
              type="text"
              name="exitAltitude"
              placeholder={singleJump.exitAltitude}
            />
          </div>
          <div className="jump-form-div">
            <label> Pull altitude</label>
            <input
              className="jump-info-field"
              type="text"
              name="pullAltitude"
              placeholder={singleJump.pullAltitude}
            />
          </div>
          <div className="jump-form-div">
            <label> FreeFall time</label>
            <input
              className="jump-info-field"
              type="text"
              name="freeFallTime"
              placeholder={singleJump.freeFallTime}
            />
          </div>
          <div className="jump-form-div">
            <label> Jumpers</label>
            <input
              className="jump-info-field"
              type="text"
              name="jumpers"
              placeholder={singleJump.jumpers}
            />
          </div>
          <div className="jump-form-div">
            <label> Description</label>
            <input
              className="jump-info-field"
              type="text"
              name="description"
              placeholder={singleJump.description}
            />
          </div>
          <div></div>
          {/* <button className="add-jump-btn">
            <Link to="/alljumps">Go back</Link>
          </button> */}
        </form>
        {/* <EditJump/> */}
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
