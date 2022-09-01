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


    //FOR PAGINATIONp
    // this.state = {
    //   pageNum: 0,
    // };


    this.handleChange = this.handleChange.bind(this);
  }
  
  componentDidMount() {
    let userId = this.props.users.id
    this.props.getJumpRecords(userId);
    this.props.getDropzones();
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });


  }

  render() {
    function alertMessage() {
      alert('This feature is not yet available!');
    }

    //GETS USER'S MOST RECENT 5 JUMPS

    let jumps = [this.props.jumpRecords][0] || [];
    let dropzones = this.props.dropzones.allDropzones || [];
    // console.log('dropzones',dropzones)

    jumps.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });

   

    let numbersArr = []
    for (let i = 0; i < jumps.length; i++) {
      numbersArr.push(i + 1)
    }

    console.log(jumps)
    console.log(numbersArr)


    let recentFiveJumps = jumps.slice(0, 6);
    console.log(recentFiveJumps.reverse())
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
            >

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
                let currentDropzone = {};
                let currentNumber = 0
                for (let i = 0; i < dropzones.length; i++) {
                  if (dropzones[i].id === jump.dropzoneId) {
                    currentDropzone = dropzones[i]
                  }
                }

                // for (let i = 0; i < numbersArr.length; i++) {
                //   if (numbersArr.indexOf(numbersArr[i]) === index + 1) {
                //     currentNumber = numbersArr[i]
                //   }
                // }

                return (
                  <tr key={index}>
                    <td>{jump.jumpNumber}</td>

                    {/* <td>{currentNumber}</td> */}
                    <td>{jump.jumpDate}</td>
                    <td>{currentDropzone.name}</td>
                    <td>
                      {jump.exitAltitude > 7000
                        ? "Full Altitude"
                        : `Hop 'n Pop`}
                    </td>
                    <td>{jump.jumpType}</td>
                    <td style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                      <button className='edit-btn' title="edit"><i className="fa-solid fa-pen-to-square"/></button>
                      <Link to={`/jumps/${jump.id}`}>
                      <button className="edit-btn" title="view" style={{margin: '1rem 1rem'}}><i className="fa-solid fa-eye"/></button>
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
  };
};

export default connect(mapState, mapDispatch)(AllJumps);
