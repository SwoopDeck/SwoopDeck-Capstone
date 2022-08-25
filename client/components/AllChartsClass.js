import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Thunk_fetchAllJumpRecords,
  Thunk_deleteJump,
} from "../store/jumpRecords";
import { me } from "../store/auth";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import DoughnutChart from "./DoughnutChart";

export class AllChartsClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: this.props.jumpRecords,
    };
  }
  componentDidMount() {
    let userId = this.props.user.id;
    this.props.getJumps(this.props.match.params.id);
  }

  render() {
    let jumps = this.props.jumpRecords || [];

    console.log("TESTTTTT", this.props.jumpRecords);

    const userId = {
      labels: jumps.map((data) => data.jumpNumber),
      datasets: [
        {
          label: "Freefall time",
          data: jumps.map((data) => data.freeFallTime),
          backgroundColor: ["rgba(75,192,192,1)", "blue"],
          borderColor: "black",
          borderWidth: 2,
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
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    };

    return (
      <div>
        <h1>{this.props.jumpRecords.userId}</h1>
        <div style={{ width: 600 }}>
          <BarChart chartData={userId} />
        </div>
        <div style={{ width: 600 }}>
          <LineChart chartData={userId} />
        </div>
        <div style={{ width: 600 }}>
          <PieChart chartData={pullAltitude} />
        </div>
        <div style={{ width: 600 }}>
          <DoughnutChart chartData={pullAltitude} />
        </div>
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    jumpRecords: state.jumpRecords,
    user: state.auth,
  };
};
const mapDispatch = (dispatch) => {
  return {
    getJumps: (userId) => dispatch(Thunk_fetchAllJumpRecords(userId)),
    delete: (userId, jumpId) => dispatch(Thunk_deleteJump(userId, jumpId)),
  };
};

export default connect(mapState, mapDispatch)(AllChartsClass);
