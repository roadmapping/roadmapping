import React, { Component } from "react";
import "../App.css";

export default class AppDragDropDemo extends Component {
  state = {
    tasks: [
      { name: "Learn Angular", category: "wip", bgcolor: "yellow" },
      { name: "React", category: "wip", bgcolor: "pink" },
      { name: "Vue", category: "complete", bgcolor: "skyblue" },
    ],
    colors: ["green", "lightblue", "orange", "pink"],
  };
  onDragStart = (ev, id) => {
    console.log("dragstart:", id);
    ev.dataTransfer.setData("id", id);
  };
  onDragOver = (ev) => {
    ev.preventDefault();
  };
  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");
    let tasks = this.state.tasks.filter((task) => {
      if (task.name == id) {
        task.category = cat;
      }
      return task;
    });
    this.setState({
      ...this.state,
      tasks,
    });
  };
  onSave = (e) => {
    e.preventDefault();
    const name = e.target.newGoal.value;
    const colors = this.state.colors;
    const color = colors.pop();

    const task = {
      name: name,
      category: "wip",
      bgcolor: color,
    };

    this.setState({
      tasks: [...this.state.tasks, task],
      colors: colors,
    });

    e.target.newGoal.value = "";
  };
  render() {
    var tasks = {
      wip: [],
      complete: [],
    };
    this.state.tasks.forEach((t) => {
      tasks[t.category].push(
        <div
          key={t.name}
          onDragStart={(e) => this.onDragStart(e, t.name)}
          draggable
          className="draggable"
          style={{ backgroundColor: t.bgcolor }}
        >
          {t.name}
        </div>
      );
    });
    return (
      <div className="container-drag">
        <h2 className="header">Take Notes</h2>

        <div className="underHeader">
          <div
            className="wip"
            onDragOver={(e) => this.onDragOver(e)}
            onDrop={(e) => {
              this.onDrop(e, "wip");
            }}
          >
            {/* <span  className="task-header">WIP</span> */}
            <form onSubmit={(e) => this.onSave(e)}>
              <input
                type="text"
                id="newGoal"
                name="newGoal"
                placeholder="New Goal"
              />
            </form>

            {tasks.wip}
          </div>
          <div className="area">
            <textarea
              name="textValue"
              className="textArea"
              placeholder="Type your notes here"
            >
              {" "}
            </textarea>
            <button id="save">Save</button>
          </div>
          <div
            className="droppable"
            onDragOver={(e) => this.onDragOver(e)}
            onDrop={(e) => this.onDrop(e, "complete")}
          >
            <span className="task-header">COMPLETED</span>
            {tasks.complete}
          </div>
        </div>
      </div>
    );
  }
}
