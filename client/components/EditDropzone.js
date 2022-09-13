import React, { Component } from "react";
import { connect } from "react-redux";
import {
  thunk_fetchSingleDropzone,
  thunk_updateDropzone,
  thunk_fetchAllDropzones,
} from "../store/dropzones.js";

export class EditDropzone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      phoneNumber: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.getSingleDropzone(this.props.match.params.id);
    this.props.getDropzones() || [];
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  render() {
    const { id, name, address, phoneNumber } = this.props.singleDropzone;

    console.log(this.props.singleDropzone);

    return (
      <div className="flex-right">
        <form>
          <div className="basic-info-group">
            <div className="edit-account-title-container">
              <div className="frame-528">
                <div className="frame-526">
                  <p id="titleLog">{name}</p>
                  <div className="view-all-past-skydiving-jump-logs">
                    Edit dropzone account
                  </div>
                </div>
                <div className="frame-527">
                  <button
                    id="cancel-btn"
                    onClick={() => {
                      this.props.getDropzones();
                      this.props.history.push(`/dropzones`);
                    }}
                  >
                    Cancel
                  </button>

                  <button
                    className="save-btn"
                    onClick={(evt) => {
                      evt.preventDefault();
                      this.props.editDropzone(id, { ...this.state });
                      this.props.getSingleDropzone(this.props.match.params.id);
                      this.setState({
                        name: "",
                        address: "",
                        email: "",
                        phoneNumber: "",
                      });

                      this.props.history.push(`/dropzones/${id}`);
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
            <div className="rectangle-21"></div>
            <div className="flex-row-1">
              <div className="flex-col-left">
                <div className="first-name manrope-normal-shark-14px">NAME</div>

                <input
                  className="search-bar border-1px-mystic search"
                  type="text"
                  name="name"
                  placeholder={name}
                  value={this.state.name}
                  onChange={this.handleChange}
                />

                <div className="frame-1">
                  <div className="frame-2">
                    <div className="email manrope-normal-shark-14px">
                      ADDRESS
                    </div>
                  </div>
                </div>
                <input
                  className="search-bar border-1px-mystic search"
                  type="text"
                  name="address"
                  placeholder={address}
                  value={this.state.address}
                  onChange={this.handleChange}
                />
                <input
                  className="search-bar border-1px-mystic search"
                  style={{ margin: "1rem 0" }}
                  type="text"
                  placeholder="State"
                />
                <input
                  className="search-bar border-1px-mystic search"
                  type="text"
                  placeholder="Zip Code"
                />
              </div>

              <div className="flex-col-right">
                <div className="first-name manrope-normal-shark-14px">
                  PHONE NUMBER
                </div>

                <input
                  className="search-bar border-1px-mystic search"
                  type="text"
                  name="phoneNumber"
                  placeholder={phoneNumber}
                  value={this.state.phoneNumber}
                  onChange={this.handleChange}
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
    users: state.users.allUsers,
    dropzones: state.dropzones.allDropzones,
    loads: state.loads,
    singleUser: state.users.singleUser,
    singleDropzone: state.dropzones.singleDropzone,
  };
};

const mapDispatch = (dispatch) => {
  return {
    editDropzone: (dropzoneId, dropzone) =>
      dispatch(thunk_updateDropzone(dropzoneId, dropzone)),
    getDropzones: () => dispatch(thunk_fetchAllDropzones()),
    getSingleDropzone: (dropzoneId) =>
      dispatch(thunk_fetchSingleDropzone(dropzoneId)),
  };
};

export default connect(mapState, mapDispatch)(EditDropzone);

// import React, { Component } from "react";
// import { withRouter } from 'react-router'
// import { connect } from "react-redux";
// import { Link, useHistory } from "react-router-dom";
// import {
//   Thunk_fetchAllJumpRecords,
//   Thunk_fetchSingleJump,
//   Thunk_updateJump,
//   Thunk_deleteJump,
//   Thunk_createJump,
// } from "../store/jumpRecords";
// import {
//   thunk_fetchSingleDropzone,
//   thunk_updateDropzone,
//   thunk_createDropzone,
//   thunk_deleteDropzone,
//   thunk_fetchAllDropzones,
// } from "../store/dropzones.js";
// import {
//   thunk_fetchAllLoads,
//   thunk_createLoad,
//   thunk_deleteLoad,
//   thunk_fetchSingleLoad,
//   thunk_updateLoad,
// } from "../store/loads";
// import { Thunk_fetchUser, Thunk_updateUser } from "../store/allUsers";

// export class EditDropzone extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       address: "",
//       phoneNumber: "",
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   componentDidMount() {
//     this.props.getSingleDropzone(this.props.match.params.id);
//     this.props.getDropzones() || [];
//   }

//   handleChange(evt) {
//     this.setState({
//       [evt.target.name]: evt.target.value,
//     });
//   }

//   render() {
//     const { id, name, address, phoneNumber } = this.props.singleDropzone;

//     console.log(this.props.singleDropzone);

//     return (
//       <div className="flex-right">
//         <form>
//           <div className="basic-info-group">
//             <div className="edit-account-title-container">
//               <div className="frame-528">
//                 <div className="frame-526">
//                   <p id="titleLog">{name}</p>
//                   <div className="view-all-past-skydiving-jump-logs">
//                     Edit dropzone account
//                   </div>
//                 </div>
//                 <div className="frame-527">

//                   <button id="cancel-btn"
//                   onClick={() => {
//                     this.props.getDropzones();
//                     this.props.history.push(`/dropzones`)}}>Cancel</button>

//                   <button className="save-btn"
//                   onClick={(evt) => {
//                     evt.preventDefault();
//                     this.props.editDropzone(id, { ...this.state });
//                     this.props.getSingleDropzone(this.props.match.params.id);
//                     this.setState({
//                       name: "",
//                       address: "",
//                       email: "",
//                       phoneNumber: "",
//                     });

//                     this.props.history.push(`/dropzones/${id}`);
//                   }}>Save</button>
//                 </div>
//               </div>
//             </div>
//             <div className="rectangle-21"></div>
//             <div className="flex-row-1">
//               <div className="flex-col-left">
//                 <div className="first-name manrope-normal-shark-14px">NAME</div>

//                 <input
//                   className="search-bar border-1px-mystic search"
//                   type="text"
//                   name="name"
//                   placeholder={name}
//                   value={this.state.name}
//                   onChange={this.handleChange}
//                 />

//                 <div className="frame-1">
//                   <div className="frame-2">
//                     <div className="email manrope-normal-shark-14px">
//                       ADDRESS
//                     </div>
//                   </div>
//                 </div>
//                 <input
//                   className="search-bar border-1px-mystic search"
//                   type="text"
//                   name="address"
//                   placeholder={address}
//                   value={this.state.address}
//                   onChange={this.handleChange}
//                 />
//                 <input
//                   className="search-bar border-1px-mystic search"
//                   style={{margin: '1rem 0'}}
//                   type="text"
//                   placeholder="State"
//                 />
//                 <input
//                   className="search-bar border-1px-mystic search"
//                   type="text"
//                   placeholder="Zip Code"
//                 />
//               </div>

//               <div className="flex-col-right">
//                 <div className="first-name manrope-normal-shark-14px">
//                   PHONE NUMBER
//                 </div>

//                 <input
//                   className="search-bar border-1px-mystic search"
//                   type="text"
//                   name="phoneNumber"
//                   placeholder={phoneNumber}
//                   value={this.state.phoneNumber}
//                   onChange={this.handleChange}
//                 />

//               </div>
//             </div>
//           </div>
//         </form>

// {/* //////////////////////////// ORIGINAL FORM BELOW //////////////////////////// */}

//         {/* <div>Current:</div>
//         <div>NAME: {name}</div>
//         <div>ADDRESS: {address}</div>
//         <div>PHONE NUMBER: {phoneNumber}</div>

//         <h1>Edit User</h1>
//         <form id="edit-user">
//           <div>NAME:</div>
//           <input
//             type="text"
//             name="name"
//             placeholder={name}
//             value={this.state.name}
//             onChange={this.handleChange}
//             style={{ margin: "25px" }}
//           />
//           <div>ADDRESS:</div>
//           <input
//             type="text"
//             name="address"
//             placeholder={address}
//             value={this.state.address}
//             onChange={this.handleChange}
//             style={{ margin: "25px" }}
//           />
//           <div>PHONE NUMBER:</div>
//           <input
//             type="text"
//             name="phoneNumber"
//             placeholder={phoneNumber}
//             value={this.state.phoneNumber}
//             onChange={this.handleChange}
//             style={{ margin: "25px" }}
//           />

//           <button
//             onClick={(evt) => {
//               evt.preventDefault();
//               this.props.editDropzone(id, { ...this.state });
//               this.props.getSingleDropzone(this.props.match.params.id);
//               this.setState({
//                 name: "",
//                 address: "",
//                 email: "",
//               });

//               this.props.history.push(`/dropzones/${id}`);
//             }}
//           >
//             EDIT DROPZONE PROFILE
//           </button>
//         </form> */}

//         {/* //////////////////////////// ORIGINAL FORM ABOVE //////////////////////////// */}
//       </div>
//     );
//   }
// }

// // const mapState = (state) => {
// //   return {
// //     jumpRecords: state.jumpRecords,
// //     userss: state.auth,
// //     dropzones: state.dropzones,
// //     loads: state.loads,
// //   };
// // };

// const mapState = (state) => {
//   return {
//     jumpRecords: state.jumpRecords,
//     users: state.users.allUsers,
//     dropzones: state.dropzones.allDropzones,
//     loads: state.loads,
//     singleUser: state.users.singleUser,
//     singleDropzone: state.dropzones.singleDropzone,
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

//     ////////////////////ABOVE IS FOR LOADS///////////BELOW IS FOR USER/////////////

//     getSingleUser: (id) => dispatch(Thunk_fetchUser(id)),
//     editUser: (userId, userData) =>
//       dispatch(Thunk_updateUser(userId, userData)),
//   };
// };

// export default connect(mapState, mapDispatch)(EditDropzone);
