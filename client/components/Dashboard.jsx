import React, { useState, useEffect } from "react";
import GoalCard from "./GoalCard.jsx";
<<<<<<< HEAD
//import "./dashboard.css";
=======
>>>>>>> dev

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
<<<<<<< HEAD
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
=======
    <div className="dashBoard">
      <div className="LeftSide">
>>>>>>> dev
        <div className="LogOut"> Log out</div>

        {/*{goals.map(<GoalCard name={goal.name} />)}*/}
      </div>
      <div className="RightSide">
        <div className="header">
<<<<<<< HEAD
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
=======
          <div className="visual">Visual</div>
          <div className="progressCheck">Progres Check</div>
          <div className="journal">Journal</div>
        </div>
        <div className="content"></div>
>>>>>>> dev
      </div>
    </div>
  );
};
export default Homepage;
