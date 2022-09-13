import React from "react";
import { connect } from "react-redux";
import { createUser } from "../store/allUsers";

// REACT COMPONENT //
export class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      email: "",
      licenseNumber: "",
      emergencyContact: "",
      emergencyPhoneNumber: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit() {
    this.props.newUser(this.state);
    this.props.history.push("/");
  }
  render() {
    return (
      <div className="login-main">
        <div className="logo-container">
          <img
            src="/assets/SwoopLog.png"
            alt="logo"
            className="centered-logo"
          />
        </div>
        <div className="create-form form div-container">
          <form onSubmit={this.handleSubmit}>
            <div className="form-container signup">
              <div className="signup-card">
                <p className="title">Create A New Account</p>
                <div className="input-container">
                  <label className="labelName">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      onChange={this.handleChange}
                      value={this.state.firstName}
                    />
                  </label>
                </div>

                <div className="input-container">
                  <label className="labelName">
                    <input
                      className="input"
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      onChange={this.handleChange}
                      value={this.state.lastName}
                    />
                  </label>
                </div>

                <div className="input-container">
                  <label className="labelName">
                    <input
                      className="input"
                      type="text"
                      name="email"
                      placeholder="Email"
                      onChange={this.handleChange}
                      value={this.state.email}
                    />
                  </label>
                </div>

                <div className="input-container">
                  <label className="labelName">
                    <input
                      className="input"
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={this.handleChange}
                      value={this.state.password}
                    />
                  </label>
                </div>

                <div className="input-container">
                  <label className="labelName">
                    <input
                      className="input"
                      type="text"
                      name="address"
                      placeholder="Address"
                      onChange={this.handleChange}
                      value={this.state.address}
                    />
                  </label>
                </div>
                <div className="input-container">
                  <label className="labelName">
                    <input
                      className="input"
                      type="text"
                      name="licenseNumber"
                      placeholder="License Number"
                      onChange={this.handleChange}
                      value={this.state.licenseNumber}
                    />
                  </label>
                </div>

                <div className="input-container">
                  <label className="labelName">
                    <input
                      className="input"
                      type="text"
                      name="emergencyContact"
                      placeholder="Emergency Contact"
                      onChange={this.handleChange}
                      value={this.state.emergencyContact}
                    />
                  </label>
                </div>

                <div className="input-container">
                  <label className="labelName">
                    <input
                      className="input"
                      type="text"
                      name="emergencyPhoneNumber"
                      placeholder="Emergency Phone Number"
                      onChange={this.handleChange}
                      value={this.state.emergencyPhoneNumber}
                    />
                  </label>
                </div>

                <div>
                  <button
                    className="button submit-btn buttonShadow"
                    onClick={this.handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
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
    newUser: (user) => dispatch(createUser(user)),
  };
};

export default connect(mapState, mapDispatch)(CreateUser);
