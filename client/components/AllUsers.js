import React from 'react';
import { Link } from 'react-router-dom';
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

import { Thunk_fetchUsers, Thunk_deleteUser } from '../store/allusers';

import { Thunk_updateUser } from '../store/allusers';

/**
 * REACT COMPONENT
 */
export class AllUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      startIdx: 0,
      endIdx: 10,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.getUsers();
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  renderHelper = (pageNum) => {
    let end = pageNum * 8;
    let start = end - 8;
    console.log('before', this.state.startIdx, this.state.endIdx);
    this.setState({ endIdx: pageNum * 8 });
    this.setState({ startIdx: start });
  };

  dropdownChange = (evt) => {
    let num = evt.target.value;
    let number = Number(num);
    this.setState({ page: number });
    this.renderHelper(number);
  };

  render() {
    const allUsers = this.props.users || [];

    let sortedArr = allUsers.sort((a, b) => {
      return a.id - b.id;
    });

    let recentEightUsers = sortedArr.slice(
      this.state.startIdx,
      this.state.endIdx
    );

    let numOfPages = Math.ceil(allUsers.length / 8);
    let pagesArr = [];
    for (let i = 0; i < numOfPages; i++) {
      pagesArr.push(i + 1);
    }

    return (
      <div className="flex-right">
        <div className="table screen">
          <div className="frame-529">
            <div className="frame-528">
              <div className="frame-526">
                <p id="titleLog">Users</p>
                <div className="view-all-past-skydiving-jump-logs">
                  All registered user accounts
                </div>
              </div>
              <div className="frame-527">
                <Link to="/user/add">
                  <button className="add-btn">
                    <img
                      className="icon"
                      src="https://anima-uploads.s3.amazonaws.com/projects/630e6c3ef11c17b54f51d1b7/releases/630e84f46d0125081c2cb8ad/img/-icon@2x.svg"
                    />
                    <div className="button">Add</div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="frame-530">
            <input
              className="search-bar border-1px-mystic search"
              type="search"
              placeholder="Search"
            />
            <button className="buttons-1 filter-btn">
              <img
                className="icon"
                src="https://anima-uploads.s3.amazonaws.com/projects/630e6c3ef11c17b54f51d1b7/releases/630e84f46d0125081c2cb8ad/img/-icon-1@2x.svg"
              />
              <div className="button-1">Filter</div>
            </button>
          </div>

          <table>
            <thead>
              <tr>
                <th>NAME</th>
                <th>ROLE</th>
                <th>PHONE NUMBER</th>
                <th>EMAIL</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {recentEightUsers.map((user, index) => {
                let role = '';
                if (user.isAdmin) {
                  role = 'Admin';
                }
                if (user.isDropzone) {
                  role = 'Dropzone';
                }
                if (user.isDropzone === false && user.isAdmin === false) {
                  role = 'Skydiver';
                }
                return (
                  <tr key={index}>
                    <td>
                      {user.firstName} {user.lastName}
                    </td>

                    <td>{role}</td>
                    <td>{user.phoneNumber}</td>
                    <td>{user.email}</td>

                    <td
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                      }}
                    >
                      <Link to={`/users/${user.id}`}>
                        <button
                          className="edit-btn"
                          style={{ margin: '1rem 1rem' }}
                        >
                          <i className="fa-solid fa-eye" />
                        </button>
                      </Link>
                      <button
                        style={{ backgroundColor: 'red' }}
                        onClick={() => {
                          this.props.deleteUser(user.id);
                          this.props.history.push(`/users`);
                        }}
                      >
                        <i className="fa-solid fa-trash-can" />
                      </button>

                      {/*  THIS IS MAIN///// <td
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                      }}
                    >
                      <Link to={`/users/${user.id}`}>
                        <button
                          className="edit-btn"
                          style={{ margin: '1rem 1rem' }}
                        >
                          <i className="fa-solid fa-eye" />
                        </button>
                      </Link>
                      <button
                        style={{ backgroundColor: 'red' }}
                        // onClick={() => {
                        //   this.props.deleteUser(this.props.match.params.id);
                        //   this.props.history.push(`/users`);
                        // }}
                      >
                        <i className="fa-solid fa-trash-can" />
                      </button>  THIS IS MAIN //// */}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div
            id="pagination"
            style={{ display: 'flex', flexDirection: 'row', marginLeft: '40%' }}
          >
            <p style={{ width: '164px', marginRight: '-79px' }}>Select Page</p>
            <select
              onChange={this.dropdownChange}
              style={{
                borderRadius: '10px',
                marginLeft: '47%',
                width: '4rem',
                padding: '1px 8px',
              }}
            >
              {pagesArr.map((page) => {
                return <option value={Number(page)}>{page}</option>;
              })}
            </select>
          </div>
        </div>
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

    /////////ABOVE IS FOR DROPZONE////////BELOW IS FOR ADMIN/////////////////////////////

    getUsers: () => dispatch(Thunk_fetchUsers()),
    // editUser: (userId) => dispatch(Thunk_updateUser(userId)),
    deleteUser: (userId) => dispatch(Thunk_deleteUser(userId)),
  };
};

export default connect(mapState, mapDispatch)(AllUsers);
