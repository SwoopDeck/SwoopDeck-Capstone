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
} from "../store/jumpRecords";
import {
  thunk_fetchSingleDropzone,
  thunk_updateDropzone,
  thunk_createDropzone,
  thunk_deleteDropzone,
  thunk_fetchAllDropzones,
} from "../store/dropzones.js";
import {
  thunk_fetchAllLoads,
  thunk_createLoad,
  thunk_deleteLoad,
  thunk_fetchSingleLoad,
  thunk_updateLoad,
} from "../store/loads";

/**
 * REACT COMPONENT
 */
class SingleJump extends React.Component {
  constructor() {
    super();
    this.deleteJumpRecord = this.deleteJumpRecord.bind(this);
  }
  componentDidMount() {
    this.props.getSingleJumpRecord(
      this.props.user.id,
      this.props.match.params.jumpId
    );
  }

  deleteJumpRecord(evt) {
    this.props.deleteJumpRecord(
      this.props.user.id,
      this.props.jumpRecords[0].id
    );
  }
  render() {
    let jumpId = this.props.match.params.jumpId;
    let jump = this.props.jumpRecords;
    let singleJump = jump[0] || {};

    return (
      <div className="flex-right">
        <form>
          <div className="basic-info-group">
            <div className="edit-account-title-container">
              <div className="frame-528">
                <div className="frame-526">
                  <p id="titleLog">
                    {/* {firstName} {lastName} */}
                    Jump Number {singleJump.jumpNumber}
                  </p>
                  <div className="view-all-past-skydiving-jump-logs">
                    View jump details
                  </div>
                </div>
                <div className="frame-527">
                  <button
                    id="cancel-btn"
                    onClick={() => {
                      // this.props.getUsers();
                      this.props.history.push(`/alljumps`);
                    }}
                  >
                    Go Back
                  </button>
                  <Link to={`/edit/${singleJump.id}`}>
                  <button className="save-btn">Edit</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="rectangle-21"></div>
            <div className="flex-row-1" style={{marginTop: '6rem'}}>
              <div className="flex-col-left">
                <div className="first-name manrope-normal-shark-14px">
                  LOCATION
                </div>

                <input
                  className="search-bar border-1px-mystic search"
                  type="text"
                  name="location"
                  value={singleJump.location}
                  placeholder={singleJump.location}
                  // onChange={this.handleChange}
                />

                <div className="frame-1">
                  <div className="frame-2">
                    <div className="email manrope-normal-shark-14px">AIRCRAFT</div>
                  </div>
                </div>
                <input
                  className="search-bar border-1px-mystic search"
                  type="text"
                  name="aircraft"
                  placeholder={singleJump.aircraft}
                  value={singleJump.aircraft}
                  // onChange={this.handleChange}
                />
                <div className="frame-2-1">
                  <div className="frame-2">
                    <div className="emergency-contact-full-name manrope-normal-shark-14px">
                      EQUIPMENT
                    </div>
                  </div>
                </div>
                <input
                  className="search-bar border-1px-mystic search"
                  type="text"
                  name="equipment"
                  placeholder={singleJump.equipment}
                  value={singleJump.equipment}
                  // onChange={this.handleChange}
                />
                <div className="frame-2-1">
                  <div className="frame-2">
                    <div className="emergency-contact-full-name manrope-normal-shark-14px">
                      JUMP TYPE
                    </div>
                  </div>
                </div>
                <select
                  className="search-bar border-1px-mystic search"
                  name="jumpType"
                  // onChange={this.handleChange}
                  style={{ padding: '.5rem' }}
                >
                  <option name="jumpType" value="belly">
                    Belly
                  </option>
                  <option name="jumpType" value="angle">
                    Angle
                  </option>
                  <option name="jumpType" value="freefly">
                    FreeFly
                  </option>
                  <option name="jumpType" value="head up">
                    Head Up
                  </option>
                  <option name="jumpType" value="head down">
                    Head Down
                  </option>
                  <option name="jumpType" value="formation">
                    Formation
                  </option>
                  <option name="jumpType" value="high altitude">
                    High Altitude
                  </option>
                  <option name="jumpType" value="high pull">
                    High Pull
                  </option>
                  <option name="jumpType" value="crw">
                    CRW
                  </option>
                  <option name="jumpType" value="aff">
                    AFF
                  </option>
                </select>


              </div>

              <div className="flex-col-right">
                <div className="first-name manrope-normal-shark-14px">
                  EXIT ALTITUDE
                </div>

                <input
                  className="search-bar border-1px-mystic search"
                  type="text"
                  name="exitAltitude"
                  placeholder={singleJump.exitAltitude}
                  value={singleJump.exitAltitude}
                  // onChange={this.handleChange}
                />

                <div className="frame-1">
                  <div className="frame-2">
                    <div className="email manrope-normal-shark-14px">
                      PULL ALTITUDE
                    </div>
                  </div>
                </div>
                <input
                  className="search-bar border-1px-mystic search"
                  type="text"
                  name="pullAltitude"
                  placeholder={singleJump.pullAltitude}
                  value={singleJump.pullAltitude}
                  onChange={this.handleChange}
                />
                <div className="frame-2-1">
                  <div className="frame-2">
                    <div className="emergency-contact-full-name manrope-normal-shark-14px">
                      FREEFALL TIME
                    </div>
                  </div>
                </div>
                <input
                  className="search-bar border-1px-mystic search"
                  type="text"
                  name="freeFallTime"
                  placeholder={singleJump}
                  value={singleJump.freeFallTime}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="overlap-group2">
              <div className="uspa-membership manrope-bold-shark-18px">
                Jump Description
              </div>
              <div className="rectangle-23"></div>
            </div>
            <div className="flex-row-2">
              <div className="flex-col-left">
                <div className="first-name manrope-normal-shark-14px">
                  DESCRIPTION
                </div>

                <input
                  className="search-bar border-1px-mystic search"
                  type="text"
                  name="description"
                  placeholder='(i.e. Front float exit, Worked on docking, Great landing pattern'
                  value={singleJump.description}
                  onChange={this.handleChange}
                  style={{width: '50vw',
                    height: '10vh'}}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      
      
      
      
  //     <div className="flex-right">
  //       <h1 style={{ marginLeft: "2rem", marginTop: "2rem" }}>Jump type</h1>
  //       <div className="select-jump-type-container">
  //         <button
  //           className="jump-type"
  //           style={{ border: "solid 2px #336dff", color: "#336dff" }}
  //         >
  //           Belly
  //         </button>
  //         <button className="jump-type">Angle</button>
  //         <button className="jump-type">Head up</button>
  //         <button className="jump-type">Head down</button>
  //         <button className="jump-type">Formation</button>
  //         <button className="jump-type">FreeFly</button>
  //         <button className="jump-type">High altitude</button>
  //         <button className="jump-type">AFF</button>
  //         <button className="jump-type">Balloon</button>
  //         <button className="jump-type">Heli</button>
  //         <button className="jump-type">High pull</button>
  //         <button className="jump-type">CRW</button>
  //       </div>

  //       <form id="jump-form-container">
  //         {/* <div>JUMP NUMBER:
  //             </div> */}
  //         <div className="jump-form-div">
  //           <label> Jump number</label>
  //           <input
  //             className="jump-info-field"
  //             type="text"
  //             name="jumpNumber"
  //             value={singleJump.jumpNumber}
  //           />
  //         </div>
  //         <div className="jump-form-div">
  //           <label> Location</label>
  //           <input
  //             className="jump-info-field"
  //             type="text"
  //             name="location"
  //             value={singleJump.location}
  //           />
  //         </div>
  //         <div className="jump-form-div">
  //           <label> Aircraft</label>
  //           <input
  //             className="jump-info-field"
  //             type="text"
  //             name="aircraft"
  //             value={singleJump.aircraft}
  //           />
  //         </div>
  //         <div className="jump-form-div">
  //           <label> Equipment</label>
  //           <input
  //             className="jump-info-field"
  //             type="text"
  //             name="equipment"
  //             value={singleJump.equipment}
  //           />
  //         </div>
  //         <div className="jump-form-div">
  //           <label> Exit altitude</label>
  //           <input
  //             className="jump-info-field"
  //             type="text"
  //             name="exitAltitude"
  //             value={singleJump.exitAltitude}
  //           />
  //         </div>
  //         <div className="jump-form-div">
  //           <label> Pull altitude</label>
  //           <input
  //             className="jump-info-field"
  //             type="text"
  //             name="pullAltitude"
  //             value={singleJump.pullAltitude}
  //           />
  //         </div>
  //         <div className="jump-form-div">
  //           <label> FreeFall time</label>
  //           <input
  //             className="jump-info-field"
  //             type="text"
  //             name="freeFallTime"
  //             value={singleJump.freeFallTime}
  //           />
  //         </div>
  //         <div className="jump-form-div">
  //           <label> Jumpers</label>
  //           <input
  //             className="jump-info-field"
  //             type="text"
  //             name="jumpers"
  //             value={singleJump.jumpers}
  //           />
  //         </div>
  //         <div className="jump-form-div">
  //           <label> Description</label>
  //           <input
  //             className="jump-info-field"
  //             type="text"
  //             name="description"
  //             value={singleJump.description}
  //           />
  //         </div>
  //         <div></div>
  //         <Link to="/home" style={{ width: "50%" }}>
  //           <button className="add-jump-btn">Back to logbook</button>
  //         </Link>
  //         {/* <Link to={`/edit/${singleJump.id}`}  style={{width: '50%'}}>
  // <button className="add-jump-btn">
  //  Edit this Jump
  // </button>
  // </Link> */}
  //         <Link to={`/alljumps`} style={{ width: "50%" }}>
  //           <button className="add-jump-btn" onClick={this.deleteJumpRecord}>
  //             Delete this Jump
  //           </button>
  //         </Link>
  //       </form>
  //       {/* <EditJump/> */}
  //     </div>
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
    singleDropzone: state.dropzones.singleDropzone,
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
