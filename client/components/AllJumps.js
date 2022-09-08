import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { me } from '../store/auth';

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
  thunk_adminFetchAllLoads,
} from '../store/loads';

/**
 * REACT COMPONENT
 */
export class AllJumps extends React.Component {
  constructor(props) {
    super(props);

    //FOR PAGINATIONp
    this.state = {
      page: 1,
      startIdx: 0,
      endIdx: 8,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    let userId = this.props.users.id;
    this.props.getJumpRecords(userId);
    this.props.getDropzones();
    this.props.getAllAdminLoads();
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  renderHelper = (pageNum) => {
    let end = pageNum * 8;
    let start = end - 8;
    console.log('before', this.state.startIdx, this.state.endIdx);
    this.setState({ endIdx: pageNum * 8 });
    this.setState({ startIdx: start });

    console.log('this.state after render helper', this.state);
  };

  dropdownChange = (evt) => {
    let num = evt.target.value;
    let number = Number(num);
    this.setState({ page: number });
    this.renderHelper(number);
  };

  render() {
    console.log(this.state);

    function alertMessage() {
      alert('This feature is not yet available!');
    }

    //GETS USER'S MOST RECENT 5 JUMPS

    let jumps = [this.props.jumpRecords][0] || [];
    let dropzones = this.props.dropzones.allDropzones || [];
    // console.log('dropzones',dropzones)

    let sortedArr = jumps.sort((a, b) => {
      return a.jumpNumber - b.jumpNumber;
    });
    sortedArr.reverse();
    let numbersArr = [];
    for (let i = 0; i < jumps.length; i++) {
      numbersArr.push(i + 1);
    }

    console.log('jumps', sortedArr);
    // console.log(numbersArr);
    // let page = 1;
    // let startIdx = 0;
    // let endIdx = 6;

    let recentSixJumps = jumps.slice(this.state.startIdx, this.state.endIdx);
    console.log('sorted', sortedArr);
    //PAGINATION FUNCTIONS
    let numOfPages = Math.ceil(jumps.length / 8);
    let pagesArr = [];
    for (let i = 0; i < numOfPages; i++) {
      pagesArr.push(i + 1);
    }

    // function renderHelper(pageNum) {
    //   endIdx = pageNum * 7 - 1;
    //   startIdx = endIdx - 6;
    // }

    // function dropdownChange(evt) {
    //   console.log('before', startIdx, endIdx);
    //   page = evt.target.value;
    //   let pageNum = Number(page);
    //   renderHelper(pageNum);
    //   console.log('after', startIdx, endIdx);
    // }

    //////FOR JUMPNUM (SHOULD WORK WITH PAGINATION TOO)//////
    /*
    - Use pointers like in a linked list;
    
    - Order array of jumps from most recent date to least recent
    - Loop through entire jumps array left to right
    - Create a holder variable that is set to array.length - 1 'jumpNum = array.length - 1'
    - On first iteration, subtract current index from jumpNum 'jumpNum - currentIndex'
    - Should give us accurate jump numbers

    */

    console.log('adminLoads', this.props.loads.allLoads);
    return (
      <div className="flex-right">
        <div className="table screen">
          <div className="frame-529">
            <div className="frame-528">
              <div className="frame-526">
                <p id="titleLog">Logbook</p>
                <div className="view-all-past-skydiving-jump-logs">
                  All skydiving jump logs
                </div>
              </div>
              <Link to={`/add`}>
                <div className="frame-527">
                  <button className="add-btn">
                    <img
                      className="icon"
                      src="https://anima-uploads.s3.amazonaws.com/projects/630e6c3ef11c17b54f51d1b7/releases/630e84f46d0125081c2cb8ad/img/-icon@2x.svg"
                    />
                    <div className="button">Add</div>
                  </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="frame-530">
            <input
              className="search-bar border-1px-mystic search"
              type="search"
              placeholder="Search"
            ></input>
            <button className="buttons-1 filter-btn">
              <img
                className="icon"
                src="https://anima-uploads.s3.amazonaws.com/projects/630e6c3ef11c17b54f51d1b7/releases/630e84f46d0125081c2cb8ad/img/-icon-1@2x.svg"
              />
              <div className="button-1">Filter</div>
            </button>
          </div>

          {/* //////////////////////// Manual TABLE COMMENTED OUT //////////////////////// */}

          <table>
            <thead>
              <tr>
                <th>JUMP NUMBER</th>
                <th>DATE</th>
                <th>LOCATION</th>
                <th>JUMP TYPE</th>
                <th>STYLE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {recentSixJumps.map((jump, index) => {
                let currentDropzone = {};
                let currentNumber = jumps.length - index;
                for (let i = 0; i < dropzones.length; i++) {
                  if (dropzones[i].id === jump.dropzoneId) {
                    currentDropzone = dropzones[i];
                  }
                }
                let dateSplice = '';
                for (let i = 0; i < jump.jumpDate.length; i++) {
                  let datesArr = jump.jumpDate.split(' ');
                  // console.log('sdfjasdf', datesArr);
                  dateSplice = datesArr[0].toString();
                }

                let loadTime = '';
                let currentLoad = {};
                for (let i = 0; i < this.props.loads.allLoads.length; i++) {
                  let load = this.props.loads.allLoads[i];
                  currentLoad = load;
                  if (load.id === jump.loadId) {
                    loadTime = currentLoad.departureTime;
                  }
                }

                // console.log('dateSplice', jump.jumpDate.slice(0, 9));

                return (
                  <tr key={index} style={{ lineHeight: '20px' }}>
                    <td>{jump.jumpNumber}</td>

                    {/* <td>{currentNumber}</td> */}
                    <td>
                      {loadTime !== null
                        ? `${dateSplice} at ${loadTime}`
                        : `${dateSplice}`}
                    </td>
                    <td>{currentDropzone.name}</td>
                    <td>
                      {jump.exitAltitude > 7000
                        ? 'Full Altitude'
                        : `Hop 'n Pop`}
                    </td>
                    <td>{jump.jumpType}</td>
                    <td
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                      }}
                    >
                      <Link to={`/edit/${jump.id}`}>
                        <button className="edit-btn" title="edit">
                          <i className="fa-solid fa-pen-to-square" />
                        </button>
                      </Link>
                      <Link to={`/jumps/${jump.userId}/${jump.id}`}>
                        <button
                          className="edit-btn"
                          title="view"
                          style={{ margin: '1rem 1rem' }}
                        >
                          <i className="fa-solid fa-eye" />
                        </button>
                      </Link>
                      {/* <button style={{backgroundColor: 'red'}}><i className="fa-solid fa-trash-can"/></button> */}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div
            id="pagination"
            style={{ display: 'flex', flexDirection: 'row', marginLeft: '40%' }}
          >
            <p style={{ width: '164px', marginRight: '-79px' }}>Select Page</p>
            <select
              onChange={this.dropdownChange}
              style={{
                borderRadius: '10px',
                marginLeft: '47%',
                width: '4rem',
                padding: '1px 8px',
              }}
            >
              {pagesArr.map((page) => {
                return <option value={Number(page)}>{page}</option>;
              })}
            </select>
          </div>

          {/* //////////////////////// Manual TABLE COMMENTED OUT //////////////////////// */}
        </div>

        {/* <form onChange={this.handleChange}>
                <select>
                  {pagesArr.map((pageNum) => {
                    return (
                      <option
                        name="pageNum"
                        value={pageNum}
                        onChange={this.handleChange}
                      >
                        {pageNum}
                      </option>
                    );
                  })}
                </select>
              </form> */}
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
    getAllAdminLoads: () => dispatch(thunk_adminFetchAllLoads()),
  };
};

export default connect(mapState, mapDispatch)(AllJumps);
