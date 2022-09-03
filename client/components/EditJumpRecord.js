import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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

export class EditJumpRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jumpNumber: "",
      jumpDate: "",
      aircraft: "",
      equipment: "",
      exitAltitude: 14000,
      pullAltitude: 4000,
      freeFallTime: 60,
      jumpers: 1,
      description: "",
      jumpType: "belly",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getSingleJumpRecord(this.props.user.id, this.props.match.params.jumpId)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    // this.props.updateUser({ ...this.props.user, ...this.state }) //NEED TO FIND THE updateUser THUNK 
  }

  render() {
    let jump = this.props.jumpRecords[0] || {};
console.log(jump)
    return (
      <div className="flex-right">
      <h1 style={{ marginLeft: "2rem", marginTop: "2rem" }}>
        Select jump type
      </h1>
      <div className="select-jump-type-container" onClick={this.handleChange}>
        <button className="jump-type" name="jumpType" value="belly">
          Belly
        </button>
        <button className="jump-type" name="jumpType" value="angle">
          Angle
        </button>
        <button className="jump-type" name="jumpType" value="head up">
          Head up
        </button>
        <button className="jump-type" name="jumpType" value="head down">
          Head down
        </button>
        <button className="jump-type" name="jumpType" value="formation">
          Formation
        </button>
        <button className="jump-type" name="jumpType" value="freefly">
          FreeFly
        </button>
        <button className="jump-type" name="jumpType" value="high altitude">
          High altitude
        </button>
        <button className="jump-type" name="jumpType" value="aff">
          AFF
        </button>
        <button className="jump-type" name="jumpType" value="balloon">
          Balloon
        </button>
        <button className="jump-type" name="jumpType" value="heli">
          Heli
        </button>
        <button className="jump-type" name="jumpType" value="high pull">
          High pull
        </button>
        <button className="jump-type" name="jumpType" value="crw">
          CRW
        </button>
      </div>
      <form id="jump-form-container">
        {/* <div>JUMP NUMBER:
        </div> */}
        <div className="jump-form-div">
          <label> Jump number</label>
          <input
            className="jump-info-field"
            type="text"
            placeholder={jump.jumpNumber}
            name="jumpNumber"
            value={this.state.jumpNumber}
            onChange={this.handleChange}
          />
        </div>
        <div className="jump-form-div">
          <label> JUMP DATE</label>
          <input
            className="jump-info-field"
            type="date"
            placeholder={jump.jumpDate}
            name="jumpDate"
            value={this.state.jumpDate}
            onChange={this.handleChange}
          />
        </div>
        <div className="jump-form-div">
          <label> Aircraft</label>
          <input
            className="jump-info-field"
            type="text"
            placeholder={jump.aircraft}
            name="aircraft"
            value={this.state.aircraft}
            onChange={this.handleChange}
          />
        </div>
        <div className="jump-form-div">
          <label> Equipment</label>
          <input
            className="jump-info-field"
            type="text"
            placeholder={jump.equipment}
            name="equipment"
            value={this.state.equipment}
            onChange={this.handleChange}
          />
        </div>
        <div className="jump-form-div">
          <label> Exit altitude</label>
          <input
            className="jump-info-field"
            type="text"
            placeholder={jump.exitAltitude}
            name="exitAltitude"
            value={this.state.exitAltitude}
            onChange={this.handleChange}
          />
        </div>
        <div className="jump-form-div">
          <label> Pull altitude</label>
          <input
            className="jump-info-field"
            type="text"
            placeholder={jump.pullAltitude}
            name="pullAltitude"
            value={this.state.pullAltitude}
            onChange={this.handleChange}
          />
        </div>
        <div className="jump-form-div">
          <label> FreeFall time</label>
          <input
            className="jump-info-field"
            type="text"
            placeholder={jump.freeFallTime}
            name="freeFallTime"
            value={this.state.freeFallTime}
            onChange={this.handleChange}
          />
        </div>

        <div className="jump-form-div">
          <label> Jumpers</label>
          <div className="cat-cont">
            <select
              onChange={this.handleChange}
              name="jumpers"
              placeholder={jump.jumpers}
              className="category-list"
            >
              {/* <option value={jumpers}></option> */}
              <option value={1}>Solo</option>
              <option value={2}>2-way</option>
              <option value={3}>3-way</option>
              <option value={4}>4-way</option>
              <option value={5}>5+</option>
            </select>
          </div>

          {/* <input
        className="jump-info-field"
          type="text"
          name='jumpers'
          value={this.state.jumpers }
          onChange={this.handleChange}
        /> */}
        </div>

        <div className="jump-form-div">
          <label> Description</label>
          <input
            className="jump-info-field"
            type="text"
            placeholder={jump.description}
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </div>
        <div className="jump-form-div">
          <label> Jump certifying official</label>
          <input
            className="jump-info-field"
            type="text"
            name="certifyingOfficialName"
            placeholder="Full name"
            value={this.state.certifyingOfficialName}
            onChange={this.handleChange}
            // style={{    backgroundColor: '#fff',
            //   color: 'rgb(100, 100, 100)',
            //   boxShadow: '0 0 4px 2px #e5f2ff'}}
          />
          <input
            className="jump-info-field"
            type="text"
            name="certifyingOfficialLicenseNumber"
            placeholder="USPA license number"
            value={this.state.certifyingOfficialLicenseNumber}
            onChange={this.handleChange}
            // style={{    backgroundColor: '#fff',
            //   color: 'rgb(100, 100, 100)',
            //   boxShadow: '0 0 4px 2px #e5f2ff'}}
          />
        </div>

        {/* <div>JUMP TYPE:
        </div>
        <input
          type="text"
          name='jumpType'
          value={this.state.jumpType }
          onChange={this.handleChange}

        /> */}
        <div></div>
        <button
          className="add-jump-btn"
          onClick={(evt) => {
            evt.preventDefault();
            this.props.editJumpRecord({ ...this.state }, this.props.user.id, this.props.match.params.jumpId);
            this.setState({
              jumpNumber: "",
              jumpDate: "",
              aircraft: "",
              equipment: "",
              exitAltitude: 14000,
              pullAltitude: 4000,
              freeFallTime: 60,
              jumpers: "",
              description: "",
              jumpType: "",
            });
            this.props.history.push('/alljumps')
          }}
        >
          Save
        </button>
      </form>
    </div>
    );
  }
}

const mapState = (state) => {
  return {
    jumpRecords: state.jumpRecords,
    user: state.auth,
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

export default connect(mapState, mapDispatch)(EditJumpRecord);
