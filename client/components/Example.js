import React from "react";
import { connect } from "react-redux";
import { Thunk_fetchAllJumpRecords, Thunk_updateJump, Thunk_deleteJump,Thunk_createJump } from "../store/jumpRecords";



export class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        jumpNumber: "",
        // location: "",
        // aircraft: "",
        // equipment: "",
        // exitAltitude: 14000,
        // pullAltitude: 4000,
        // freeFallTime: 60,
        // jumpers: "",
        // description: "",
        // jumpType: "",
      };
      this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.props.getJumps(3);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  render() {
    console.log('PROPS',this.props)
    let { jumps } = this.props || [];
    return (
      <div >
       {jumps.map((jump) => {
            return (
              <div className="recent-jumps" key={jump.id}>
                <div>{jump.jumpNumber}</div>
                <div>{jump.aircraft}</div>
                <div>{jump.equipment}</div>
                <h1>Edit Log</h1>
                <form id="jump-form">
                  <div>JUMP JUMBER:</div>
                  <input
                    type="text"
                    name="jumpNumber"
                    value={this.state.jumpNumber}
                    onChange={this.handleChange}
                  />
                </form>
                <button
            onClick={(evt) => {
              evt.preventDefault();
              this.props.edit({ ...this.state }, 3, jump.id);
              this.setState({
                jumpNumber: "",
                // location: "",
                // aircraft: "",
                // equipment: "",
                // exitAltitude: 14000,
                // pullAltitude: 4000,
                // freeFallTime: 60,
                // jumpers: "",
                // description: "",
                // jumpType: "",
              });
              //this.props.getJumps(3)
            }}
          >UPDATE</button>
          <button
            onClick={(evt) => {
              evt.preventDefault();
              this.props.delete( 3, jump.id);
            }}
          >DELETE</button>
          <button
            onClick={(evt) => {
              evt.preventDefault();
              this.props.add( 
            {jumpNumber: 91219, id: 239}, 3);
            this.props.getJumps(3)
            }}
          >ADD</button>
              </div>
            );
       })}
       
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    jumps: state.jumpRecords,
    // user: state.auth,
  };
};
const mapDispatch = (dispatch) => {
  return {
    edit: (jump, userId, jumpId) => dispatch(Thunk_updateJump(jump, userId, jumpId)),
    getJumps: (userId) => dispatch(Thunk_fetchAllJumpRecords(userId)),
    delete: (userId, jumpId) => dispatch(Thunk_deleteJump(userId, jumpId)), 
    add: (jump, id) => dispatch(Thunk_createJump(jump,id)),
  };
};

export default connect(mapState, mapDispatch)(Example);
