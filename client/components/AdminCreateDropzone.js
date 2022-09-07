import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
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
  Thunk_updateUser,
  createUser,
} from '../store/allusers';

export class AdminCreateDropzone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      phoneNumber: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // this.props.getSingleUser(this.props.match.params.id);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
    // console.log(evt.target.name);
    // console.log(evt.target.value);
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
                  <p id="titleLog">Add New Dropzone</p>
                  <div className="view-all-past-skydiving-jump-logs">
                    New dropzone details
                  </div>
                </div>
                <div className="frame-527">
                  <button
                    id="cancel-btn"
                    onClick={() => {
                      // this.props.getUsers();
                      this.props.history.push(`/dropzones`);
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    className="save-btn"
                    onClick={(evt) => {
                      evt.preventDefault();
                      //   console.log(this.state);
                      this.props.addDropzone({ ...this.state });
                      this.props.getDropzones();
                      this.setState({
                        name: '',
                        address: '',
                        phoneNumber: '',
                      });

                      this.props.history.push(`/dropzones`);
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
            <div className="rectangle-21"></div>
            <div className="flex-row-1">
              <div className="flex-col-left" id="add-user-flex-left-id">
                <div className="first-name manrope-normal-shark-14px">
                  Facility Name
                </div>

                <input
                  className="search-bar border-1px-mystic search"
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />

                <div className="frame-1">
                  <div className="frame-2">
                    <div
                      className="email manrope-normal-shark-14px"
                      style={{ width: '110px' }}
                    >
                      PHONE NUMBER
                    </div>
                  </div>
                </div>
                <input
                  className="search-bar border-1px-mystic search"
                  type="text"
                  name="phoneNumber"
                  value={this.state.phoneNumber}
                  onChange={this.handleChange}
                />
              </div>

              <div className="flex-col-right" id="add-user-flex-left-id">
                <div className="first-name manrope-normal-shark-14px">
                  ADDRESS
                </div>

                <input
                  className="search-bar border-1px-mystic search"
                  type="text"
                  name="address"
                  value={this.state.address}
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
    createUser: (user) => dispatch(createUser(user)),
  };
};

export default connect(mapState, mapDispatch)(AdminCreateDropzone);
