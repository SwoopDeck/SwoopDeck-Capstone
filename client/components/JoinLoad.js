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
} from '../store/loads';

/**
 * REACT COMPONENT
 */
export class JoinLoad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      display: 'inline-block',
    };

    this.handleChange = this.handleChange.bind(this);
    //this.selectLoad = this.selectLoad.bind(this);
  }
  componentDidMount() {
    console.log(this.props.match.params.dropzoneId);
    this.props.getLoads(this.props.match.params.dropzoneId);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  // selectLoad(evt) {
  //   //in order to update jumpNumber column we will need to make query to get current jump number and increment by 1
  //   // let currentLoad = this.props.getSingleLoad(
  //   //   evt.target.id,
  //   //   this.props.match.params.dropzoneId
  //   // );
  //   console.log('currentLoad', evt.target.id);
  //   // const currentJumpRecord = {};
  //   // this.props.addLoad();
  //   //this.props.history.push('/')
  // }

  render() {
    //const { selectLoad } = this;
    //WE NEED TO FILTER THROUGH THE LOADS FOR THE DAY
    const year = new Date();
    const createYear = year.getFullYear();

    const month = new Date();
    const createMonth = month.getMonth();
console.log(createMonth)
    const day = new Date();
    const createDay = day.getDate();

    const todaysDate = `${createYear}-${createDay}-${createMonth} `;

    const loadsArr = this.props.loads || [];
    const todaysLoads = loadsArr.filter((load) => {
      ///need to shorten the string length from 10 to 9
      let loadDate = load.date.slice(0, 9);
console.log(loadDate)
      if (loadDate === todaysDate) {
        return load;
      }
    });

    const selectLoad = (evt) => {
      //in order to update jumpNumber column we will need to make query to get current jump number and increment by 1
      this.props.getSingleLoad(evt.target.value, evt.target.id);
      this.setState({ selected: true, display: 'none' });

      // const currentJumpRecord = {};
      // this.props.addLoad();
      //this.props.history.push('/')
    };

    const confirmLoad = (evt) => {
      this.setState({ selected: false, display: 'inline-block' });
      let currentJump = {
        aircraft: this.props.singleLoad.aircraft,
        jumpDate: this.props.singleLoad.date,
        loadId: this.props.singleLoad.id,
        dropzoneId: this.props.singleLoad.dropzoneId,
      };
      console.log('Current Jump Date Type', typeof currentJump.date);
      this.props.addJumpRecord(currentJump, this.props.user.id);
    };

    const deSelect = (evt) => {
      this.setState({ selected: false, display: 'inline-block' });
    };

    console.log('todaysLoads', todaysLoads);
    const allLoads = (
      <div>
        <h1>Select Your Load</h1>
        <h1>--------------------------------</h1>
        {todaysLoads.map((load, idx) => {
          return (
            <div key={idx}>
              <h2>Departure Time: NEED TO ADD IN MODEL</h2>
              <p>Aircraft: {load.aircraft} </p>
              <p>Total Slots: {load.slots} </p>
              {/* TEMPORARY 'SLOTS FILLED'... SHOULD BE 'AVAILABLE SLOTS' AND RENDER THE REMAINING SLOTS */}
              <p>
                Slots Filled:
                {load.slotsFilled === null ? 0 : load.slotsFilled}
              </p>
              {/* TEMPORARY 'SLOTS FILLED'... SHOULD BE 'AVAILABLE SLOTS' AND RENDER THE REMAINING SLOTS */}
              <p>Status: {load.status}</p>
              {load.slots !== load.slotsFilled ? (
                <button
                  type="button"
                  style={{ display: this.state.display }}
                  id={load.id}
                  value={this.props.match.params.dropzoneId}
                  onClick={selectLoad}
                >
                  Select Load
                </button>
              ) : (
                <p>This Load is Full</p>
              )}
              <div>
                {this.state.selected ? (
                  <div>
                    <button type="button" onClick={confirmLoad}>
                      Confirm
                    </button>
                    <button type="button" onClick={deSelect}>
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
    return <div>{allLoads}</div>;
  }
}
const mapState = (state) => {
  return {
    jumpRecords: state.jumpRecords,

    user: state.auth,
    dropzones: state.dropzones.allDropzones,
    loads: state.loads.allLoads,
    singleLoad: state.loads.singleLoad,
  };
};

// const mapState = (state) => {
//   return {
//     jumpRecords: state.jumpRecords,
//     users: state.users.allUsers,
//     dropzones: state.dropzones.allDropzones,
//     loads: state.loads,
//     singleUser: state.users.singleUser,
//     singleDropzone: state.dropzones.singleDropzone
//   };
// };

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

export default connect(mapState, mapDispatch)(JoinLoad);

/*
onClick functionality of 'join load'
- send a post request to add this load to jump records
  -neccesary information from the load to fill jumpRecords columns
  -current users id as the userId in jumpRecords
  -dropzoneId from the load as the dropzoneId in jumpRecords
  -loadId from load as the loadId in jumpRecords


  FROM DZ View Perspective
  -call alljumprecords
  -filter by load id
 */
