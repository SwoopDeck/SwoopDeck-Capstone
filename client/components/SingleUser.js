import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { me } from '../store/auth';
import Sidebar from './Sidebar';
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
import {
  Thunk_fetchUser,
  Thunk_fetchUsers,
  Thunk_updateUser,
  Thunk_deleteUser,
} from '../store/allUsers';
// import {
//   Thunk_fetchUser,
//   Thunk_fetchUsers,
//   Thunk_updateUser,
//   Thunk_deleteUser,
// } from '../store/allusers';

/**
 * REACT COMPONENT
 */
class SingleUser extends React.Component {
  componentDidMount() {
    this.props.getSingleUser(this.props.match.params.id);
  }

  render() {
    const { id, firstName, lastName, address, email, licenseNumber, role, emergencyContact, emergencyPhoneNumber} =
      this.props.singleUser;

    return (
      <div className='flex-right'>




<div className="basic-info-group">
          <div className="edit-account-title-container">
            <div className="frame-528">
              <div className="frame-526">
                <p id="titleLog">{firstName} {lastName}</p>
                <div className="view-all-past-skydiving-jump-logs">
                  View user details
                </div>
              </div>
              <div className="frame-527">
              <button id="cancel-btn"
              onClick={() => {
                this.props.getDropzones();
                this.props.history.push(`/users`);
              }}>
                  Go back
                </button>
                <button className="save-btn"
                onClick={() => {
                  this.props.getSingleUser(this.props.match.params.id);
                  this.props.history.push(`/users/edit/${id}`);
                    
                    // this.props.history.push(`/users/${id}`);
                  }
                }>
                  Edit
                </button>
              </div>
            </div>
          </div>
          <div className="rectangle-21"></div>
          <div className="flex-row-1">
            <div className="flex-col-left">
              <div className="first-name manrope-normal-shark-14px">
                FIRST NAME
              </div>

              <input
              className="search-bar border-1px-mystic search"
              type="text"
            name="firstName"
            placeholder={firstName}
            // value={this.state.firstName}
            onChange={this.handleChange}
              />

              <div className="frame-1">
                <div className="frame-2">
                  <div className="email manrope-normal-shark-14px">EMAIL</div>
                </div>
              </div>
              <input
              className="search-bar border-1px-mystic search"
              type="text"
            name="email"
            placeholder={email}
            // value={this.state.email}
            onChange={this.handleChange}
            />
              <div className="frame-2-1">
                <div className="frame-2">
                  <div className="emergency-contact-full-name manrope-normal-shark-14px">
                    EMERGENCY CONTACT (FULL NAME)
                  </div>
                </div>
              </div>
              <input
              className="search-bar border-1px-mystic search"
              type="text"
            name="emergencyContact"
            placeholder={emergencyContact}
            // value={this.state.emergencyContact}
            onChange={this.handleChange}
            />
            </div>




            <div className="flex-col-right">
              <div className="first-name manrope-normal-shark-14px">
                LAST NAME
              </div>

              <input
              className="search-bar border-1px-mystic search"
              type="text"
            name="lastName"
            placeholder={lastName}
            // value={this.state.lastName}
            onChange={this.handleChange}
            />

              <div className="frame-1">
                <div className="frame-2">
                  <div className="email manrope-normal-shark-14px">ADDRESS</div>
                </div>
              </div>
              <input
              className="search-bar border-1px-mystic search"
              type="text"
            name="address"
            placeholder={address}
            // value={this.state.address}
            onChange={this.handleChange}
            />
              <div className="frame-2-1">
                <div className="frame-2">
                  <div className="emergency-contact-full-name manrope-normal-shark-14px">
                    EMERGENCY PHONE NUMBER
                  </div>
                </div>
              </div>
              <input
              className="search-bar border-1px-mystic search"
              type="text"
            name="emergencyPhoneNumber"
            placeholder={emergencyPhoneNumber}
            // value={this.state.emergencyPhoneNumber}
            onChange={this.handleChange}
            />
            </div>

          </div>
          <div className="overlap-group2">
            <div className="uspa-membership manrope-bold-shark-18px">
              USPA MEMBERSHIP
            </div>
            <div className="rectangle-23"></div>
          </div>
          <div className="flex-row-2">
            <div className="flex-col-left">
              <div className="first-name manrope-normal-shark-14px">
                LICENSE NUMBER
              </div>

              <input
              className="search-bar border-1px-mystic search"
              type="text"
            name="licenseNumber"
            placeholder={licenseNumber}
            // value={this.state.licenseNumber}
            onChange={this.handleChange}
            />

              
            </div>




            <div className="flex-col-right">
              <div className="first-name manrope-normal-shark-14px">
                RATINGS
              </div>

              <input
              className="search-bar border-1px-mystic search"
              type="search"
              placeholder="this field needs to be added to the database."/>

              
            </div>

          </div>
        </div>



      {/* //////////////////////////// ORIGINAL FORM BELOW //////////////////////////// */}

        {/* <div key={id}>
          <h2>
            {firstName} {lastName}
          </h2>
          <p>Email: {email} </p>
          <p>Address: {address} </p>
          <p>Role: {role} </p>
          <p>Emergency Contact: {emergencyContact} </p>
          <p>Emergency Phone Number: {emergencyPhoneNumber} </p>
          {role === 'Skydiver' ? <p>UPSA#: {licenseNumber} </p> : <></>}
          <button
            onClick={() => {
              this.props.getSingleUser(this.props.match.params.id);
              this.props.history.push(`/users/edit/${id}`);
              // this.props.getDropzones()
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              this.props.deleteUser(this.props.match.params.id);
              // this.props.getUsers();
              this.props.history.push(`/users`);
            }}
          >
            Delete User
          </button>
          <button
            onClick={() => {
              this.props.getUsers();
              this.props.history.push(`/users`);
            }}
          >
            Go back
          </button>
          <hr />
          <hr />
        </div> */}

        {/* //////////////////////////// ORIGINAL FORM ABOVE //////////////////////////// */}
      </div>
    );
  }
}

