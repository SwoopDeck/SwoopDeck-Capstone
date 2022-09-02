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
  thunk_updateLoadStatus,
  thunk_updateLoadSlotsFilled,
} from '../store/loads';

/**
 * REACT COMPONENT
 */
export class LoadDetailsUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadsdata: this.props.loads,
      status: 'On Time',
    };

    this.handleChange = this.handleChange.bind(this);
    this.removeJumper = this.removeJumper.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
  }
  componentDidMount() {
    const loadId = this.props.match.params.loadId;
    const dropzoneId = this.props.match.params.dropzoneId;
    this.props.getSingleLoad(dropzoneId, loadId);
    this.props.getAllJumpersOnLoad(this.props.match.params.loadId);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  removeJumper(userId, loadId) {
    this.props.editLoad(userId, loadId);
  }

  changeStatus(status, loadId) {
    this.props.editLoadStatus(status, loadId);
  }

  render() {
    const allLoads = this.props.loads;
    console.log(this.props);
    const jumpers = this.props.jumpRecords.map((user, idx) => {
      return (
        <div key={idx}>
          <br />
          <h4>
            NAME: {user.firstName} {user.lastName}
          </h4>
          <h4>LICENSE #: {user.licenseNumber}</h4>
        </div>
      );
    });
    const confirmLoad = (evt) => {
      this.props.editLoadSlots(
        this.props.singleLoad.dropzoneId,
        this.props.singleLoad.id
      );
      console.log('single load', this.props.singleLoad);
      console.log('single user', this.props.user);
      let currentJump = {
        aircraft: this.props.singleLoad.aircraft,
        jumpDate: this.props.singleLoad.date,
        loadId: this.props.singleLoad.id,
        dropzoneId: this.props.singleLoad.dropzoneId,
      };

      this.props.addJumpRecord(currentJump, this.props.users.id);
      // this.props.history.push('/home');
      this.props.getLoads(this.props.match.params.dropzoneId);
    };
    return (
      <div>
        <h2>LOAD ID: {this.props.singleLoad.id}</h2>
        <br />
        <h2>LOAD AIRCRAFT: {this.props.singleLoad.aircraft}</h2>
        <br />
        <h2>EXPECTED DEPARTURE TIME: {this.props.singleLoad.departureTime}</h2>
        <br />
        <h2>
          AVAILABLE SLOTS:
          {this.props.singleLoad.slots - this.props.singleLoad.slotsFilled}
        </h2>
        <br />
        <h2>LOAD STATUS: {this.props.singleLoad.status}</h2>
        <br />
        {/* <h2>JUMPERS</h2>
        <h2>----------------</h2>
        <div> {jumpers}</div> */}
        <br />
        <br />
        <Link to={`/${this.props.singleLoad.dropzoneId}/loads`}>
          <button type="button" onClick={confirmLoad}>
            Confirm
          </button>
        </Link>

        <Link to={`/${this.props.singleLoad.dropzoneId}/loads`}>
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

    /* 
editLoad: (dropzoneId, loadId, LOAD) =>
       dispatch(thunk_updateLoad(dropzoneId, loadId, LOAD)),
 */
    editLoadSlots: (dropzoneId, loadId) =>
      dispatch(thunk_updateLoadSlotsFilled(dropzoneId, loadId)),
    getLoads: (dropzoneId) => dispatch(thunk_fetchAllLoads(dropzoneId)), //WORKING//
    deleteLoad: (dropzoneId, loadId) =>
      dispatch(thunk_deleteLoad(dropzoneId, loadId)), //WORKING//
    addLoad: (LOAD, dropzoneId) => dispatch(thunk_createLoad(LOAD, dropzoneId)), //WORKING//
    getSingleLoad: (dropzoneId, loadId) =>
      dispatch(thunk_fetchSingleLoad(dropzoneId, loadId)), //WORKING//
  };
};

export default connect(mapState, mapDispatch)(LoadDetailsUser);
