import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Thunk_fetchAllJumpRecords,
  Thunk_fetchSingleJump,
  Thunk_updateJump,
  Thunk_deleteJump,
  Thunk_createJump,
  Thunk_fetchAllJumpersOnLoad,
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

/**
 * REACT COMPONENT
 */
export class LoadDetailsDZ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadsdata: this.props.loads,
    };

    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    const loadId = this.props.match.params.loadId;
    const dropzoneId = this.props.users.dropzoneId;
    this.props.getSingleLoad(dropzoneId, loadId);
    this.props.getAllJumpersOnLoad(this.props.match.params.loadId);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleClick(evt) {
    this.props.history.push(`/:dropzoneId/todaysLoads`);
  }

  render() {
    const allLoads = this.props.loads;
    console.log(this.props.jumpRecords);
    const jumpers = this.props.jumpRecords.map((user, idx) => {
      return (
        <div key={idx}>
          <br />
          <h4>
            NAME: {user.firstName} {user.lastName}
          </h4>
          <h4>LICENSE #: {user.licenseNumber}</h4>
          <h4>EMAIL: {user.email}</h4>
        </div>
      );
    });

    return (
      <div>
        <h2>LOAD ID: {this.props.singleLoad.id}</h2>
        <br />
        <h2>LOAD AIRCRAFT: {this.props.singleLoad.aircraft}</h2>
        <br />
        <h2>EXPECTED DEPARTURE TIME: need to add</h2>
        <br />
        <h2>LOAD STATUS: {this.props.singleLoad.status}</h2>
        <br />
        <h2>JUMPERS</h2>
        <h2>----------------</h2>
        <div> {jumpers}</div>
        <br />
        <br />
        <Link to="/:dropzoneId/todaysLoads">
          <button type="button">Back to Today's Loads</button>
        </Link>
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    jumpRecords: state.jumpRecords,

    users: state.auth,
    dropzones: state.dropzones.allDropzones,
    loads: state.loads.allLoads,
    singleLoad: state.loads.singleLoad,
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
    getAllJumpersOnLoad: (loadId) =>
      dispatch(Thunk_fetchAllJumpersOnLoad(loadId)),

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

export default connect(mapState, mapDispatch)(LoadDetailsDZ);
