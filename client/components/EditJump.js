import React, { Component } from "react";
import { updateJump, fetchSingleJump } from "../store/jumps";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class EditJump extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jumpNumber: "",
      location: "",
      aircraft: "",
      equipment: "",
      exitAltitude: 14000,
      pullAltitude: 4000,
      freeFallTime: 60,
      jumpers: "",
      description: "",
      jumpType: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    //this.props.getJump(this.props.user.id, this.props.match.params.jumpId)
   }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  render() {
    let jump = this.props.jump[0]
    console.log(jump)
    
    return (
      <div>
        <h1>Edit Log</h1>
        <form id="jump-form">
          <div>JUMP NUMBER:</div>
          <input
            type="text"
            name="jumpNumber"
            value={this.state.jumpNumber}
            onChange={this.handleChange}
            style={{ margin: "25px" }}
          />
          <div>LOCATION:</div>
          <input
            type="text"
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
            style={{ margin: "25px" }}
          />
          <div>AIRCRAFT:</div>
          <input
            type="text"
            name="aircraft"
            value={this.state.aircraft}
            onChange={this.handleChange}
            style={{ margin: "25px" }}
          />
          <div>EQUIPMENT:</div>
          <input
            type="text"
            name="equipment"
            value={this.state.equipment}
            onChange={this.handleChange}
            style={{ margin: "25px" }}
          />
          <div>EXIT ALTITUDE:</div>
          <input
            type="number"
            name="exitAltitude"
            value={this.state.exitAltitude}
            onChange={this.handleChange}
            style={{ margin: "25px" }}
          />
          <div>PULL ALTITUDE:</div>
          <input
            type="number"
            name="pullAltitude"
            value={this.state.pullAltitude}
            onChange={this.handleChange}
            style={{ margin: "25px" }}
          />
          <div>FREEFALL TIME:</div>
          <input
            type="number"
            name="freeFallTime"
            value={this.state.freeFallTime}
            onChange={this.handleChange}
            style={{ margin: "25px" }}
          />
          <div>JUMPERS:</div>
          <input
            type="text"
            name="jumpers"
            value={this.state.jumpers}
            onChange={this.handleChange}
            style={{ margin: "25px" }}
          />
          <div>DESCRIPTION:</div>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            style={{ margin: "25px" }}
          />
          <div>JUMP TYPE:</div>
          <input
            type="text"
            name="jumpType"
            value={this.state.jumpType}
            onChange={this.handleChange}
            style={{ margin: "25px" }}
          />

          <button
            onClick={(evt) => {
              evt.preventDefault();
              this.props.edit({ ...this.state }, this.props.user.id, jump.id);
              this.setState({
                jumpNumber: "",
                location: "",
                aircraft: "",
                equipment: "",
                exitAltitude: 14000,
                pullAltitude: 4000,
                freeFallTime: 60,
                jumpers: "",
                description: "",
                jumpType: "",
              });
              this.props.getJump(this.props.user.id, jump.id)
            }}
          >
            Edit Jump Log
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    jump: state.jumps,
    user: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  edit: (jump, userId, jumpId) => dispatch(updateJump(jump, userId, jumpId)),
  getJump: (userId, jumpId) => dispatch(fetchSingleJump(userId, jumpId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditJump);
