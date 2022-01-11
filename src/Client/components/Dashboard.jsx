import React, { useState, useEffect } from "react";
import GoalCard from "./GoalCard.jsx";

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
    <div className="dashBoard">
      <div className="LeftSide">
        <div className="LogOut"> Log out</div>

        {/*{goals.map(<GoalCard name={goal.name} />)}*/}
      </div>
      <div className="RightSide">
        <div className="header">
          <div className="visual">Visual</div>
          <div className="progressCheck">Progres Check</div>
          <div className="journal">Journal</div>
        </div>
        <div className="content"></div>
      </div>
    </div>
  );
};
export default Homepage;
