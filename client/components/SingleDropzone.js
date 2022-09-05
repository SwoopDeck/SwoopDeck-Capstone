import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { me } from '../store/auth';
import Sidebar from './Sidebar';
// import EditItem from "./EditItem";
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
import { Thunk_fetchUser } from '../store/allusers';

/**
 * REACT COMPONENT
 */
class SingleUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      phoneNumber: "",
    };
  }
  
  componentDidMount() {
    this.props.getSingleDropzone(this.props.match.params.id);
    // this.props.getDropzones();
  }

  render() {
    const { id, name, address, phoneNumber } = this.props.singleDropzone;
    // console.log('PROPS',this.props)
    return (
      <div className='flex-right'>
        
        
        
        
        
        <div className="basic-info-group">
            <div className="edit-account-title-container">
              <div className="frame-528">
                <div className="frame-526">
                  <p id="titleLog">{name}</p>
                  <div className="view-all-past-skydiving-jump-logs">
                    View dropzone details
                  </div>
                </div>
                <div className="frame-527">
                  <button id="cancel-btn"
                  onClick={() => {
                    this.props.getDropzones();
                    this.props.history.push(`/dropzones`);
                  }}>Go back</button>
                  <button className="save-btn"
                  onClick={() => {
                    this.props.getSingleDropzone(this.props.match.params.id);
                    this.props.history.push(`/dropzones/edit/${id}`);
                  }}>Edit</button>
                </div>
              </div>
            </div>
            <div className="rectangle-21"></div>
            <div className="flex-row-1">
              <div className="flex-col-left">
                <div className="first-name manrope-normal-shark-14px">NAME</div>

                <input
                  className="search-bar border-1px-mystic search"
                  type="text"
                  name="name"
                  placeholder={name}
                  value={this.state.name}
                  onChange={this.handleChange}
                />

                <div className="frame-1">
                  <div className="frame-2">
                    <div className="email manrope-normal-shark-14px">
                      ADDRESS
                    </div>
                  </div>
                </div>
                <input
                  className="search-bar border-1px-mystic search"
                  type="text"
                  name="address"
                  placeholder={address}
                  value={this.state.address}
                  onChange={this.handleChange}
                />
                <input
                  className="search-bar border-1px-mystic search"
                  style={{margin: '1rem 0'}}
                  type="text"
                  placeholder="State"
                />
                <input
                  className="search-bar border-1px-mystic search"
                  type="text"
                  placeholder="Zip Code"
                />
              </div>

              <div className="flex-col-right">
                <div className="first-name manrope-normal-shark-14px">
                  PHONE NUMBER
                </div>

                <input
                  className="search-bar border-1px-mystic search"
                  type="text"
                  name="phoneNumber"
                  placeholder={phoneNumber}
                  value={this.state.phoneNumber}
                  onChange={this.handleChange}
                />

              </div>
            </div>
          </div>
        
        
        {/* //////////////////////////// ORIGINAL FORM BELOW //////////////////////////// */}
        
        {/* <div key={id}>
          <h2>{name}</h2>
          <p>{address} </p>
          <p>{phoneNumber} </p>

          <button
            onClick={() => {
              this.props.getSingleDropzone(this.props.match.params.id);
              this.props.history.push(`/dropzones/edit/${id}`);
              // this.props.getDropzones()
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              this.props.deleteDropzone(id);
              // this.props.getDropzones();
              this.props.history.push(`/dropzones`);
            }}
          >
            Delete
          </button>
          <button
            onClick={() => {
              this.props.getDropzones();
              this.props.history.push(`/dropzones`);
            }}
          >
            Go back
          </button>
          <hr />
          <hr />
        </div> */}

        {/* //////////////////////////// ORIGINAL FORM ABOVE //////////////////////////// */}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    jumpRecords: state.jumpRecords,
    users: state.users.allUsers,
    dropzones: state.dropzones.allDropzones,
    loads: state.loads,
    singleUser: state.users.singleUser,
    singleDropzone: state.dropzones.singleDropzone,
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

    //////////////BELOW IS FOR DROPZONE//////////////////////////

    editDropzone: (dropzoneId, dropzone) =>
      dispatch(thunk_updateDropzone(dropzoneId, dropzone)), //WOKRING//
    getDropzones: () => dispatch(thunk_fetchAllDropzones()), //WOKRING//
    deleteDropzone: (dropzoneId) => dispatch(thunk_deleteDropzone(dropzoneId)), //WOKRING//
    addDropzone: (DROPZONE) => dispatch(thunk_createDropzone(DROPZONE)), //WORKING//
    getSingleDropzone: (dropzoneId) =>
      dispatch(thunk_fetchSingleDropzone(dropzoneId)), //WORKING//

    /////////////////BELOW IS FOR LOADS/////////////////////////////

    editLoad: (dropzoneId, loadId, LOAD) =>
      dispatch(thunk_updateLoad(dropzoneId, loadId, LOAD)), //WORKING//
    getLoads: (dropzoneId) => dispatch(thunk_fetchAllLoads(dropzoneId)), //WORKING//
    deleteLoad: (dropzoneId, loadId) =>
      dispatch(thunk_deleteLoad(dropzoneId, loadId)), //WORKING//
    addLoad: (LOAD, dropzoneId) => dispatch(thunk_createLoad(LOAD, dropzoneId)), //WORKING//
    getSingleLoad: (dropzoneId, loadId) =>
      dispatch(thunk_fetchSingleLoad(dropzoneId, loadId)), //WORKING//

    /////////////////BELOW IS FOR ADMINS/////////////////////////////

    getSingleUser: (id) => dispatch(Thunk_fetchUser(id)),
  };
};

export default connect(mapState, mapDispatch)(SingleUser);
