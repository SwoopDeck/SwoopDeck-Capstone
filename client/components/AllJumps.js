import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { me } from "../store/auth";

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
export class AllJumps extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {
    //jumpNumber: "",
    // location: "",
    // aircraft: "",
    // equipment: "",
    // exitAltitude: 14000,
    // pullAltitude: 4000,
    // freeFallTime: 60,
    // jumpers: "",
    // description: "",
    // jumpType: "",
    //};

    //FOR PAGINATION
    // this.state = {
    //   pageNum: 0,
    // };


    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {

  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });

    // this.setState({
    //   pageNum: evt.target.value,
    // });
  }

  render() {
    function alertMessage() {
      alert('This feature is not yet available!');
    }

    //GETS USER'S MOST RECENT 5 JUMPS
    let jumps = this.props.jumpRecords || [];
    jumps.sort((a, b) => {
      return a.jumpNumber - b.jumpNumber;
    });
    let recentFiveJumps = jumps.slice(0, 5);

    //PAGINATION FUNCTIONS
    // let numOfPages = Math.ceil(jumps.length / 5);
    // let pagesArr = [];
    // for (let i = 0; i < numOfPages; i++) {
    //   pagesArr.push(i + 1);
    // }
    // let startIdx = 0;
    // let endIdx = 0;
    // function renderHelper(pageNum) {
    //   endIdx = pageNum * 5 - 1;
    //   startIdx = endIdx - 4;
    // }
    // let page = 1;
    // function dropdownChange(evt) {
    //   page = evt.target.name;
    //   console.log(evt.target.name);
    // }

    let userId = this.props.users.id


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
              {/* <img
                className="line-15"
                src="https://anima-uploads.s3.amazonaws.com/projects/630e6c3ef11c17b54f51d1b7/releases/630e84f46d0125081c2cb8ad/img/line-15@1x.svg"
              /> */}
            </div>
            {/* <div className="frame-523">
              <div className="frame-524">
                <div className="frame-522">
                  <div className="overview manrope-semi-bold-mirage-16px">
                    Overview
                  </div>
                </div>
                <div className="frame-523-1"></div>
              </div>
              <img
                className="line-16"
                src="https://anima-uploads.s3.amazonaws.com/projects/630e6c3ef11c17b54f51d1b7/releases/630e6d34d90b3a5e2f76143d/img/line-16@2x.svg"
              />
            </div> */}
          </div>
          <div className="frame-530">
            <input
              className="search-bar border-1px-mystic search"
              type="search"
              placeholder="Search"
            >
              {/* <img
                className="icon"
                src="https://anima-uploads.s3.amazonaws.com/projects/630e6c3ef11c17b54f51d1b7/releases/630e6d34d90b3a5e2f76143d/img/icons@2x.svg"
              />
              <div className="search">Search</div> */}
            </input>
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
              {jumps.reverse().map((jump, index) => {
                return (
                  <tr key={index}>
                    <td>{jump.jumpNumber}</td>
                    <td>access date</td>
                    <td>access dropzone name</td>
                    <td>
                      {jump.exitAltitude > 7000
                        ? "Full Altitude"
                        : `Hop 'n Pop`}
                    </td>
                    <td>{jump.jumpType}</td>
                    <td style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                      <button className='edit-btn'><i className="fa-solid fa-pen-to-square"/></button>
                      <Link to={`/jumps/${jump.id}`}>
                      <button className="edit-btn" style={{margin: '1rem 1rem'}}><i className="fa-solid fa-eye"/></button>
                      </Link>
                      {/* <button style={{backgroundColor: 'red'}}><i className="fa-solid fa-trash-can"/></button> */}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* //////////////////////// Manual TABLE COMMENTED OUT //////////////////////// */}

        </div>


          {/* //////////////////////// ORIGINAL JUMP RECORD CARDS //////////////////////// */}

          {/* <div className="right-bottom-column" id="jumps">
            <div className="right-bottom-column-left-side">
              <h2 style={{ marginBottom: '1rem' }}>Your recent activity</h2>
              {recentFiveJumps.map((jump, idx) => {
                const aircraft = jump.aircraft;
                const jumpNum = jumps.length - idx;
                return (
                  <div className="recent-jumps" key={idx}>
                    <Link to={`/jumps/${jump.id}`}>
                      <img
                        height="100vh"
                        width="100vh"
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.kHAtTjGvPMSeFGe_bZUGFwHaHa%26pid%3DApi&f=1"
                      />
                    </Link>
                    <div className="recent-jump-info">
                      {/* <h4>{jump.location}</h4> */}
                      <h4>Aircraft: {aircraft}</h4>
                      <button className="view-jump-details">
                        <Link to={`/jumps/${userId}/${jump.id}`}>View Jump Details</Link>
                      </button>
                    </div>
                    <h4 className="jump-number">Jump #{jumpNum}</h4>
                  </div>
                );
              })}
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
          </div> */}
          {/* //////////////////////// ORIGINAL JUMP RECORD CARDS //////////////////////// */}
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

export default connect(mapState, mapDispatch)(AllJumps);
