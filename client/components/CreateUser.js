import React from 'react';
import { connect } from 'react-redux';
import { createUser } from '../store/allusers';

// REACT COMPONENT //
export class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
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

  handleSubmit(event) {
    event.preventDefault();
    this.props.createUser(this.state);
  }
  render() {
    return (
      <div className='login-main'>
      {/* <Navbar /> */}
      <div className='logo-container'>

      <img src="/assets/SwoopLog.png" alt="logo" className='centered-logo'/>
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
              <div>
                <button className="button submit-btn buttonShadow" type="submit">
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

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    createUser: (props) => dispatch(createUser(props, history)),
  };
};

export default connect(null, mapDispatchToProps)(CreateUser);
