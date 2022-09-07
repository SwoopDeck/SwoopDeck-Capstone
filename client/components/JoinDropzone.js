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
export class JoinDropzone extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.selectDropzone = this.selectDropzone.bind(this);
  }
  componentDidMount() {
    this.props.getDropzones();
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  selectDropzone(evt) {
    console.log('dropzone id', evt.target.id);
    this.props.history.push(`/${evt.target.id}/loads`);
  }

  render() {
    const { selectDropzone } = this;
    const dropzones = this.props.dropzones || [];
    // console.log(dropzones);
    // const allDropzones = (
    //   <div>
    //     <h1>Select Your Dropzone</h1>
    //     <h1>--------------------------------</h1>
    //     {dropzones.map((dropzone, idx) => {
    //       return (
    //         <div key={idx}>
    //           <h2>Dropzone: {dropzone.name}</h2>
    //           <h3>Address: {dropzone.address}</h3>
    //           <button type="button" id={dropzone.id} onClick={selectDropzone}>
    //             Select Dropzone
    //           </button>
    //         </div>
    //       );
    //     })}
    //   </div>
    // );
    // return <div>{allDropzones}</div>;

    return (
      <div className='flex-right'>





<div className="table screen">
          <div className="frame-529">
            <div className="frame-528">
              <div className="frame-526">
                <p id="titleLog">Select A Dropzone</p>
                <div className="view-all-past-skydiving-jump-logs">
                  All available dropzones
                </div>
              </div>
              {/* <div className="frame-527">
                <button className="add-btn">
                  <img
                    className="icon"
                    src="https://anima-uploads.s3.amazonaws.com/projects/630e6c3ef11c17b54f51d1b7/releases/630e84f46d0125081c2cb8ad/img/-icon@2x.svg"
                  />
                  <div className="button">Add</div>
                </button>
              </div> */}
            </div>
          </div>
          {/* <div className="frame-530">
            <input
              className="search-bar border-1px-mystic search"
              type="search"
              placeholder="Search"/>
            <button className="buttons-1 filter-btn">
              <img
                className="icon"
                src="https://anima-uploads.s3.amazonaws.com/projects/630e6c3ef11c17b54f51d1b7/releases/630e84f46d0125081c2cb8ad/img/-icon-1@2x.svg"
              />
              <div className="button-1">Filter</div>
            </button>
          </div> */}


          <table>
            <thead>
              <tr>
                <th>NAME</th>
                <th>Address</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {dropzones.map((dropzone, index) => {
                return (
                  <tr key={index}>
                    <td>{dropzone.name}</td>
                    <td>{dropzone.address}</td>

                    <td style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                      {/* <Link to={`/users/${user.id}`} > */}
                      
                        <button className="edit-btn" style={{margin: '1rem 1rem'}} id={dropzone.id} onClick={selectDropzone}>Select</button>
                        {/* </Link> */}
                      {/* <button 
                      style={{backgroundColor: 'red'}}
                      onClick={() => {
                        this.props.deleteUser(this.props.match.params.id);
                        this.props.history.push(`/users`);
                      }}
                      ><i className="fa-solid fa-trash-can"/></button> */}
                    </td>
                  </tr>
                );
              })}
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
    user: state.auth,
    dropzones: state.dropzones.allDropzones,
    loads: state.loads,
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

export default connect(mapState, mapDispatch)(JoinDropzone);
