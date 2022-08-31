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
} from '../store/loads';

/**
 * REACT COMPONENT
 */
export class LoadDetailsDZ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadsdata: this.props.loads,
      status: 'On Time'
    };

    this.handleChange = this.handleChange.bind(this);
    this.removeJumper = this.removeJumper.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
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

  removeJumper(userId, loadId){
    this.props.editLoad(userId, loadId)
  }

  changeStatus(status, loadId){
    this.props.editLoadStatus(status, loadId)
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
          <h4>EMAIL: {user.email}</h4>
          <button type="button" onClick={()=> this.removeJumper(user.id,this.props.match.params.loadId)}>Remove From Load</button>
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
        <label htmlFor="status">Status</label>
          <select name="status" onChange={this.handleChange}>
            <option name="on time">On Time</option>
            <option name="delayed">Delayed</option>
            <option name="closed">Closed</option>
            <option name="canceled">Canceled</option>
          </select>
          <button type="button" onClick={()=> this.changeStatus({status:this.state.status},this.props.match.params.loadId)}>Update Status</button>
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

    editLoad: (userId, loadId) =>
      dispatch(thunk_updateLoad(userId, loadId)), //WORKING//
      editLoadStatus: (status, loadId) =>
      dispatch(thunk_updateLoadStatus(status, loadId)), //WORKING//
    getLoads: (dropzoneId) => dispatch(thunk_fetchAllLoads(dropzoneId)), //WORKING//
    deleteLoad: (dropzoneId, loadId) =>
      dispatch(thunk_deleteLoad(dropzoneId, loadId)), //WORKING//
    addLoad: (LOAD, dropzoneId) => dispatch(thunk_createLoad(LOAD, dropzoneId)), //WORKING//
    getSingleLoad: (dropzoneId, loadId) =>
      dispatch(thunk_fetchSingleLoad(dropzoneId, loadId)), //WORKING//
  };
};

export default connect(mapState, mapDispatch)(LoadDetailsDZ);
