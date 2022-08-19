import React from "react";
import { connect } from "react-redux";
import { createJump } from "../store/jumps";
import { Link, useNavigate } from "react-router-dom";

export class AddJump extends React.Component {
  constructor() {
    super();
    this.state = {
      jumpNumber: "",
      location: "",
      aircraft: "",
      equipment: "",
      exitAltitude: 14000,
      pullAltitude: 4000,
      freeFallTime: 60,
      jumpers: "Solo",
      description: "",
      jumpType: "Belly",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // this.setState({
    //   [evt.target.name]: evt.target.value,
    // });
    // MODIFIED IN AN ATTEMPT TO GET THE FUNCTIONALITY TO WORK
    this.setState({ ...this.state, [event.target.name]: event.target.value });
    console.log(this.state);
  }

  navigateToAllJumps() {
    nagivate("/alljumps");
  }
  render() {
    return (
      <div className="flex-right">
        <h1 style={{ marginLeft: "2rem", marginTop: "2rem" }}>
          Select jump type
        </h1>
        <div className="select-jump-type-container" onClick={this.handleChange}>
          <button className="jump-type" name="jumpType" value="Belly">
            Belly
          </button>
          <button className="jump-type" name="jumpType" value="Angle">
            Angle
          </button>
          <button className="jump-type" name="jumpType" value="Head up">
            Head up
          </button>
          <button className="jump-type" name="jumpType" value="Head down">
            Head down
          </button>
          <button className="jump-type" name="jumpType" value="Formation">
            Formation
          </button>
          <button className="jump-type" name="jumpType" value="FreeFly">
            FreeFly
          </button>
          <button className="jump-type" name="jumpType" value="High altitude">
            High altitude
          </button>
          <button className="jump-type" name="jumpType" value="AFF">
            AFF
          </button>
          <button className="jump-type" name="jumpType" value="Balloon">
            Balloon
          </button>
          <button className="jump-type" name="jumpType" value="Heli">
            Heli
          </button>
          <button className="jump-type" name="jumpType" value="High pull">
            High pull
          </button>
          <button className="jump-type" name="jumpType" value="CRW">
            CRW
          </button>
        </div>
        <form id="jump-form-container">
          {/* <div>JUMP NUMBER:
          </div> */}
          <div className="jump-form-div">
            <label> Jump number</label>
            <input
              className="jump-info-field"
              type="text"
              name="jumpNumber"
              value={this.state.jumpNumber}
              onChange={this.handleChange}
            />
          </div>
          <div className="jump-form-div">
            <label> Location</label>
            <input
              className="jump-info-field"
              type="text"
              name="location"
              value={this.state.location}
              onChange={this.handleChange}
            />
          </div>
          <div className="jump-form-div">
            <label> Aircraft</label>
            <input
              className="jump-info-field"
              type="text"
              name="aircraft"
              value={this.state.aircraft}
              onChange={this.handleChange}
            />
          </div>
          <div className="jump-form-div">
            <label> Equipment</label>
            <input
              className="jump-info-field"
              type="text"
              name="equipment"
              value={this.state.equipment}
              onChange={this.handleChange}
            />
          </div>
          <div className="jump-form-div">
            <label> Exit altitude</label>
            <input
              className="jump-info-field"
              type="text"
              name="exitAltitude"
              value={this.state.exitAltitude}
              onChange={this.handleChange}
            />
          </div>
          <div className="jump-form-div">
            <label> Pull altitude</label>
            <input
              className="jump-info-field"
              type="text"
              name="pullAltitude"
              value={this.state.pullAltitude}
              onChange={this.handleChange}
            />
          </div>
          <div className="jump-form-div">
            <label> FreeFall time</label>
            <input
              className="jump-info-field"
              type="text"
              name="freeFallTime"
              value={this.state.freeFallTime}
              onChange={this.handleChange}
            />
          </div>

          <div className="jump-form-div">
            <label> Jumpers</label>
            <div className="cat-cont">
              <select
                onChange={this.handleChange}
                name="jumpers"
                className="category-list"
              >
                {/* <option value={jumpers}></option> */}
                <option value={"Solo"}>Solo</option>
                <option value={"2-way"}>2-way</option>
                <option value={"3-way"}>3-way</option>
                <option value={"4-way"}>4-way</option>
                <option value={"5+"}>5+</option>
              </select>
            </div>

            {/* <input
          className="jump-info-field"
            type="text"
            name='jumpers'
            value={this.state.jumpers }
            onChange={this.handleChange}
          /> */}
          </div>

          <div className="jump-form-div">
            <label> Description</label>
            <input
              className="jump-info-field"
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
          <div className="jump-form-div">
            <label> Jump certifying official</label>
            <input
              className="jump-info-field"
              type="text"
              name="certifyingOfficialName"
              placeholder="Full name"
              value={this.state.certifyingOfficialName}
              onChange={this.handleChange}
              // style={{    backgroundColor: '#fff',
              //   color: 'rgb(100, 100, 100)',
              //   boxShadow: '0 0 4px 2px #e5f2ff'}}
            />
            <input
              className="jump-info-field"
              type="text"
              name="certifyingOfficialLicenseNumber"
              placeholder="USPA license number"
              value={this.state.certifyingOfficialLicenseNumber}
              onChange={this.handleChange}
              // style={{    backgroundColor: '#fff',
              //   color: 'rgb(100, 100, 100)',
              //   boxShadow: '0 0 4px 2px #e5f2ff'}}
            />
          </div>

          {/* <div>JUMP TYPE:
          </div>
          <input
            type="text"
            name='jumpType'
            value={this.state.jumpType }
            onChange={this.handleChange}

          /> */}
          <div></div>
          <button
            className="add-jump-btn"
            onClick={(evt) => {
              evt.preventDefault();
              this.props.add({ ...this.state }, this.props.user.id);
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
              this.navigateToAllJumps;
            }}
          >
            <Link to="/alljumps">Add To Logbook</Link>
          </button>
        </form>
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    user: state.auth,
  };
};
const mapDispatch = (dispatch) => ({
  add: (jump, id) => dispatch(createJump(jump, id)),
});

export default connect(mapState, mapDispatch)(AddJump);
