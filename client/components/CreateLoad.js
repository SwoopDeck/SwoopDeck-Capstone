import React from 'react';
import { connect } from 'react-redux';
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
  addLoad,
} from '../store/loads';

/**
 * REACT COMPONENT
 */
export class CreateLoad extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      aircraft: '',
      slots: null,
      status: 'on time',
    };

    this.handleChange = this.handleChange.bind(this);
    this.createLoad = this.createLoad.bind(this);
  }
  componentDidMount() {}

  handleChange(evt) {
    console.log('before', this.state);
    this.setState({
      [evt.target.name]: evt.target.value,
    });
    console.log('after', this.state);
  }

  createLoad(evt) {
    const dropzoneId = this.props.users.dropzoneId;
    const load = { ...this.state };
    this.props.addLoad(load, dropzoneId);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Create New Load</h1>
        <form>
          <input
            type="text"
            name="aircraft"
            placeholder="Aircraft"
            onChange={this.handleChange}
          />
          <label htmlFor="availableSlots">Available Slots</label>
          <select name="availableSlots" onChange={this.handleChange}>
            <option name={1}>1</option>
            <option name={2}>2</option>
            <option name={3}>3</option>
            <option name={4}>4</option>
            <option name={5}>5</option>
            <option name={6}>6</option>
            <option name={7}>7</option>
            <option name={8}>8</option>
            <option name={9}>9</option>
            <option name={10}>10</option>
            <option name={11}>11</option>
            <option name={12}>12</option>
            <option name={13}>13</option>
            <option name={14}>14</option>
            <option name={15}>15</option>
          </select>
          <label htmlFor="status">Status</label>
          <select name="status" onChange={this.handleChange}>
            <option name="on time">On Time</option>
            <option name="delayed">Delayed</option>
            <option name="closed">Closed</option>
            <option name="canceled">Canceled</option>
          </select>
          <button type="button" onClick={this.createLoad}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    jumpRecords: state.jumpRecords,
    users: state.auth,
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

export default connect(mapState, mapDispatch)(CreateLoad);
