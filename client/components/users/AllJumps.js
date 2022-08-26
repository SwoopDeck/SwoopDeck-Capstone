// import React from "react";
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import { Thunk_fetchAllJumpRecords, Thunk_deleteJump } from "../store/jumpRecords";
// import { me } from "../store/auth";

// export class AllJumps extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.state = {};
//   }
//   componentDidMount() {
//     let userId = this.props.user.id
//     this.props.getJumps(userId);
//   }

//   render() {
//     function alertMessage() {
//       alert('This feature is not yet available!')
//     }

//     let userId = this.props.user.id || ''

//     let jumps = [this.props.jumpRecords] || []
//     console.log('jumps: ', jumps);
//     // console.log(this.props)

//     return (
//       <div className="flex-right">
//         <div>
//           <div className="right-top-column">
//             <div className="total-freefall-time-integers">3 hours 21 minutes</div>
//         <div className="total-freefall-time">Total FreeFall Time</div>
//           </div>

//         {jumps.length === 0 ? <h2>You haven't made any skydives!</h2> : <span />}

//         <div className="right-bottom-column" id="jumps">
//           <div className="right-bottom-column-left-side">

//             <h2 style={{marginBottom: '1rem'}}>Your recent activity</h2>
//           {jumps.map((jump) => {
//             return (
//               <div className="recent-jumps" key={jump.id}>
//                 <Link to={`/jumps/${jump.id}`}>
//                   <img height="100vh" width="100vh" src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.kHAtTjGvPMSeFGe_bZUGFwHaHa%26pid%3DApi&f=1' />
//                 </Link>
//                 <div className="recent-jump-info">
//                   <h4>{jump.location}</h4>
//                   <h4>Aircraft: {jump.aircraft}</h4>
//                   <button className="view-jump-details">
//                     <Link to={`/jumps/${jump.id}`}>View Jump Details</Link>
//                   </button>
//                   {/* <button
//                     onClick={() => {
//                       this.props.delete(this.props.user.id, jump.id);
//                     }}
//                     >
//                     Remove Jump
//                   </button> */}
//                 </div>
//                     <h4 className="jump-number">Jump #{jump.jumpNumber}</h4>
//                 </div>
//             );
//           })}
//           </div>
//           <div className="right-bottom-column-right-side">
//             <h2 style={{marginBottom: '1rem'}}>Add New Jump</h2>
//             <button className="recent-jumps"           onClick={(e) => {
//             e.preventDefault();
//             window.location.href = "http://localhost:8080/add";
//           }}>Add manually</button>
//             <button className="recent-jumps" onClick={alertMessage}>Record</button>
//             <button className="recent-jumps" onClick={alertMessage}>Import</button>

//           </div>
//         </div>
//         </div>
//       </div>
//     );
//   }
// }
// const mapState = (state) => {
//   return {
//     jumpRecords: state.jumpRecords,
//     user: state.auth,
//   };
// };
// const mapDispatch = (dispatch) => {
//   return {
//     getJumps: (userId) => dispatch(Thunk_fetchAllJumpRecords(userId)),
//     delete: (userId, jumpId) => dispatch(Thunk_deleteJump(userId, jumpId)),
//   };
// };

// export default connect(mapState, mapDispatch)(AllJumps);

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { me } from '../../store/auth';
import {
  Thunk_fetchAllJumpRecords,
  Thunk_fetchSingleJump,
  Thunk_updateJump,
  Thunk_deleteJump,
  Thunk_createJump,
} from '../../store/jumpRecords';
import {
  thunk_fetchSingleDropzone,
  thunk_updateDropzone,
  thunk_createDropzone,
  thunk_deleteDropzone,
  thunk_fetchAllDropzones,
} from '../../store/dropzones.js';
import {
  thunk_fetchAllLoads,
  thunk_createLoad,
  thunk_deleteLoad,
  thunk_fetchSingleLoad,
  thunk_updateLoad,
} from '../../store/loads';

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
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    //this.props.getDropzone();
    //this.props.addDropzone({name:'thenewDROPZONE',address:'yourmomshouse', phoneNumber:'deez'})
    //this.props.editDropzone(4,{ name:'asdfas' , address:'hello', phoneNumber:'23424324'})
    //this.props.deleteDropzone(4)
    //this.props.getDropzones()

    //this.props.getLoads(1)
    //this.props.getSingleLoad(1,1)
    //this.props.addLoad({dropzoneId: 1, aircraft: 'cessna', slots: 5, slotFilled: 2, isFull: false, status: 'on time'},1)
    //this.props.deleteLoad(1, 4)
    //this.props.editLoad(1,1,{aircraft:'cessna'})

    //this.props.getJumpRecords(3)
    //this.props.getSingleJumpRecord(2, 3)
    //this.props.addJumpRecord({},3)
    //this.props.deleteJumpRecord(3,21) //NEED TO BE VERY SPECIFIC
    this.props.editJumpRecord({ aircraft: 'NEWWWWWWWWW' }, 2, 3);
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

    //let userId = this.props.user.id || '';

    let jumps = [this.props.jumpRecords][0] || [];
    let dropzones = [this.props.dropzones][0] || [];
    console.log('jumps: ', jumps);
    //console.log('dropzones', dropzones);
    //console.log('props', this.props);

    return (
      <div className="flex-right">
        <div>
          <div className="right-top-column">
            <div className="total-freefall-time-integers">
              3 hours 21 minutes
            </div>
            <div className="total-freefall-time">Total FreeFall Time</div>
          </div>

          {jumps.length === 0 ? (
            <h2>You haven't made any skydives!</h2>
          ) : (
            <span />
          )}

          <div className="right-bottom-column" id="jumps">
            <div className="right-bottom-column-left-side">
              <h2 style={{ marginBottom: '1rem' }}>Your recent activity</h2>
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
                      {/* <button
                  onClick={() => {
                    this.props.delete(this.props.user.id, jump.id);
                  }}
                  >
                  Remove Jump
                </button> */}
                    </div>
                    <h4 className="jump-number">Jump #{jump.jumpNumber}</h4>
                  </div>
                );
              })}
            </div>
            <div className="right-bottom-column-right-side">
              <h2 style={{ marginBottom: '1rem' }}>Add New Jump</h2>
              <button
                className="recent-jumps"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = 'http://localhost:8080/add';
                }}
              >
                Add manually
              </button>
              <button className="recent-jumps" onClick={alertMessage}>
                Record
              </button>
              <button className="recent-jumps" onClick={alertMessage}>
                Import
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// const mapState = (state) => {
//   return {
//     jumpRecords: state.jumpRecords,
//     users: state.auth,
//     dropzones: state.dropzones,
//     loads: state.loads,
//   };
// };

const mapState = (state) => {
  return {
    jumpRecords: state.jumpRecords,
    users: state.users.allUsers,
    dropzones: state.dropzones.allDropzones,
    loads: state.loads,
    singleUser: state.users.singleUser,
    singleDropzone: state.dropzones.singleDropzone
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
