import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { me } from "../store/auth";
import Sidebar from "./Sidebar";
// import EditItem from "./EditItem";
import {
  Thunk_fetchAllJumpRecords,
  Thunk_fetchSingleJump,
  Thunk_updateJump,
  Thunk_deleteJump,
  Thunk_createJump,
} from '../store/jumpRecords';
import {
  thunk_fetchSingleDropzone,
  thunk_updateDropzone,
  thunk_createDropzone,
  thunk_deleteDropzone,
  thunk_fetchAllDropzones,
} from '../store/dropzones.js';
import {
  thunk_fetchAllLoads,
  thunk_createLoad,
  thunk_deleteLoad,
  thunk_fetchSingleLoad,
  thunk_updateLoad,
} from '../store/loads';

/**
 * REACT COMPONENT
 */
class SingleJump extends React.Component {
  constructor() {
    super();
    this.deleteJumpRecord = this.deleteJumpRecord.bind(this);
  }
  componentDidMount() {
    this.props.getSingleJumpRecord(this.props.user.id, this.props.match.params.jumpId);

  }

  deleteJumpRecord (evt){
    this.props.deleteJumpRecord(this.props.user.id, this.props.jumpRecords[0].id)
  }
  render() {
  
    let jumpId = this.props.match.params.jumpId
    let  jump = this.props.jumpRecords;
    let singleJump = jump[0] || {};
    return (
      <div className="flex-right">
      <h1 style={{ marginLeft: "2rem", marginTop: "2rem" }}>Jump type</h1>
<div className="select-jump-type-container">
  <button className="jump-type" style={{border: 'solid 2px #336dff',
color: '#336dff'}}>Belly</button> 
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
      value={singleJump.jumpNumber}
    />
  </div>
  <div className="jump-form-div">
    <label> Location</label>
    <input
      className="jump-info-field"
      type="text"
      name="location"
      value={singleJump.location}
    />
  </div>
  <div className="jump-form-div">
    <label> Aircraft</label>
    <input
      className="jump-info-field"
      type="text"
      name="aircraft"
      value={singleJump.aircraft}
    />
  </div>
  <div className="jump-form-div">
    <label> Equipment</label>
    <input
      className="jump-info-field"
      type="text"
      name="equipment"
      value={singleJump.equipment}
    />
  </div>
  <div className="jump-form-div">
    <label> Exit altitude</label>
    <input
      className="jump-info-field"
      type="text"
      name="exitAltitude"
      value={singleJump.exitAltitude}
    />
  </div>
  <div className="jump-form-div">
    <label> Pull altitude</label>
    <input
      className="jump-info-field"
      type="text"
      name="pullAltitude"
      value={singleJump.pullAltitude}
    />
  </div>
  <div className="jump-form-div">
    <label> FreeFall time</label>
    <input
      className="jump-info-field"
      type="text"
      name="freeFallTime"
      value={singleJump.freeFallTime}
    />
  </div>
  <div className="jump-form-div">
    <label> Jumpers</label>
    <input
      className="jump-info-field"
      type="text"
      name="jumpers"
      value={singleJump.jumpers}
    />
  </div>
  <div className="jump-form-div">
    <label> Description</label>
    <input
      className="jump-info-field"
      type="text"
      name="description"
      value={singleJump.description}
    />
  </div>
  <div></div>
  <Link to="/home"  style={{width: '50%'}}>
  <button className="add-jump-btn">
    Back to logbook
  </button>
  </Link>
  <Link to={`/edit/${singleJump.id}`}  style={{width: '50%'}}>
  <button className="add-jump-btn">
   Edit this Jump
  </button>
  </Link>
  <Link to={`/alljumps`}  style={{width: '50%'}}>
  <button className="add-jump-btn"  onClick={this.deleteJumpRecord}>
   Delete this Jump
  </button>
  </Link>
</form>
{/* <EditJump/> */}
      </div>
    );
  }
}

// const mapState = (state) => {
//   return {
//     jumpRecords: state.jumpRecords,
//     userss: state.auth,
//     dropzones: state.dropzones,
//     loads: state.loads,
//   };
// };

const mapState = (state) => {
  return {
    jumpRecords: state.jumpRecords,
    user: state.auth,
    users: state.users.allUsers,
    dropzones: state.dropzones.allDropzones,
    loads: state.loads,
    singleUser: state.users.singleUser,
    singleDropzone: state.dropzones.singleDropzone
  };
};
const mapDispatch = (dispatch) => {
  return {
    editJumpRecord: (jump, userId, jumpId) =>
      dispatch(Thunk_updateJump(jump, userId, jumpId)), //WORKING//
    getJumpRecords: (userId) => dispatch(Thunk_fetchAllJumpRecords(userId)), //WORKING//
    deleteJumpRecord: (userId, jumpId) =>
      dispatch(Thunk_deleteJump(userId, jumpId)), //WOKRING//
    addJumpRecord: (jump, id) => dispatch(Thunk_createJump(jump, id)), //WORKING//
    getSingleJumpRecord: (userId, jumpId) =>
      dispatch(Thunk_fetchSingleJump(userId, jumpId)), //WORKING//

    ////////ABOVE is for USER TABLE//////BELOW IS FOR DROPZONE//////////////////////////

    editDropzone: (dropzoneId, dropzone) =>
      dispatch(thunk_updateDropzone(dropzoneId, dropzone)), //WOKRING//
    getDropzones: () => dispatch(thunk_fetchAllDropzones()), //WOKRING//
    deleteDropzone: (dropzoneId) => dispatch(thunk_deleteDropzone(dropzoneId)), //WOKRING//
    addDropzone: (DROPZONE) => dispatch(thunk_createDropzone(DROPZONE)), //WORKING//
    getSingleDropzone: (dropzoneId) =>
      dispatch(thunk_fetchSingleDropzone(dropzoneId)), //WORKING//

    /////////ABOVE IS FOR DROPZONE////////BELOW IS FOR LOADS/////////////////////////////

    editLoad: (dropzoneId, loadId, LOAD) =>
      dispatch(thunk_updateLoad(dropzoneId, loadId, LOAD)), //WORKING//
    getLoads: (dropzoneId) => dispatch(thunk_fetchAllLoads(dropzoneId)), //WORKING//
    deleteLoad: (dropzoneId, loadId) =>
      dispatch(thunk_deleteLoad(dropzoneId, loadId)), //WORKING//
    addLoad: (LOAD, dropzoneId) => dispatch(thunk_createLoad(LOAD, dropzoneId)), //WORKING//
    getSingleLoad: (dropzoneId, loadId) =>
      dispatch(thunk_fetchSingleLoad(dropzoneId, loadId)), //WORKING//
  };
};

export default connect(mapState, mapDispatch)(SingleJump);

