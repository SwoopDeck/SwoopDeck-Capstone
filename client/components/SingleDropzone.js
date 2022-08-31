import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { me } from '../store/auth';
import Sidebar from './Sidebar';
// import EditItem from "./EditItem";
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
} from '../store/loads';
import { Thunk_fetchUser } from '../store/allusers';

/**
 * REACT COMPONENT
 */
class SingleUser extends React.Component {
  componentDidMount() {
    this.props.getSingleDropzone(this.props.match.params.id);
    // this.props.getDropzones();
  }

  render() {
    const { id, name, address, phoneNumber } = this.props.singleDropzone;
    // console.log('PROPS',this.props)
    return (
      <div>
        <div key={id}>
          <h2>{name}</h2>
          <p>{address} </p>
          <p>{phoneNumber} </p>

          <button
            onClick={() => {
              this.props.getSingleDropzone(this.props.match.params.id);
              this.props.history.push(`/dropzones/edit/${id}`);
              // this.props.getDropzones()
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              this.props.deleteDropzone(id);
              // this.props.getDropzones();
              this.props.history.push(`/dropzones`);
            }}
          >
            Delete
          </button>
          <button
            onClick={() => {
              this.props.getDropzones();
              this.props.history.push(`/dropzones`);
            }}
          >
            Go back
          </button>
          <hr />
          <hr />
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
    editJumpRecord: (jump, userId, jumpId) =>
      dispatch(Thunk_updateJump(jump, userId, jumpId)), //WORKING//
    getJumpRecords: (userId) => dispatch(Thunk_fetchAllJumpRecords(userId)), //WORKING//
    deleteJumpRecord: (userId, jumpId) =>
      dispatch(Thunk_deleteJump(userId, jumpId)), //WOKRING//
    addJumpRecord: (jump, id) => dispatch(Thunk_createJump(jump, id)), //WORKING//
    getSingleJumpRecord: (userId, jumpId) =>
      dispatch(Thunk_fetchSingleJump(userId, jumpId)), //WORKING//

    //////////////BELOW IS FOR DROPZONE//////////////////////////

    editDropzone: (dropzoneId, dropzone) =>
      dispatch(thunk_updateDropzone(dropzoneId, dropzone)), //WOKRING//
    getDropzones: () => dispatch(thunk_fetchAllDropzones()), //WOKRING//
    deleteDropzone: (dropzoneId) => dispatch(thunk_deleteDropzone(dropzoneId)), //WOKRING//
    addDropzone: (DROPZONE) => dispatch(thunk_createDropzone(DROPZONE)), //WORKING//
    getSingleDropzone: (dropzoneId) =>
      dispatch(thunk_fetchSingleDropzone(dropzoneId)), //WORKING//

    /////////////////BELOW IS FOR LOADS/////////////////////////////

    editLoad: (dropzoneId, loadId, LOAD) =>
      dispatch(thunk_updateLoad(dropzoneId, loadId, LOAD)), //WORKING//
    getLoads: (dropzoneId) => dispatch(thunk_fetchAllLoads(dropzoneId)), //WORKING//
    deleteLoad: (dropzoneId, loadId) =>
      dispatch(thunk_deleteLoad(dropzoneId, loadId)), //WORKING//
    addLoad: (LOAD, dropzoneId) => dispatch(thunk_createLoad(LOAD, dropzoneId)), //WORKING//
    getSingleLoad: (dropzoneId, loadId) =>
      dispatch(thunk_fetchSingleLoad(dropzoneId, loadId)), //WORKING//

    /////////////////BELOW IS FOR ADMINS/////////////////////////////

    getSingleUser: (id) => dispatch(Thunk_fetchUser(id)),
  };
};

export default connect(mapState, mapDispatch)(SingleUser);
