import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import {
  thunk_createDropzone,
  thunk_fetchAllDropzones,
} from '../store/dropzones.js';


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

  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });

  }

  render() {
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
    getDropzones: () => dispatch(thunk_fetchAllDropzones()), //WOKRING//
    addDropzone: (DROPZONE) => dispatch(thunk_createDropzone(DROPZONE)), //WORKING//
  };
};

export default connect(mapState, mapDispatch)(AdminCreateDropzone);

