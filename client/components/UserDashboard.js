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


import SplitFlapDisplay from "react-split-flap-display";
import { FlapDisplay, Presets } from "react-split-flap-effect";
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

export class UserDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: this.props.jumpRecords,
    };
    // this.addTime = this.addTime.bind(this);
    this.totalDistance = this.totalDistance.bind(this);
    this.totalJumps = this.totalJumps.bind(this);
  }
  componentDidMount() {
    let userId = this.props.user.id;
    this.props.getJumpRecords(userId);
    console.log("..........", this.props);
  }




  totalDistance(array) {
    let distance = 0;
    for (let i = 0; i < array.length; i++) {
      distance = distance + array[i].exitAltitude - array[i].pullAltitude;
    }
    return distance;
  }

  totalJumps() {
    let totalJumps = this.props.jumpRecords.length;
    return totalJumps
  //   let jumpRecords = this.props.jumpRecords;

  //   for (let i = 0; i < jumpRecords.length; i++) {
  //     totalJumps + i;
  //   }
  //   return totalJumps;
  }

  render() {

    let hours = 0;

   let addTime = () => {
      let freeFallTime = [];
      let jumpRecords = this.props.jumpRecords;
      for (let i = 0; i < jumpRecords.length; i++) {
        freeFallTime.push(jumpRecords[i].freeFallTime);
      }
      let totalFreeFallTime = 0;
      for (let i = 0; i < freeFallTime.length; i++) {
        totalFreeFallTime = totalFreeFallTime + freeFallTime[i];
      }
      let minutes = totalFreeFallTime / 60;
      let timeInHours = Math.floor(minutes / 60);
      hours += timeInHours;
      return minutes;
    }


    let jumps = this.props.jumpRecords || [];

    console.log(this.props.jumpRecords);

    let totalJumps = this.totalJumps();
    let totalTime = addTime();
    let totalDistance = this.totalDistance(jumps);
    console.log(totalDistance);
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

          backgroundColor: ["#336dff", "#336dff"],

          borderWidth: 2,
          options: {
            plugins: {
              legend: {
                display: true,
                labels: {
                  color: "#336dff",
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

    let userName = `${this.props.user.firstName} ${this.props.user.lastName}`;

    return (
      <>
        <div className="user-dashboard-container">
          <div>

          </div>
        {/* <div>
          {" "}
          <FlapDisplay
            chars={Presets.ALPHANUM + ",!"}
            length={19}
            value={"SWOOPDECK DASHBOARD"}
          />
          </div> */}

              <div style={{alignSelf: 'flex-start', paddingLeft: '.5rem'}}>
                <span className="manrope-bold-shark-18px">Hey,</span>
                <span className="spans1">&nbsp;</span>
                <span className="manrope-bold-shark-18px">{userName}</span>
                <span className="spans3"> - here’s what’s happening in your skydiving journey</span>
              </div>

          
        <div className="boxright">

        <div className="freefall-stats-container">
          <div className="freefall-stats-card-1">
            <div className="freefall-stats-title">Total FreeFall Time</div>
            <div className="freefall-stats-card-bottom">
              <div style={{fontSize: '2.5rem', color: '#336dff', fontWeight: 'bold'}}><CountUp end={hours}/></div>
              <div className="stats-card-time">hours</div>
              <div style={{fontSize: '2.5rem', color: '#336dff', fontWeight: 'bold'}}><CountUp end={totalTime}/></div>
              <div className="stats-card-time">minutes</div>
            </div>
          </div>
          <div className="freefall-stats-card-2">
            <div className="freefall-stats-title">Total Jumps</div>
            <div className="freefall-stats-card-bottom">
              <div style={{fontSize: '2.5rem', color: '#336dff', fontWeight: 'bold'}}><CountUp end={totalJumps}/></div>
              <div className="stats-card-time">Skydives</div>
            </div>
          </div>
          <div className="freefall-stats-card-2">
            <div className="freefall-stats-title">Total FreeFall Distance</div>
            <div className="freefall-stats-card-bottom">
              <div style={{fontSize: '2.5rem', color: '#336dff', fontWeight: 'bold'}}><CountUp end={totalDistance}/></div>
              <div className="stats-card-time">Feet</div>
            </div>
          </div>
        </div>



          <div>

          {/* <div className="box-total-freefall">
            <div className="total-freefall-time-title">Total Freefall Time</div>
            <h1>
              <CountUp end={totalTime}/>
        
                <ReactSpeedometer
                  maxValue={1000}
                  value={totalTime}
                  needleColor="grey"
                  startColor="green"
                  segments={5}
                  endColor="blue"
                />
              </h2>
            </h1>
          </div> */}

          {/* <div className="box">
            total jumps:
            <h1>
              <CountUp end={jumps.length} />
            </h1>
            Total Freefall distance:
            <h1>
              <CountUp end={totalDistance} />
            </h1>
          </div> */}


          
          <div className="box">
            <div>
              <LineChart chartData={userExit} />
            </div>
            {/* <div style={{ width: 300 }}>
              <BarChart chartData={userId} />
            </div> */}
          </div>
          </div>
        </div>

          {/* <div className="chartBox">
            <div className="chart">
              <div className="chart">
                <BarChart chartData={userId} />
              </div>
              <div className="chart" style={{ width: 100 }}>
                <LineChart chartData={userExit} />
              </div> */}
          {/* <div className="chart" style={{ width: 100 }}>
            <PieChart chartData={pullAltitude} />
          </div>
          <div className="chart" style={{ width: 100 }}>
            <DoughnutChart chartData={pullAltitude} />
          </div> */}
          {/* <h1 className="chart" style={{ width: 100 }}>
                Average freefall time:
                <CountUp end={60} />
              </h1>
              <h1>{this.props.jumpRecords.userId}</h1>
              <div style={{ width: 100 }}>
                <h2>
         
                    maxValue={100}
                    value={60}
                    needleColor="grey"
                    startColor="green"
                    segments={10}
                    endColor="blue"
                  />
                </h2>
              </div> */}
          {/* </div>
          </div> */}
        </div>
      </>
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

export default connect(mapState, mapDispatch)(UserDashboard);
