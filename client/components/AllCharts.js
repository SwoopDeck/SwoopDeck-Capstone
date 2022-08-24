import React from "react";
import { useState, useEffect } from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import DoughnutChart from "./DoughnutChart";
import { jumps } from "./DummyData";

//useEffect(() => {
// const databaseFetch = await axios(
//
// );

// setData(databaseFetch.data);
//});

function AllCharts() {
  const [userData, setUserData] = useState({
    labels: jumps.map((data) => data.date),
    datasets: [
      {
        label: "Exit Altitude",
        data: jumps.map((data) => data.exitAltitude),
        backgroundColor: ["rgba(75,192,192,1)"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div>
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <PieChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <DoughnutChart chartData={userData} />
      </div>
    </div>
  );
}

export default AllCharts;
