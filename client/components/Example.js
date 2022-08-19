import React from 'react';
import { connect } from 'react-redux';
import {
  Thunk_fetchAllJumpRecords,
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

export class Example extends React.Component {
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
    //this.props.getJumps(3);
    this.props.getDropzones();
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>TEST</h1>
      </div>
    );
    ///////////////////////////////////////////BELOW IS THE JUMPRECORD CRUDS/////////ABOVE IS THE DROPZONE CRUD//////////////////////
    //   console.log('PROPS',this.props)

    //   let { jumps } = this.props || [];
    //   return (
    //     <div >
    //      {jumps.map((jump) => {
    //           return (
    //             <div className="recent-jumps" key={jump.id}>
    //               <div>{jump.jumpNumber}</div>
    //               <div>{jump.aircraft}</div>
    //               <div>{jump.equipment}</div>
    //               <h1>Edit Log</h1>
    //               <form id="jump-form">
    //                 <div>JUMP JUMBER:</div>
    //                 <input
    //                   type="text"
    //                   name="jumpNumber"
    //                   value={this.state.jumpNumber}
    //                   onChange={this.handleChange}
    //                 />
    //               </form>
    //               <button
    //           onClick={(evt) => {
    //             evt.preventDefault();
    //             this.props.edit({ ...this.state }, 3, jump.id);
    //             this.setState({
    //               jumpNumber: "",
    //               // location: "",
    //               // aircraft: "",
    //               // equipment: "",
    //               // exitAltitude: 14000,
    //               // pullAltitude: 4000,
    //               // freeFallTime: 60,
    //               // jumpers: "",
    //               // description: "",
    //               // jumpType: "",
    //             });
    //             //this.props.getJumps(3)
    //           }}
    //         >UPDATE</button>
    //         <button
    //           onClick={(evt) => {
    //             evt.preventDefault();
    //             this.props.delete( 3, jump.id);
    //           }}
    //         >DELETE</button>
    //         <button
    //           onClick={(evt) => {
    //             evt.preventDefault();
    //             this.props.add(
    //           {jumpNumber: 91219, id: 239}, 3);
    //           this.props.getJumps(3)
    //           }}
    //         >ADD</button>
    //             </div>
    //           );
    //      })}

    //     </div>
    //   );
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
      dispatch(Thunk_updateJump(jump, userId, jumpId)),
    getJumpRecords: (userId) => dispatch(Thunk_fetchAllJumpRecords(userId)),
    deleteJumpRecord: (userId, jumpId) =>
      dispatch(Thunk_deleteJump(userId, jumpId)),
    addJumpRecord: (jump, id) => dispatch(Thunk_createJump(jump, id)),
    getSingleJumpRecord: (jump, id) =>
      dispatch(Thunk_fetchSingleJump(jump, id)),

    ////////ABOVE is for USER TABLE//////BELOW IS FOR DROPZONE//////////////////////////

    editDropzone: (dropzoneId, dropzone) =>
      dispatch(thunk_updateDropzone(dropzoneId, dropzone)),
    getDropzones: () => dispatch(thunk_fetchAllDropzones()),
    deleteDropzone: (dropzoneId) => dispatch(thunk_deleteDropzone(dropzoneId)),
    addDropzone: (DROPZONE) => dispatch(thunk_createDropzone(DROPZONE)),
    getSingleDropzone: (dropzoneId) =>
      dispatch(thunk_fetchSingleDropzone(dropzoneId)),

    /////////ABOVE IS FOR DROPZONE////////BELOW IS FOR LOADS/////////////////////////////

    editLoad: (dropzoneId, loadId) =>
      dispatch(thunk_updateLoad(dropzoneId, loadId)),
    getLoads: (dropzoneId) => dispatch(thunk_fetchAllLoads(dropzoneId)),
    deleteLoad: (dropzoneId, loadId) =>
      dispatch(thunk_deleteLoad(dropzoneId, loadId)),
    addLoad: (LOAD, dropzoneId) => dispatch(thunk_createLoad(LOAD, dropzoneId)),
    getSingleLoad: (dropzoneId, loadId) =>
      dispatch(thunk_fetchSingleLoad(dropzoneId, loadId)),
  };
};

export default connect(mapState, mapDispatch)(Example);
