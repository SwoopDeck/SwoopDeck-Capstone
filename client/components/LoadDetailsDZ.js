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
  thunk_updateLoad,
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
      status: 'On Time',
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

  removeJumper(userId, loadId) {
    this.props.editLoad(userId, loadId);
  }

  changeStatus(status, loadId) {
    this.props.editLoadStatus(status, loadId);
  }

  render() {
    const year = new Date();
    const createYear = year.getFullYear();

    const month = new Date();
    const createMonth = month.getMonth() + 1;

    const day = new Date();
    const createDay = day.getDate();

    const todaysDate = `${createYear}-${createDay}-${createMonth} `;

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
          <button
            type="button"
            onClick={() =>
              this.removeJumper(user.id, this.props.match.params.loadId)
            }
          >
            Remove From Load
          </button>
        </div>
      );
    });

    return (
      <div className='flex-right'>
<div className="single-load-table">
          <div className="frame-529">
            <div className="frame-528">
              <div className="frame-526">
                <p id="titleLog">Load {this.props.singleLoad.id}</p>
                <div className="view-all-past-skydiving-jump-logs">
                  Load Details
                </div>
              </div>
              <div className="frame-527">
                <Link to="/:dropzoneId/todaysLoads">
                  <button className="add-btn" style={{ width: "200px" }}>

                    <div className="button">Back to today's loads</div>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Aircraft</th>
                <th>Total Slots</th>
                <th>Booked Slots </th>
                <th>Load Status</th>
              </tr>
            </thead>
            <tbody>
                  <tr key={this.props.singleLoad.id}>
                    <td>{this.props.singleLoad.date}</td>
                    <td>{this.props.singleLoad.aircraft}</td>
                    <td>{this.props.singleLoad.slots}</td>
                    <td>{this.props.singleLoad.slotsFilled}</td>
                    <td>{this.props.singleLoad.status}</td>
                  </tr>
            </tbody>
          </table>
        </div>





        <div className="single-load-jumpers-table">
          <div className="frame-529">
            <div className="frame-528">
              <div className="frame-526">
                <p id="titleLog"></p>
                <div className="view-all-past-skydiving-jump-logs">
                  Load Manifest
                </div>
              </div>
              <div className="frame-527">
              </div>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>License Number</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.jumpRecords.length ? 
              
              this.props.jumpRecords.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.firstName} {user.lastName}</td>
                    <td>{user.licenseNumber}</td>
                    <td>{user.email}</td>
                    <td
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                    >
                    {this.props.singleLoad.date.slice(0,9) == todaysDate ? (<button
                        className="delete-btn"
                        style={{ backgroundColor: "red" }}
                        id={user.id}
                        title='delete user'
                        onClick={() =>
                          this.removeJumper(user.id, this.props.match.params.loadId)
                        }
                      >
                        <i className="fa-solid fa-trash-can" />
                      </button>): 
                      <Link to={`/users/${user.id}`} >
                      
                        <button className="edit-btn" style={{margin: '1rem 1rem'}}><i className="fa-solid fa-eye"/></button>
                        </Link>}
                      </td>


                  </tr>
                );
              }) : 
                <tr>
                  <td></td>
                <td>There are currently no passengers on this manifest</td>
                <td></td>
                </tr>}
            </tbody>
          </table>
        </div>
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

    editLoad: (userId, loadId) => dispatch(thunk_updateLoad(userId, loadId)), //WORKING//
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
