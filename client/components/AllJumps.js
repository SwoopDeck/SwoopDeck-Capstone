import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { me } from "../store/auth";

import { Thunk_fetchAllJumpRecords } from "../store/jumpRecords";
import { thunk_fetchAllDropzones } from "../store/dropzones.js";
import { thunk_fetchAllLoads, thunk_adminFetchAllLoads } from "../store/loads";

/**
 * REACT COMPONENT
 */
export class AllJumps extends React.Component {
  constructor(props) {
    super(props);

    //FOR PAGINATION
    this.state = {
      page: 1,
      startIdx: 0,
      endIdx: 8,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    let userId = this.props.users.id;
    this.props.getJumpRecords(userId);
    this.props.getDropzones();
    this.props.getAllAdminLoads();
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  renderHelper = (pageNum) => {
    let end = pageNum * 8;
    let start = end - 8;
    console.log("before", this.state.startIdx, this.state.endIdx);
    this.setState({ endIdx: pageNum * 8 });
    this.setState({ startIdx: start });

    console.log("this.state after render helper", this.state);
  };

  dropdownChange = (evt) => {
    let num = evt.target.value;
    let number = Number(num);
    this.setState({ page: number });
    this.renderHelper(number);
  };

  render() {
    console.log(this.state);

    function alertMessage() {
      alert("This feature is not yet available!");
    }

    //GETS USER'S MOST RECENT 5 JUMPS

    let jumps = [this.props.jumpRecords][0] || [];
    let dropzones = this.props.dropzones.allDropzones || [];

    let sortedArr = jumps.sort((a, b) => {
      return a.jumpNumber - b.jumpNumber;
    });
    sortedArr.reverse();
    let numbersArr = [];
    for (let i = 0; i < jumps.length; i++) {
      numbersArr.push(i + 1);
    }

    console.log("jumps", sortedArr);

    let recentSixJumps = jumps.slice(this.state.startIdx, this.state.endIdx);
    console.log("sorted", sortedArr);

    //PAGINATION FUNCTIONS
    let numOfPages = Math.ceil(jumps.length / 8);
    let pagesArr = [];
    for (let i = 0; i < numOfPages; i++) {
      pagesArr.push(i + 1);
    }

    console.log("adminLoads", this.props.loads.allLoads);
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
              <Link to={`/add`}>
                <div className="frame-527">
                  <button className="add-btn">
                    <img
                      className="icon"
                      src="https://anima-uploads.s3.amazonaws.com/projects/630e6c3ef11c17b54f51d1b7/releases/630e84f46d0125081c2cb8ad/img/-icon@2x.svg"
                    />
                    <div className="button">Add</div>
                  </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="frame-530">
            <input
              className="search-bar border-1px-mystic search"
              type="search"
              placeholder="Search"
            ></input>
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
                <th>JUMP NUMBER</th>
                <th>DATE</th>
                <th>LOCATION</th>
                <th>JUMP TYPE</th>
                <th>STYLE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {recentSixJumps.map((jump, index) => {
                let currentDropzone = {};
                let currentNumber = jumps.length - index;
                for (let i = 0; i < dropzones.length; i++) {
                  if (dropzones[i].id === jump.dropzoneId) {
                    currentDropzone = dropzones[i];
                  }
                }
                let dateSplice = "";
                for (let i = 0; i < jump.jumpDate.length; i++) {
                  let datesArr = jump.jumpDate.split(" ");

                  dateSplice = datesArr[0].toString();
                }

                let loadTime = "";
                let currentLoad = {};
                for (let i = 0; i < this.props.loads.allLoads.length; i++) {
                  let load = this.props.loads.allLoads[i];
                  currentLoad = load;
                  if (load.id === jump.loadId) {
                    loadTime = currentLoad.departureTime;
                  }
                }

                return (
                  <tr key={index} style={{ lineHeight: "20px" }}>
                    <td>{jump.jumpNumber}</td>

                    <td>
                      {loadTime !== null
                        ? `${dateSplice} at ${loadTime}`
                        : `${dateSplice}`}
                    </td>
                    <td>{currentDropzone.name}</td>
                    <td>
                      {jump.exitAltitude > 7000
                        ? "Full Altitude"
                        : `Hop 'n Pop`}
                    </td>
                    <td>{jump.jumpType}</td>
                    <td
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                    >
                      <Link to={`/edit/${jump.id}`}>
                        <button className="edit-btn" title="edit">
                          <i className="fa-solid fa-pen-to-square" />
                        </button>
                      </Link>
                      <Link to={`/jumps/${jump.userId}/${jump.id}`}>
                        <button
                          className="edit-btn"
                          title="view"
                          style={{ margin: "1rem 1rem" }}
                        >
                          <i className="fa-solid fa-eye" />
                        </button>
                      </Link>
                      {/* <button style={{backgroundColor: 'red'}}><i className="fa-solid fa-trash-can"/></button> */}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div
            id="pagination"
            style={{ display: "flex", flexDirection: "row", marginLeft: "40%" }}
          >
            <p style={{ width: "164px", marginRight: "-79px" }}>Select Page</p>
            <select
              onChange={this.dropdownChange}
              style={{
                borderRadius: "10px",
                marginLeft: "47%",
                width: "4rem",
                padding: "1px 8px",
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
    users: state.auth,
    dropzones: state.dropzones,
    loads: state.loads,
  };
};
const mapDispatch = (dispatch) => {
  return {
    getJumpRecords: (userId) => dispatch(Thunk_fetchAllJumpRecords(userId)),
    getDropzones: () => dispatch(thunk_fetchAllDropzones()),
    getAllAdminLoads: () => dispatch(thunk_adminFetchAllLoads()),
  };
};

export default connect(mapState, mapDispatch)(AllJumps);

