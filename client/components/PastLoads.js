import React from 'react';
import { Link } from 'react-router-dom';
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
} from '../store/loads';

/**
 * REACT COMPONENT
 */
export class PastLoads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadsdata: this.props.loads,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.removeLoad = this.removeLoad.bind(this);
  }
  componentDidMount() {
    const dropzoneId = this.props.users.dropzoneId;
   this.props.getLoads(dropzoneId);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleClick(evt) {
    let loadId = evt.target.id;
    this.props.history.push(`/:dropzoneId/loads/${loadId}`);
  }

  removeLoad(dropzoneId, loadId){
    console.log('dz,load', dropzoneId, loadId)
    this.props.deleteLoad(dropzoneId, loadId)
  }

  render() {
   
    const todaysLoads = this.props.loads
    return (
      <div className='flex-right'>




<div className="table screen">
          <div className="frame-529">
            <div className="frame-528">
              <div className="frame-526">
                <p id="titleLog">Past Loads</p>
                <div className="view-all-past-skydiving-jump-logs">
                  View all previous loads
                </div>
              </div>
              <div className="frame-527">
                  <Link to='/createload'>
                <button className="add-btn"
                style={{width: '155px'}}>
                  <img
                    className="icon"
                    src="https://anima-uploads.s3.amazonaws.com/projects/630e6c3ef11c17b54f51d1b7/releases/630e84f46d0125081c2cb8ad/img/-icon@2x.svg"
                  />

                  <div className="button">Create Load</div>
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
                <th>Available Slots</th>
                <th>Total Slots</th>
                <th>Booked Slots </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {todaysLoads.map((load, index) => {
                let availableSlots = load.slots - load.slotsFilled;
                return (
                  <tr key={index}>
                    <td>{load.date}</td>
                    <td>{load.aircraft}</td>
                    <td>{availableSlots}</td>
                    <td>{load.slots}</td>
                    <td>{load.slotsFilled}</td>
                    <td
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                    >
                      {/* <button className='edit-btn'><i className="fa-solid fa-pen-to-square"/></button> */}
                      <button
                        className="edit-btn"
                        style={{ margin: "1rem 1rem" }}
                        id={load.id}
                        onClick={this.handleClick}
                      >
                        <i className="fa-solid fa-eye" />
                      </button>

                      {/* <button
                        className="delete-btn"
                        style={{ backgroundColor: "red" }}
                        id={load.id}
                        onClick={() =>
                          this.removeLoad(this.props.users.dropzoneId, load.id)
                        }
                      >
                        <i className="fa-solid fa-trash-can" />
                      </button> */}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>





        {/* <h2>Past Loads:</h2>
        {todaysLoads.map((load) => (
          <div key={load.id}>
            <p>Date: {load.date}</p>
            <p>Aircraft: {load.aircraft}</p>
            <p>Slots: {load.slots} </p>
            <p>Slots Filled: {load.slotsFilled} </p>
            <button type="button" id={load.id} onClick={this.handleClick}>
              View Details
            </button>
            <button type="button" id={load.id} onClick={() => this.removeLoad(this.props.users.dropzoneId, load.id)}>
             Remove Load
            </button>
          </div>
        ))} */}
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


export default connect(mapState, mapDispatch)(PastLoads);
