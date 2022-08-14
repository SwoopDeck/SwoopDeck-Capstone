import React from "react";
import { connect } from "react-redux";
import { createJump } from "../store/jumps";
import { Link } from "react-router-dom";

export class AddJump extends React.Component {
  constructor() {
    super();
    this.state = {
        jumpNumber: '',
        location:'',
        aircraft: '',
        equipment: '',
        exitAltitude: 14000,
        pullAltitude: 4000,
        freeFallTime: 60,
        jumpers: '',
        description: '',
        jumpType: '',
      };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  render() {
   
    return (
      <div className="flex-right">
        <h1>Select jump type</h1>
        <form id='jump-form' >
          <div>JUMP NUMBER:
          </div>
          <input
            type="text"
            name='jumpNumber'
            value={this.state.jumpNumber }
            onChange={this.handleChange}
            style={{ margin: "25px"}}
          />
          <div>LOCATION:
          </div>
          <input
            type="text"
            name='location'
            value={this.state.location }
            onChange={this.handleChange}
            style={{ margin: "25px"}}
          />
          <div>AIRCRAFT:</div>
          <input
            type="text"
            name='aircraft'
            value={this.state.aircraft }
            onChange={this.handleChange}
            style={{ margin: "25px"}}
          />
          <div>EQUIPMENT:</div>
          <input
            type="text"
            name='equipment'
            value={this.state.equipment }
            onChange={this.handleChange}
            style={{ margin: "25px"}}
          />
          <div>EXIT ALTITUDE:</div>
          <input
            type="number"
            name='exitAltitude'
            value={this.state.exitAltitude }
            onChange={this.handleChange}
            style={{ margin: "25px"}}
          />
          <div>PULL ALTITUDE:</div>
          <input
            type="number"
            name='pullAltitude'
            value={this.state.pullAltitude }
            onChange={this.handleChange}
            style={{ margin: "25px"}}
          />
          <div>FREEFALL TIME:</div>
          <input
            type="number"
            name='freeFallTime'
            value={this.state.freeFallTime }
            onChange={this.handleChange}
            style={{ margin: "25px"}}
          />
          <div>JUMPERS:</div>
          <input
            type="text"
            name='jumpers'
            value={this.state.jumpers}
            onChange={this.handleChange}
            style={{ margin: "25px"}}
          />
          <div>DESCRIPTION:</div>
          <input
            type="text"
            name='description'
            value={this.state.description}
            onChange={this.handleChange}
            style={{ margin: "25px"}}
          />
          <div>JUMP TYPE:
          </div>
          <input
            type="text"
            name='jumpType'
            value={this.state.jumpType }
            onChange={this.handleChange}
            style={{ margin: "25px"}}
          />
         
            <button
              onClick={(evt) => {
                evt.preventDefault();
                this.props.add({...this.state}, this.props.user.id);
                this.setState({
                  jumpNumber: '',
                  location: '',
                  aircraft: '',
                  equipment: '',
                  exitAltitude: 14000,
                  pullAltitude: 4000,
                  freeFallTime: 60,
                  jumpers: '',
                  description: '',
                  jumpType: '',
                });
              }}
            > <Link to="/alljumps">
              Add Jump Log
              </Link>
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
  add: (jump, id) => dispatch(createJump(jump,id)),
});

export default connect(mapState, mapDispatch)(AddJump);