// const mapState = (state) => {
//   return {
//     jumpRecords: state.jumpRecords,
//     users: state.auth,
//     dropzones: state.dropzones,
//     loads: state.loads,
//     singleUser: state.users.singleUser,
//   };
// };

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
    editJumpRecord: (jump, userId, jumpId) =>
      dispatch(Thunk_updateJump(jump, userId, jumpId)), //WORKING//
    getJumpRecords: (userId) => dispatch(Thunk_fetchAllJumpRecords(userId)), //WORKING//
    deleteJumpRecord: (userId, jumpId) =>
      dispatch(Thunk_deleteJump(userId, jumpId)), //WOKRING//
    addJumpRecord: (jump, id) => dispatch(Thunk_createJump(jump, id)), //WORKING//
    getSingleJumpRecord: (userId, jumpId) =>
      dispatch(Thunk_fetchSingleJump(userId, jumpId)), //WORKING//

    //////////////BELOW IS FOR DROPZONE//////////////////////////

    editDropzone: (dropzoneId, dropzone) =>
      dispatch(thunk_updateDropzone(dropzoneId, dropzone)), //WOKRING//
    getDropzones: () => dispatch(thunk_fetchAllDropzones()), //WOKRING//
    deleteDropzone: (dropzoneId) => dispatch(thunk_deleteDropzone(dropzoneId)), //WOKRING//
    addDropzone: (DROPZONE) => dispatch(thunk_createDropzone(DROPZONE)), //WORKING//
    getSingleDropzone: (dropzoneId) =>
      dispatch(thunk_fetchSingleDropzone(dropzoneId)), //WORKING//

    /////////////////BELOW IS FOR LOADS/////////////////////////////

    editLoad: (dropzoneId, loadId, LOAD) =>
      dispatch(thunk_updateLoad(dropzoneId, loadId, LOAD)), //WORKING//
    getLoads: (dropzoneId) => dispatch(thunk_fetchAllLoads(dropzoneId)), //WORKING//
    deleteLoad: (dropzoneId, loadId) =>
      dispatch(thunk_deleteLoad(dropzoneId, loadId)), //WORKING//
    addLoad: (LOAD, dropzoneId) => dispatch(thunk_createLoad(LOAD, dropzoneId)), //WORKING//
    getSingleLoad: (dropzoneId, loadId) =>
      dispatch(thunk_fetchSingleLoad(dropzoneId, loadId)), //WORKING//

    /////////////////BELOW IS FOR ADMINS/////////////////////////////

    getSingleUser: (id) => dispatch(Thunk_fetchUser(id)),
    getUsers: () => dispatch(Thunk_fetchUsers()),
    deleteUser: (id) => dispatch(Thunk_deleteUser(id)),
  };
};

export default connect(mapState, mapDispatch)(SingleUser);
