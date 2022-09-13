import React, { Component } from "react";
import { connect } from "react-redux";
import { Thunk_fetchSingleJump, Thunk_updateJump } from "../store/jumpRecords";

export class EditJumpRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equipment: "",
      exitAltitude: 14000,
      pullAltitude: 4000,
      freeFallTime: 60,
      jumpers: 1,
      description: "",
      jumpType: "belly",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getSingleJumpRecord(
      this.props.user.id,
      this.props.match.params.jumpId
    );
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
  }

  render() {
    let jump = this.props.jumpRecords[0] || {};
    console.log(this.props.jumpRecords[0]);
    return (
      <div className="flex-right">
        <form>
          <div className="basic-info-group">
            <div className="edit-account-title-container">
              <div className="frame-528">
                <div className="frame-526">
                  <p id="titleLog">Jump Number {jump.jumpNumber}</p>
                  <div className="view-all-past-skydiving-jump-logs">
                    Edit jump details
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
                    Cancel
                  </button>
                  <button
                    className="save-btn"
                    onClick={(evt) => {
                      evt.preventDefault();
                      this.props.editJumpRecord(
                        { ...this.state },
                        this.props.user.id,
                        this.props.match.params.jumpId
                      );
                      this.setState({
                        // jumpNumber: jump.jumpNumber,
                        jumpDate: "",
                        aircraft: "",
                        equipment: "",
                        exitAltitude: 14000,
                        pullAltitude: 4000,
                        freeFallTime: 60,
                        jumpers: "",
                        description: "",
                        jumpType: "",
                      });
                      this.props.history.push("/alljumps");
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
            <div className="rectangle-21"></div>
            <div className="flex-row-1" style={{ marginTop: "6rem" }}>
              <div className="flex-col-left">
                <div className="first-name manrope-normal-shark-14px">
                  LOCATION
                </div>

                <input
                  className="search-bar border-1px-mystic search"
                  type="text"
                  name="location"
                  value={jump.dropzoneName}
                  placeholder={jump.dropzoneName}
                  onChange={this.handleChange}
                />

                <div className="frame-1">
                  <div className="frame-2">
                    <div className="email manrope-normal-shark-14px">
                      AIRCRAFT
                    </div>
                  </div>
                </div>
                <input
                  className="search-bar border-1px-mystic search"
                  type="text"
                  name="aircraft"
                  placeholder={jump.aircraft}
                  value={this.state.aircraft}
                  onChange={this.handleChange}
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
                  placeholder={jump.equipment}
                  value={this.state.equipment}
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
                  style={{ padding: ".5rem" }}
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
                  placeholder={jump.exitAltitude}
                  value={this.state.exitAltitude}
                  onChange={this.handleChange}
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
                  placeholder={jump.pullAltitude}
                  value={this.state.pullAltitude}
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
                  placeholder={jump.freeFallTime}
                  value={this.state.freeFallTime}
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
                  placeholder="(i.e. Front float exit, Worked on docking, Great landing pattern"
                  value={this.state.description}
                  onChange={this.handleChange}
                  style={{ width: "50vw", height: "10vh" }}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

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
      dispatch(Thunk_updateJump(jump, userId, jumpId)),
    getSingleJumpRecord: (userId, jumpId) =>
      dispatch(Thunk_fetchSingleJump(userId, jumpId)),
  };
};

export default connect(mapState, mapDispatch)(EditJumpRecord);

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import {
//   Thunk_fetchAllJumpRecords,
//   Thunk_fetchSingleJump,
//   Thunk_updateJump,
//   Thunk_deleteJump,
//   Thunk_createJump,
// } from '../store/jumpRecords';
// import {
//   thunk_fetchSingleDropzone,
//   thunk_updateDropzone,
//   thunk_createDropzone,
//   thunk_deleteDropzone,
//   thunk_fetchAllDropzones,
// } from '../store/dropzones.js';
// import {
//   thunk_fetchAllLoads,
//   thunk_createLoad,
//   thunk_deleteLoad,
//   thunk_fetchSingleLoad,
//   thunk_updateLoad,
// } from '../store/loads';

// export class EditJumpRecord extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       equipment: "",
//       exitAltitude: 14000,
//       pullAltitude: 4000,
//       freeFallTime: 60,
//       jumpers: 1,
//       description: "",
//       jumpType: "belly",
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   componentDidMount() {
//     this.props.getSingleJumpRecord(this.props.user.id, this.props.match.params.jumpId)
//   }

//   handleChange(evt) {
//     this.setState({
//       [evt.target.name]: evt.target.value,
//     });
//   }

//   handleSubmit(evt) {
//     evt.preventDefault();
//     // this.props.updateUser({ ...this.props.user, ...this.state }) //NEED TO FIND THE updateUser THUNK
//   }

//   render() {

//     let jump = this.props.jumpRecords[0] || {};
// console.log(this.props)
//     return (
//       <div className="flex-right">
//         <form>
//           <div className="basic-info-group">
//             <div className="edit-account-title-container">
//               <div className="frame-528">
//                 <div className="frame-526">
//                   <p id="titleLog">
//                     Jump Number {jump.jumpNumber}
//                   </p>
//                   <div className="view-all-past-skydiving-jump-logs">
//                     Edit jump details
//                   </div>
//                 </div>
//                 <div className="frame-527">
//                   <button
//                     id="cancel-btn"
//                     onClick={() => {
//                       // this.props.getUsers();
//                       this.props.history.push(`/alljumps`);
//                     }}
//                   >
//                     Cancel
//                   </button>
//                   <button className="save-btn"
//                   onClick={(evt) => {
//                             evt.preventDefault();
//                             this.props.editJumpRecord({ ...this.state }, this.props.user.id, this.props.match.params.jumpId);
//                             this.setState({
//                               // jumpNumber: jump.jumpNumber,
//                               jumpDate: "",
//                               aircraft: "",
//                               equipment: "",
//                               exitAltitude: 14000,
//                               pullAltitude: 4000,
//                               freeFallTime: 60,
//                               jumpers: "",
//                               description: "",
//                               jumpType: "",
//                             });
//                             this.props.history.push('/alljumps')
//                           }}>Save</button>
//                 </div>
//               </div>
//             </div>
//             <div className="rectangle-21"></div>
//             <div className="flex-row-1" style={{marginTop: '6rem'}}>
//               <div className="flex-col-left">
//                 <div className="first-name manrope-normal-shark-14px">
//                   LOCATION
//                 </div>

//                 <input
//                   className="search-bar border-1px-mystic search"
//                   type="text"
//                   name="location"
//                   value={jump.dropzoneName}
//                   placeholder={jump.dropzoneName}
//                   onChange={this.handleChange}
//                 />

//                 <div className="frame-1">
//                   <div className="frame-2">
//                     <div className="email manrope-normal-shark-14px">AIRCRAFT</div>
//                   </div>
//                 </div>
//                 <input
//                   className="search-bar border-1px-mystic search"
//                   type="text"
//                   name="aircraft"
//                   placeholder={jump.aircraft}
//                   value={this.state.aircraft}
//                   onChange={this.handleChange}
//                 />
//                 <div className="frame-2-1">
//                   <div className="frame-2">
//                     <div className="emergency-contact-full-name manrope-normal-shark-14px">
//                       EQUIPMENT
//                     </div>
//                   </div>
//                 </div>
//                 <input
//                   className="search-bar border-1px-mystic search"
//                   type="text"
//                   name="equipment"
//                   placeholder={jump.equipment}
//                   value={this.state.equipment}
//                   onChange={this.handleChange}
//                 />
//                 <div className="frame-2-1">
//                   <div className="frame-2">
//                     <div className="emergency-contact-full-name manrope-normal-shark-14px">
//                       JUMP TYPE
//                     </div>
//                   </div>
//                 </div>
//                 <select
//                   className="search-bar border-1px-mystic search"
//                   name="jumpType"
//                   onChange={this.handleChange}
//                   style={{ padding: '.5rem' }}
//                 >
//                   <option name="jumpType" value="belly">
//                     Belly
//                   </option>
//                   <option name="jumpType" value="angle">
//                     Angle
//                   </option>
//                   <option name="jumpType" value="freefly">
//                     FreeFly
//                   </option>
//                   <option name="jumpType" value="head up">
//                     Head Up
//                   </option>
//                   <option name="jumpType" value="head down">
//                     Head Down
//                   </option>
//                   <option name="jumpType" value="formation">
//                     Formation
//                   </option>
//                   <option name="jumpType" value="high altitude">
//                     High Altitude
//                   </option>
//                   <option name="jumpType" value="high pull">
//                     High Pull
//                   </option>
//                   <option name="jumpType" value="crw">
//                     CRW
//                   </option>
//                   <option name="jumpType" value="aff">
//                     AFF
//                   </option>
//                 </select>

//               </div>

//               <div className="flex-col-right">
//                 <div className="first-name manrope-normal-shark-14px">
//                   EXIT ALTITUDE
//                 </div>

//                 <input
//                   className="search-bar border-1px-mystic search"
//                   type="text"
//                   name="exitAltitude"
//                   placeholder={jump.exitAltitude}
//                   value={this.state.exitAltitude}
//                   onChange={this.handleChange}
//                 />

//                 <div className="frame-1">
//                   <div className="frame-2">
//                     <div className="email manrope-normal-shark-14px">
//                       PULL ALTITUDE
//                     </div>
//                   </div>
//                 </div>
//                 <input
//                   className="search-bar border-1px-mystic search"
//                   type="text"
//                   name="pullAltitude"
//                   placeholder={jump.pullAltitude}
//                   value={this.state.pullAltitude}
//                   onChange={this.handleChange}
//                 />
//                 <div className="frame-2-1">
//                   <div className="frame-2">
//                     <div className="emergency-contact-full-name manrope-normal-shark-14px">
//                       FREEFALL TIME
//                     </div>
//                   </div>
//                 </div>
//                 <input
//                   className="search-bar border-1px-mystic search"
//                   type="text"
//                   name="freeFallTime"
//                   placeholder={jump.freeFallTime}
//                   value={this.state.freeFallTime}
//                   onChange={this.handleChange}
//                 />
//               </div>
//             </div>
//             <div className="overlap-group2">
//               <div className="uspa-membership manrope-bold-shark-18px">
//                 Jump Description
//               </div>
//               <div className="rectangle-23"></div>
//             </div>
//             <div className="flex-row-2">
//               <div className="flex-col-left">
//                 <div className="first-name manrope-normal-shark-14px">
//                   DESCRIPTION
//                 </div>

//                 <input
//                   className="search-bar border-1px-mystic search"
//                   type="text"
//                   name="description"
//                   placeholder='(i.e. Front float exit, Worked on docking, Great landing pattern'
//                   value={this.state.description}
//                   onChange={this.handleChange}
//                   style={{width: '50vw',
//                     height: '10vh'}}
//                 />
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// const mapState = (state) => {
//   return {
//     jumpRecords: state.jumpRecords,
//     user: state.auth,
//     users: state.users.allUsers,
//     dropzones: state.dropzones.allDropzones,
//     loads: state.loads,
//     singleUser: state.users.singleUser,
//     singleDropzone: state.dropzones.singleDropzone
//   };
// };
// const mapDispatch = (dispatch) => {
//   return {
//     editJumpRecord: (jump, userId, jumpId) =>
//       dispatch(Thunk_updateJump(jump, userId, jumpId)), //WORKING//
//     getJumpRecords: (userId) => dispatch(Thunk_fetchAllJumpRecords(userId)), //WORKING//
//     deleteJumpRecord: (userId, jumpId) =>
//       dispatch(Thunk_deleteJump(userId, jumpId)), //WOKRING//
//     addJumpRecord: (jump, id) => dispatch(Thunk_createJump(jump, id)), //WORKING//
//     getSingleJumpRecord: (userId, jumpId) =>
//       dispatch(Thunk_fetchSingleJump(userId, jumpId)), //WORKING//

//     ////////ABOVE is for USER TABLE//////BELOW IS FOR DROPZONE//////////////////////////

//     editDropzone: (dropzoneId, dropzone) =>
//       dispatch(thunk_updateDropzone(dropzoneId, dropzone)), //WOKRING//
//     getDropzones: () => dispatch(thunk_fetchAllDropzones()), //WOKRING//
//     deleteDropzone: (dropzoneId) => dispatch(thunk_deleteDropzone(dropzoneId)), //WOKRING//
//     addDropzone: (DROPZONE) => dispatch(thunk_createDropzone(DROPZONE)), //WORKING//
//     getSingleDropzone: (dropzoneId) =>
//       dispatch(thunk_fetchSingleDropzone(dropzoneId)), //WORKING//

//     /////////ABOVE IS FOR DROPZONE////////BELOW IS FOR LOADS/////////////////////////////

//     editLoad: (dropzoneId, loadId, LOAD) =>
//       dispatch(thunk_updateLoad(dropzoneId, loadId, LOAD)), //WORKING//
//     getLoads: (dropzoneId) => dispatch(thunk_fetchAllLoads(dropzoneId)), //WORKING//
//     deleteLoad: (dropzoneId, loadId) =>
//       dispatch(thunk_deleteLoad(dropzoneId, loadId)), //WORKING//
//     addLoad: (LOAD, dropzoneId) => dispatch(thunk_createLoad(LOAD, dropzoneId)), //WORKING//
//     getSingleLoad: (dropzoneId, loadId) =>
//       dispatch(thunk_fetchSingleLoad(dropzoneId, loadId)), //WORKING//
//   };
// };

// export default connect(mapState, mapDispatch)(EditJumpRecord);
