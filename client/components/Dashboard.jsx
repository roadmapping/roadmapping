import React, { useState, useEffect } from "react";
import GoalCard from "./GoalCard.jsx";
//import "./dashboard.css";

const Homepage = () => {
  console.log("hellooooo");
  const [goals, setGoals] = useState([]);
  useEffect(() => {
    fetch("/goals").then((goals) => {
      console.log(".....", goals);
      //array of goals
      //setgoal put the array thats holding the goals
      setGoals(["selam"]);
    });
  });
  return (
    <div
      className="dashBoard"
      style={{
        backgroundColor: "#8a2be252",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        className="LeftSide"
        style={{
          backgroundColor: "#8a2be252",
          padding: "50px",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <div className="LogOut"> Log out</div>

        {/*{goals.map(<GoalCard name={goal.name} />)}*/}
      </div>
      <div className="RightSide">
        <div className="header">
          <div className="visual" style={{ justifyContent: "center" }}>
            Visual
          </div>
          <div className="progressCheck">Progres Check</div>

          <div className="journal">Journal</div>
        </div>
        <div
          className="content"
          style={{
            backgroundColor: "light blue",
            padding: "50px",
            display: "flex",
            justifyContent: "space-between",
          }}
        ></div>
      </div>
    </div>
  );
};
export default Homepage;
