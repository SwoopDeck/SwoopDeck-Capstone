import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
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
import { Thunk_fetchUser, Thunk_updateUser } from "../store/allusers";

export class EditJump extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      //   password: '',
      address: "",
      licenseNumber: "",
      emergencyContact: "",
      emergencyPhoneNumber: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.getSingleUser(this.props.match.params.id);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  render() {
    // let jump = this.props.jump[0] || {};
    const {
      id,
      firstName,
      lastName,
      address,
      email,
      licenseNumber,
      emergencyContact,
      emergencyPhoneNumber,
    } = this.props.singleUser;

    console.log(this.props.singleUser);

    return (
      <div className="flex-right">
        <form>
          <div className="basic-info-group">
            <div className="edit-account-title-container">
              <div className="frame-528">
                <div className="frame-526">
                  <p id="titleLog">
                    {firstName} {lastName}
                  </p>
                  <div className="view-all-past-skydiving-jump-logs">
                    Edit user account
                  </div>
                </div>
                <div className="frame-527">
                  <button
                    id="cancel-btn"
                    onClick={() => {
                      // this.props.getUsers();
                      this.props.history.push(`/users`);
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    className="save-btn"
                    onClick={(evt) => {
                      evt.preventDefault();
                      this.props.editUser(id, { ...this.state });
                      this.props.getSingleUser(this.props.match.params.id);
                      this.setState({
                        firstName: "",
                        lastName: "",
                        email: "",
                        // password: '',
                        address: "",
                        licenseNumber: "",
                        emergencyContact: "",
                        emergencyPhoneNumber: null,
                      });

                      this.props.history.push(`/users/${id}`);
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
                <div className="first-name manrope-normal-shark-14px">
                  FIRST NAME
                </div>

                <input
                  className="search-bar border-1px-mystic search"
                  type="text"
                  name="firstName"
                  placeholder={firstName}
                  value={this.state.firstName}
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
                  value={this.state.email}
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
                  value={this.state.emergencyContact}
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
                  value={this.state.lastName}
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
                  value={this.state.emergencyPhoneNumber}
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
                  value={this.state.licenseNumber}
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
                  placeholder="this field needs to be added to the database."
                />
              </div>
            </div>
          </div>
        </form>

        {/* //////////////////////////// ORIGINAL FORM BELOW //////////////////////////// */}

        {/* <div>Current:</div>
        <div>FIRST NAME: {firstName}</div>
        <div>LAST NAME: {lastName}</div>
        <div>ADDRESS: {address}</div>
        <div>LICENSE NUMBER: {licenseNumber}</div>
        <div>EMERGENCY CONTACT: {emergencyContact}</div>
        <div>EMERGENCY PHONE NUMBER: {emergencyPhoneNumber}</div>
        
        <h1>Edit User</h1>
            <form id="edit-user">
          <div>FIRST NAME:</div>
          <input
            type="text"
            name="firstName"
            placeholder={firstName}
            value={this.state.firstName}
            onChange={this.handleChange}
            style={{ margin: '25px' }}
          />
           <div>LAST NAME:</div>
          <input
            type="text"
            name="lastName"
            placeholder={lastName}
            value={this.state.lastName}
            onChange={this.handleChange}
            style={{ margin: '25px' }}
          />
          <div>ADDRESS:</div>
          <input
            type="text"
            name="address"
            placeholder={address}
            value={this.state.address}
            onChange={this.handleChange}
            style={{ margin: '25px' }}
          />
           <div>EMAIL:</div>
          <input
            type="text"
            name="email"
            placeholder={email}
            value={this.state.email}
            onChange={this.handleChange}
            style={{ margin: '25px' }}
          />
          <div>LICENSE NUMBER:</div>
          <input
            type="text"
            name="licenseNumber"
            placeholder={licenseNumber}
            value={this.state.licenseNumber}
            onChange={this.handleChange}
            style={{ margin: '25px' }}
          />
          <div>EMERGENCY CONTACT:</div>
          <input
            type="text"
            name="emergencyContact"
            placeholder={emergencyContact}
            value={this.state.emergencyContact}
            onChange={this.handleChange}
            style={{ margin: '25px' }}
          />
          <div>EMERGENCY PHONE NUMBER:</div>
          <input
            type="text"
            name="emergencyPhoneNumber"
            placeholder={emergencyPhoneNumber}
            value={this.state.emergencyPhoneNumber}
            onChange={this.handleChange}
            style={{ margin: '25px' }}
          />
          <button
            onClick={(evt) => {
              evt.preventDefault();
              this.props.editUser(id, { ...this.state });
              this.props.getSingleUser(this.props.match.params.id)
              this.setState({
                firstName: '',
                lastName: '',
                email: '',
                // password: '',
                address: '',
                licenseNumber: '',
                emergencyContact: '',
                emergencyPhoneNumber: null,
              });
                
                this.props.history.push(`/users/${id}`);
              }
            }
          >EDIT USER PROFILE</button>
        </form>  */}

        {/* //////////////////////////// ORIGINAL FORM ABOVE //////////////////////////// */}
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

    ////////////////////ABOVE IS FOR LOADS///////////BELOW IS FOR USER/////////////

    getSingleUser: (id) => dispatch(Thunk_fetchUser(id)),
    editUser: (userId, userData) =>
      dispatch(Thunk_updateUser(userId, userData)),
  };
};

export default connect(mapState, mapDispatch)(EditJump);
