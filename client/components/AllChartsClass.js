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
    this.props.getJumps(userId);
  }

  render() {
    let jumps = [this.props.jumpRecords] || [];

    console.log("TTTTTTTTTTTTTTT", this.props.jumpRecords);

    const userId = {
      labels: jumps.map((data) => data.equipment),
      datasets: [
        {
          label: "Exit Altitude",
          data: jumps.map((data) => data.jumptype),
          backgroundColor: ["rgba(75,192,192,1)"],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    };

    return (
      <div>
        <div style={{ width: 600 }}>
          <BarChart chartData={userId} />
        </div>
        <div style={{ width: 600 }}>
          <LineChart chartData={userId} />
        </div>
        <div style={{ width: 600 }}>
          <PieChart chartData={userId} />
        </div>
        <div style={{ width: 600 }}>
          <DoughnutChart chartData={userId} />
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
