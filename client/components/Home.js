import React from "react";
import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import AllJumps from "./AllJumps";
import { me } from "../store/auth";
//import AllChartsClass from "./AllChartsClass";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import DoughnutChart from "./DoughnutChart";
import CountUp from "react-countup";
import ReactSpeedometer from "react-d3-speedometer";
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
} from "../store/loads";

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: this.props.jumpRecords,
    };
  }
  componentDidMount() {
    let userId = this.props.user.id;
    this.props.getJumpRecords(userId);
    console.log("..........", this.props);
  }

  render() {
    let jumps = this.props.jumpRecords || [];

    console.log("TESTTTTT", this.props.userId);

    const userId = {
      labels: jumps.map((data) => data.jumpNumber),
      datasets: [
        {
          label: "Freefall time",
          data: jumps.map((data) => data.freeFallTime),

          backgroundColor: ["rgba(75,192,192,1)", "blue"],

          borderWidth: 2,
          options: {
            plugins: {
              legend: {
                display: true,
                labels: {
                  color: "rgb(255, 99, 132)",
                },
              },
            },
          },
        },
      ],
    };

    const userExit = {
      labels: jumps.map((data) => data.jumpNumber),
      datasets: [
        {
          label: "Exit Altitude",
          data: jumps.map((data) => data.exitAltitude),

          backgroundColor: ["purple", "purple"],

          borderWidth: 2,
          options: {
            plugins: {
              legend: {
                display: true,
                labels: {
                  color: "rgb(255, 99, 132)",
                },
              },
            },
          },
        },
      ],
    };

    const pullAltitude = {
      labels: jumps.map((data) => data.jumpNumber),
      datasets: [
        {
          label: "pullAltitude",
          data: jumps.map((data) => data.pullAltitude),
          backgroundColor: ["yellow", "green"],
          borderWidth: 2,
          options: {
            plugins: {
              legend: {
                display: true,
                labels: {
                  color: "rgb(255, 99, 132)",
                },
              },
            },
          },
        },
      ],
    };

    return (
      // <div className="flex-right">
      //   <div className="right-top-column">
      <div className="chartBox">
        <div className="chart">
          <div className="chart">
            <BarChart chartData={userId} />
          </div>
          <div className="chart" style={{ width: 100 }}>
            <LineChart chartData={userExit} />
          </div>
          <div className="chart" style={{ width: 100 }}>
            <PieChart chartData={pullAltitude} />
          </div>
          <div className="chart" style={{ width: 100 }}>
            <DoughnutChart chartData={pullAltitude} />
          </div>
          <h1 className="chart" style={{ width: 100 }}>
            Average freefall time:
            <CountUp end={60} />
          </h1>
          <h1>{this.props.jumpRecords.userId}</h1>
          <div style={{ width: 100 }}>
            <h2>
              <ReactSpeedometer
                maxValue={100}
                value={60}
                needleColor="grey"
                startColor="green"
                segments={10}
                endColor="blue"
              />
            </h2>
          </div>
        </div>
      </div>
      //   </div>
      // </div>
    );
  }
}
const mapState = (state) => {
  return {
    email: state.auth.email,
    jumpRecords: state.jumpRecords,
    users: state.users.allUsers,
    user: state.auth,
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
  };
};

// export default connect(mapState)(Home);

export default connect(mapState, mapDispatch)(Home);
