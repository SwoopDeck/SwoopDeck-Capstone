// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { connect } from 'react-redux';
// import items from '../../public/sidebarItems.json';
// import SidebarItem from './SidebarItem';
// import { logout } from '../store';
// import { Link } from 'react-router-dom';

// export const Sidebar = (props) => {
//   console.log('sidebar props', props);
//   const dispatch = useDispatch();
//   return (
//     <div className="main">
//       <div className="sidebar">
//         <div className="user-avatar"></div>
//         <div className="user-name">
//           {props.user.firstName} {props.user.lastName}
//         </div>
//         <hr></hr>
//         {items.map((item, index) => (
//           <SidebarItem key={index} item={item} />
//         ))}

//         <i className="bi bi-box-arrow-right">
//           <button className="logout-btn" onClick={() => dispatch(logout())}>
//             Logout
//           </button>
//         </i>
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   user: state.auth,
// });

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

import React from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import userItems from '../../public/userSidebarItems.json';
import adminItems from '../../public/adminSidebarItems.json';
import dropzoneItems from '../../public/dropzoneSidebarItems.json';
import SidebarItem from './SidebarItem';
import { logout } from '../store';
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

export const Sidebar = (props) => {
  if (props.users.isAdmin) {
    const dispatch = useDispatch();
    return (
      <div className="main">
        <div className="sidebar">
          <div className="user-avatar"></div>
          <div className="user-name">
            {props.users.firstName} {props.users.lastName}
          </div>
          <hr></hr>
          {adminItems.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}

          <i className="bi bi-box-arrow-right">
            <button className="logout-btn" onClick={() => dispatch(logout())}>
              Logout
            </button>
          </i>
        </div>
      </div>
    );
  } else if (
    props.users.isAdmin === false &&
    props.users.isDropzone === false
  ) {
    const dispatch = useDispatch();
    return (
      <div className="main">
        <div className="sidebar">
            {/* <img src='https://media.istockphoto.com/vectors/user-icon-vector-male-person-symbol-profile-circle-avatar-sign-in-vector-id951316156?k=6&m=951316156&s=170667a&w=0&h=Lf8_Zfmf8Sp2K0wrD6AHmpuClZRAofkkEWUCHyP427w='/> */}
          <div className="user-avatar">
          </div>
          <div className="user-name">
            {props.users.firstName} {props.users.lastName}
          </div>
          <hr></hr>
          {userItems.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
          
          <i className="bi bi-box-arrow-right">
            <button className="logout-btn" onClick={() => dispatch(logout())}>
              Logout
            </button>
          </i>
        </div>
      </div>
    );
  } else if (props.users.isAdmin === false && props.users.isDropzone) {
    const dispatch = useDispatch();
    return (
      <div className="main">
        <div className="sidebar">
          <div className="user-avatar"></div>
          <div className="user-name">
            {props.users.firstName} {props.users.lastName}
          </div>
          <hr></hr>
          {dropzoneItems.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}

          <i className="bi bi-box-arrow-right">
            <button className="logout-btn" onClick={() => dispatch(logout())}>
              Logout
            </button>
          </i>
        </div>
      </div>
    );
  }
};

const mapState = (state) => {
  return {
    jumpRecords: state.jumpRecords,
    users: state.auth,
    dropzones: state.dropzones,
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

export default connect(mapState, mapDispatch)(Sidebar);
