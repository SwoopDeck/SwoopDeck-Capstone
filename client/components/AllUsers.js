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

export class AllUsers extends React.Component {
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
    //this.props.getDropzone(2)
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
    return (
      <div>
        <h1>USERS PAGE</h1>
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

export default connect(mapState, mapDispatch)(AllUsers);
