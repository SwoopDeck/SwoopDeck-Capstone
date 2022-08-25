import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Thunk_fetchAllJumpRecords,
  Thunk_fetchSingleJump,
  Thunk_updateJump,
  Thunk_deleteJump,
  Thunk_createJump,
} from '../../store/jumpRecords';
import {
  thunk_fetchSingleDropzone,
  thunk_updateDropzone,
  thunk_createDropzone,
  thunk_deleteDropzone,
  thunk_fetchAllDropzones,
} from '../../store/dropzones.js';
import {
  thunk_fetchAllLoads,
  thunk_createLoad,
  thunk_deleteLoad,
  thunk_fetchSingleLoad,
  thunk_updateLoad,
} from '../../store/loads';

export class EditJump extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    let jump = this.props.jump[0] || {};

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
            style={{ margin: '25px' }}
          />
          <div>LOCATION:</div>
          <input
            type="text"
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
            style={{ margin: '25px' }}
          />
          <div>AIRCRAFT:</div>
          <input
            type="text"
            name="aircraft"
            value={this.state.aircraft}
            onChange={this.handleChange}
            style={{ margin: '25px' }}
          />
          <div>EQUIPMENT:</div>
          <input
            type="text"
            name="equipment"
            value={this.state.equipment}
            onChange={this.handleChange}
            style={{ margin: '25px' }}
          />
          <div>EXIT ALTITUDE:</div>
          <input
            type="number"
            name="exitAltitude"
            value={this.state.exitAltitude}
            onChange={this.handleChange}
            style={{ margin: '25px' }}
          />
          <div>PULL ALTITUDE:</div>
          <input
            type="number"
            name="pullAltitude"
            value={this.state.pullAltitude}
            onChange={this.handleChange}
            style={{ margin: '25px' }}
          />
          <div>FREEFALL TIME:</div>
          <input
            type="number"
            name="freeFallTime"
            value={this.state.freeFallTime}
            onChange={this.handleChange}
            style={{ margin: '25px' }}
          />
          <div>JUMPERS:</div>
          <input
            type="text"
            name="jumpers"
            value={this.state.jumpers}
            onChange={this.handleChange}
            style={{ margin: '25px' }}
          />
          <div>DESCRIPTION:</div>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            style={{ margin: '25px' }}
          />
          <div>JUMP TYPE:</div>
          <input
            type="text"
            name="jumpType"
            value={this.state.jumpType}
            onChange={this.handleChange}
            style={{ margin: '25px' }}
          />

          <button
            onClick={(evt) => {
              evt.preventDefault();
              this.props.edit({ ...this.state }, this.props.users.id, jump.id);
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
              this.props.getJump(this.props.users.id, jump.id);
            }}
          >
            <Link to={`/jumps/${jump.id}`}>Edit Jump Log</Link>
          </button>
        </form>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    jumpRecords: state.jumpRecords,
    userss: state.auth,
    dropzones: state.dropzones,
    loads: state.loads,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditJump);
