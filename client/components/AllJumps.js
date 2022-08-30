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
} from "../store/jumpRecords";
import {
  thunk_fetchSingleDropzone,
  thunk_updateDropzone,
  thunk_createDropzone,
  thunk_deleteDropzone,
  thunk_fetchAllDropzones,
} from "../store/dropzones.js";
import {
  thunk_fetchAllLoads,
  thunk_createLoad,
  thunk_deleteLoad,
  thunk_fetchSingleLoad,
  thunk_updateLoad,
} from "../store/loads";

/**
 * REACT COMPONENT
 */
export class AllJumps extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.props.editJumpRecord({ aircraft: "NEWWWWWWWWW" }, 2, 3);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  render() {
    function alertMessage() {
      alert("This feature is not yet available!");
    }

    //let userId = this.props.user.id || '';

    let jumps = [this.props.jumpRecords][0] || [];
    let dropzones = [this.props.dropzones][0] || [];
    console.log("jumps: ", jumps);
    //console.log('dropzones', dropzones);
    console.log("props", this.props);

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
              <div className="frame-527">
                <button className="buttons">
                  <img
                    className="icon"
                    src="https://anima-uploads.s3.amazonaws.com/projects/630e6c3ef11c17b54f51d1b7/releases/630e84f46d0125081c2cb8ad/img/-icon@2x.svg"
                  />
                  <div className="button">Add</div>
                </button>
              </div>
              <img
                className="line-15"
                src="https://anima-uploads.s3.amazonaws.com/projects/630e6c3ef11c17b54f51d1b7/releases/630e84f46d0125081c2cb8ad/img/line-15@1x.svg"
              />
            </div>
            <div className="frame-523">
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
            </div>
          </div>
          <div className="frame-530">
            <div className="search-bar border-1px-mystic">
              <img
                className="icon"
                src="https://anima-uploads.s3.amazonaws.com/projects/630e6c3ef11c17b54f51d1b7/releases/630e6d34d90b3a5e2f76143d/img/icons@2x.svg"
              />
              <div className="search">Search</div>
            </div>
            <div className="buttons-1">
              <img
                className="icon"
                src="https://anima-uploads.s3.amazonaws.com/projects/630e6c3ef11c17b54f51d1b7/releases/630e84f46d0125081c2cb8ad/img/-icon-1@2x.svg"
              />
              <div className="button-1">Filter</div>
            </div>
          </div>


{/* //////////////////////// Manual TABLE COMMENTED OUT //////////////////////// */}

          {/* <table style={{display: 'flexBox'}}>
            <tr>
              <th style={{margin: '1rem'}}>JUMP NUMBER</th>
              <th style={{margin: '1rem'}}>DATE</th>
              <th style={{margin: '1rem'}}>LOCATION</th>
              <th style={{margin: '1rem'}}>JUMP TICKET</th>
              <th style={{margin: '1rem'}}>STYLE</th>
            </tr>
            {jumps.reverse().map((jump, index) => {
              return (
                <tr key={index}>
                  <td>{jump.jumpNumber}</td>
                  <td>access date</td>
                  <td>access dropzone name</td>
                  <td>{jump.exitAltitude > 7000 ? 'Full Altitude' : `Hop 'n Pop`}</td>
                  <td>{jump.jumpType}</td>
                </tr>
              )
            })}
           
          </table> */}

          {/* //////////////////////// Manual TABLE COMMENTED OUT //////////////////////// */}

          <table className="table-1">
            <tr className="column-1">
              <th className="head border-1px-mystic">
                <th className="jump-number manrope-semi-bold-storm-gray-14px">
                  JUMP NUMBER
                </th>
              </th>
                  {jumps.reverse().map((jump, index) => {
                    return (
              <div className="head-1 border-1px-mystic">
                <div className="frame-52">
                      <div className="number-2 manrope-normal-mirage-16px" key={index}>{jump.jumpNumber}</div>

                      </div>
                    </div>
                    )
                  })}
              


            </tr>
            <tr className="column-2">
              <th className="head border-1px-mystic">
                <div className="location manrope-semi-bold-storm-gray-14px">
                  LOCATION
                </div>
              </th>
              {jumps.reverse().map((jump, index) => {
                return (
              <div className="head-1 border-1px-mystic">
                <div className="skydive-the-ranch manrope-normal-mirage-16px" key={index}>
                  need to access dz name
                </div>
              </div>

                )
              })}



            </tr>
            <tr className="column">
              <th className="head-4 border-1px-mystic">
                <div className="place manrope-semi-bold-storm-gray-14px">DATE</div>
                <img
                  className="icon"
                  src="https://anima-uploads.s3.amazonaws.com/projects/630e6c3ef11c17b54f51d1b7/releases/630e7086917e60f152cf697a/img/icons-1@2x.svg"
                />
              </th>
              {jumps.reverse().map((jump, index) => {
                return (
              <div className="head-1 border-1px-mystic" key={index}>
                <div className="date manrope-normal-mirage-16px">access date</div>
              </div>

                )
              })}
              


            </tr>
            <tr className="column">
              <th className="head-2 border-1px-mystic">
                <div className="jump-ticket manrope-semi-bold-storm-gray-14px">
                  JUMP TYPE
                </div>
              </th>
              {jumps.reverse().map((jump, index) => {
                return (
              <div className="head-1 border-1px-mystic" key={index}>
                <div className="full-altitude manrope-semi-bold-mirage-16px">
                  {jump.exitAltitude > 7000 ? 'Full Altitude' : `Hop 'n Pop`}
                </div>
              </div>

                )
              })}
            </tr>


            
            <tr className="column">
              <th className="head-2 border-1px-mystic">
                <div className="type manrope-semi-bold-storm-gray-14px">STYLE</div>
              </th>
              {jumps.reverse().map((jump, index) => {
                return (
              <div className="head-1 border-1px-mystic" key={index}>
                <div className="belly manrope-semi-bold-mirage-16px">{jump.jumpType}</div>
              </div>

                )
              })}
              


            </tr>
            <tr className="column">
              <div className="head-5 border-1px-mystic"></div>

                {jumps.reverse().map((jump, index) => {
                  return (
                    <>
                    <div className="head-6 border-1px-mystic">
                    <div className="light-button">
                      <div className="edit valign-text-middle manrope-normal-storm-gray-16px">
                        Edit
                      </div>
                    </div>
                
              </div>
                    </>
                  )
                })}
              


            </tr>
          </table> 
        </div>

         <div>
          {jumps.length === 0 ? (
            <h2>You haven't made any skydives!</h2>
          ) : (
            <span />
          )}


{/* //////////////////////// ORIGINAL JUMP RECORD CARDS //////////////////////// */}

          {/* <div className="right-bottom-column" id="jumps">
            <div className="right-bottom-column-left-side">
              <h2 style={{ marginBottom: "1rem" }}>Your recent activity</h2>
              {jumps.map((jump, idx) => {
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
                      <h4>{jump.location}</h4>
                      <h4>Aircraft: {jump.aircraft}</h4>
                      <button className="view-jump-details">
                        <Link to={`/jumps/${jump.id}`}>View Jump Details</Link>
                      </button>
                    </div>
                    <h4 className="jump-number">Jump #{jump.jumpNumber}</h4>
                  </div>
                );
              })}
            </div>
           
          </div> */}

          {/* //////////////////////// ORIGINAL JUMP RECORD CARDS //////////////////////// */}
        </div>
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
