import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { thunk_fetchAllDropzones } from "../store/dropzones.js";
import { Thunk_fetchUser, createUser } from "../store/allUsers";

export class AdminCreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      address: "",
      licenseNumber: "",
      phoneNumber: "",
      emergencyContact: "",
      emergencyPhoneNumber: "",
      isDropzone: false,
      isAdmin: false,
      dropzoneId: undefined,
      role: undefined,

      invalidDzId:
        "Create this user's dropzone profile before adding the facilitie's account holder",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.getDropzones();
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
    console.log(evt.target.name);
    console.log(evt.target.value);
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
                  <p id="titleLog">Create New User</p>
                  <div className="view-all-past-skydiving-jump-logs">
                    New user details
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
                      //   console.log(this.state);
                      this.props.createUser({ ...this.state });
                      this.props.getSingleUser(this.props.match.params.id);
                      this.setState({
                        firstName: "",
                        lastName: "",
                        email: "",
                        password: "",
                        address: "",
                        licenseNumber: "",
                        phoneNumber: "",
                        emergencyContact: "",
                        emergencyPhoneNumber: null,
                      });

                      this.props.history.push(`/users`);
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
                <div className="frame-1">
                  <div className="frame-2">
                    <div className="email manrope-normal-shark-14px">
                      PASSWORD
                    </div>
                  </div>
                </div>
                <input
                  className="search-bar border-1px-mystic search"
                  type="text"
                  name="password"
                  placeholder={email}
                  value={this.state.password}
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

              <div className="flex-col-right" id="add-user-flex-left-id">
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
                  value={this.state.address}
                  onChange={this.handleChange}
                />
                <div className="frame-1">
                  <div className="frame-2">
                    <div
                      className="email manrope-normal-shark-14px"
                      style={{ width: "125px" }}
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
                <div className="frame-2-1">
                  <div className="frame-2">
                    <div className="emergency-contact-full-name manrope-normal-shark-14px">
                      EMERGENCY CONTACT PHONE NUMBER
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
            <div className="flex-row-2" style={{ marginBottom: "-230px" }}>
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
            <div className="overlap-group2">
              <div
                className="uspa-membership manrope-bold-shark-18px"
                style={{ width: "400px" }}
              >
                USPA MEMBERSHIP DROPZONE ACCOUNT
              </div>
              <div className="rectangle-23"></div>
            </div>
            <div className="flex-row-2" style={{ marginBottom: "-230px" }}>
              <div className="flex-col-left">
                <div className="first-name manrope-normal-shark-14px">
                  DROPZONE ID
                </div>

                <input
                  className="search-bar border-1px-mystic search"
                  type="text"
                  name="dropzoneId"
                  placeholder="Dropzone ID must already exist"
                  value={this.state.dropzoneId}
                  onChange={this.handleChange}
                />
              </div>

              <div className="flex-col-right">
                <div className="frame-1" style={{ marginTop: "-1.55rem" }}>
                  <div className="frame-2">
                    <div
                      className="email manrope-normal-shark-14px"
                      style={{ width: "230px" }}
                    >
                      Is This User A Dropzone Manager?
                    </div>
                  </div>
                </div>

                <select
                  className="search-bar border-1px-mystic search"
                  name="isDropzone"
                  onChange={this.handleChange}
                  style={{ padding: ".5rem" }}
                >
                  <option name="isDropzone" value="false">
                    No
                  </option>
                  <option name="isDropzone" value="true">
                    Yes
                  </option>
                </select>
                <button
                  className="save-btn"
                  style={{
                    width: "200px",
                    marginLeft: "7rem",
                    marginTop: "5rem",
                  }}
                  onClick={(evt) => {
                    evt.preventDefault();

                    this.props.createUser({ ...this.state });

                    this.setState({
                      ...this.state,
                      firstName: "",
                      lastName: "",
                      email: "",
                      password: "",
                      address: "",
                      licenseNumber: "",
                      phoneNumber: "",
                      emergencyContact: "",
                      emergencyPhoneNumber: null,
                      isDropzone: "",
                      dropzoneId: undefined,
                    });

                    this.props.history.push(`/users`);
                  }}
                >
                  Create Dropzone Account
                </button>
              </div>
            </div>
            <div className="overlap-group2">
              <div className="uspa-membership manrope-bold-shark-18px">
                ADMIN ACCOUNT
              </div>
              <div className="rectangle-23"></div>
            </div>
            <div className="flex-row-2" style={{ marginTop: "-65px" }}>
              <div className="flex-col-right" style={{ margin: "60px 1.5rem" }}>
                <div className="frame-1">
                  <div className="frame-2">
                    <div
                      className="email manrope-normal-shark-14px"
                      style={{ width: "170px" }}
                    >
                      Make This User An Admin
                    </div>
                  </div>
                </div>

                <select
                  className="search-bar border-1px-mystic search"
                  name="isAdmin"
                  onChange={this.handleChange}
                  style={{ padding: ".5rem" }}
                >
                  <option name="isAdmin" value="false">
                    No
                  </option>
                  <option name="isAdmin" value="true">
                    Yes
                  </option>
                </select>
              </div>
              <div className="flex-col-left" style={{ margin: "0 14.5rem" }}>
                <button
                  className="save-btn"
                  style={{ width: "200px" }}
                  onClick={(evt) => {
                    evt.preventDefault();
                    this.props.createUser({ ...this.state });

                    this.setState({
                      firstName: "",
                      lastName: "",
                      email: "",
                      password: "",
                      address: "",
                      licenseNumber: "",
                      phoneNumber: "",
                      emergencyContact: "",
                      emergencyPhoneNumber: null,
                      isAdmin: "",
                      dropzoneId: null,
                    });

                    this.props.history.push(`/users`);
                  }}
                >
                  Save Admin User
                </button>
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
    getDropzones: () => dispatch(thunk_fetchAllDropzones()),
    getSingleUser: (id) => dispatch(Thunk_fetchUser(id)),
    createUser: (user) => dispatch(createUser(user)),
  };
};

export default connect(mapState, mapDispatch)(AdminCreateUser);
