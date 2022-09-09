import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Thunk_fetchAllJumpRecords,
  Thunk_fetchSingleJump,
  Thunk_updateJump,
  Thunk_deleteJump,
  Thunk_createJump,
} from "../store/jumpRecords";
import {
  thunk_fetchSingleDropzone,
  thunk_updateDropzone,
  thunk_createDropzone,
  thunk_deleteDropzone,
  thunk_fetchAllDropzones,
} from "../store/dropzones.js";
import {
  thunk_fetchAllLoads,
  thunk_createLoad,
  thunk_deleteLoad,
  thunk_fetchSingleLoad,
  thunk_updateLoad,
  thunk_updateLoadSlotsFilled,
} from "../store/loads";

/**
 * REACT COMPONENT
 */
export class JoinLoad extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
      display: "inline-block",
    };

    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    // console.log(this.props.match.params.dropzoneId);
    this.props.getLoads(this.props.match.params.dropzoneId);
    this.props.getJumpRecords(this.props.user.id)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  render() {


   
    const year = new Date();
    const createYear = year.getFullYear();

    const month = new Date();
    const createMonth = month.getMonth() + 1;

    const day = new Date();
    const createDay = day.getDate();

    const todaysDate = `${createYear}-${createDay}-${createMonth}`;
    console.log("in componenet", this.props.loads);
    const loadsArr = this.props.loads || [];
    const todaysLoads = loadsArr.filter((load) => {
      let loadDate = load.date.slice(0, 8);

      if (loadDate === todaysDate) {
        return load;
      }
    });

    const selectLoad = (evt) => {
      // this.props.getSingleLoad(evt.target.value, evt.target.id);
      // this.setState({ selected: true, display: 'none' });
    };

    const confirmLoad = (evt) => {
      this.setState({ selected: false, display: "inline-block" });
      this.props.editLoadSlots(
        this.props.singleLoad.dropzoneId,
        this.props.singleLoad.id
      );
      let jumpNumsArr = this.props.jumpRecords.sort((a, b) => a.jumpNumber - b.jumpNumber).map((jump) => {
        return jump.jumpNumber
      })
      let mostRecentJumpNumber = jumpNumsArr[jumpNumsArr.length + 1] 
      console.log('test',mostRecentJumpNumber)
      let currentJump = {
        aircraft: this.props.singleLoad.aircraft,
        jumpDate: this.props.singleLoad.date,
        loadId: this.props.singleLoad.id,
        dropzoneId: this.props.singleLoad.dropzoneId,
        jumpNumber: mostRecentJumpNumber
      };

      this.props.addJumpRecord(currentJump, this.props.user.id);
      this.props.history.push("/home");
    };

    const deSelect = (evt) => {
      this.setState({ selected: false, display: "inline-block" });
    };

    console.log("todaysLoads", todaysLoads);
    let buttons = (
      <div>
        {this.state.selected ? (
          <div>
            <button
              type="button"
              onClick={confirmLoad}
              display={this.state.display}
            >
              Confirm
            </button>
            <button
              type="button"
              onClick={deSelect}
              display={this.state.display}
            >
              Cancel
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );

    return (
      <div className="flex-right">
        <div className="table screen">
          <div className="frame-529">
            <div className="frame-528">
              <div className="frame-526">
                <p id="titleLog">Select A Load</p>
                <div className="view-all-past-skydiving-jump-logs">
                  All available loads
                </div>
              </div>
              <div className="frame-527">
                <Link to={`/join/dropzone`}>
                  <button className="add-btn" style={{ width: "200px" }}>
                    <div className="button">Back to today's loads</div>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>Departure Time</th>
                <th>Available Slots</th>
                <th>Aircraft</th>
                <th>Status</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {todaysLoads.length ? (
                todaysLoads.map((load, index) => {
                  return (
                    <tr key={index}>
                      <td>{load.departureTime}</td>
                      <td>{load.slots - load.slotsFilled}</td>
                      <td>{load.aircraft}</td>
                      <td>{load.status}</td>

                      <td
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                        }}
                      >
                        <button
                          className="edit-btn"
                          style={{ margin: "1rem 1rem" }}
                          id={load.id}
                          value={this.props.match.params.dropzoneId}
                          onClick={() => {
                            this.props.history.push(
                              `/load/${load.dropzoneId}/${load.id}/details`
                            );
                          }}
                        >
                          Select
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td></td>
                  <td>There are no available loads today</td>
                  <td></td>
                  <td></td>
                </tr>
              )}
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
    loads: state.loads.allLoads,
    singleLoad: state.loads.singleLoad,
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

    /* 
editLoad: (dropzoneId, loadId, LOAD) =>
       dispatch(thunk_updateLoad(dropzoneId, loadId, LOAD)),
 */
    editLoadSlots: (dropzoneId, loadId) =>
      dispatch(thunk_updateLoadSlotsFilled(dropzoneId, loadId)),
    getLoads: (dropzoneId) => dispatch(thunk_fetchAllLoads(dropzoneId)), //WORKING//
    deleteLoad: (dropzoneId, loadId) =>
      dispatch(thunk_deleteLoad(dropzoneId, loadId)), //WORKING//
    addLoad: (LOAD, dropzoneId) => dispatch(thunk_createLoad(LOAD, dropzoneId)), //WORKING//
    getSingleLoad: (dropzoneId, loadId) =>
      dispatch(thunk_fetchSingleLoad(dropzoneId, loadId)), //WORKING//
  };
};

export default connect(mapState, mapDispatch)(JoinLoad);
