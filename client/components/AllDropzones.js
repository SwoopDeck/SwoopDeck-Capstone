import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  thunk_deleteDropzone,
  thunk_fetchAllDropzones,
} from '../store/dropzones.js';

/**
 * REACT COMPONENT
 */
export class AllDropzones extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      startIdx: 0,
      endIdx: 10,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    await this.props.getDropzones();
  }


  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  renderHelper = (pageNum) => {
    let end = pageNum * 8;
    let start = end - 8;
    // console.log('before', this.state.startIdx, this.state.endIdx);
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
    const allDropzones = this.props.dropzones;

    let sortedArr = allDropzones.sort((a, b) => {
      return a.id - b.id;
    });

    let recentEightDropzones = sortedArr.slice(
      this.state.startIdx,
      this.state.endIdx
    );

    let numOfPages = Math.ceil(allDropzones.length / 8);
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
                <p id="titleLog">Dropzones</p>
                <div className="view-all-past-skydiving-jump-logs">
                  All registered locations
                </div>
              </div>
              <div className="frame-527">
                <Link to="/dropzone/add">
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
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Phone Number </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {recentEightDropzones.map((dropzone, index) => {
                return (
                  <tr key={index}>
                    <td>{dropzone.id}</td>
                    <td>{dropzone.name}</td>
                    <td>{dropzone.address}</td>
                    <td>{dropzone.phoneNumber}</td>
                    <td
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                      }}
                    >
                      <Link to={`/dropzones/${dropzone.id}`}>
                        <button
                          className="edit-btn"
                          style={{ margin: '1rem 1rem' }}
                        >
                          <i className="fa-solid fa-eye" />
                        </button>
                      </Link>
                      <button
                        className="delete-btn"
                        style={{ backgroundColor: 'red' }}
                        onClick={() => {
                          this.props.deleteDropzone(dropzone.id);
                        }}
                      >
                        <i className="fa-solid fa-trash-can" />
                      </button>
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
    getDropzones: () => dispatch(thunk_fetchAllDropzones()),
    deleteDropzone: (dropzoneId) => dispatch(thunk_deleteDropzone(dropzoneId)),
  };
};

export default connect(mapState, mapDispatch)(AllDropzones);
