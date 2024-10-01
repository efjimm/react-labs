import React from "react";

function Task(props) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: props.done
          ? "lightgrey"
          : { low: "#5bb4c4", medium: "#ebcb8b", high: "#bf4955" }[
              props.priority
            ],
      }}
    >
      <p className="title">{props.title}</p>
      <p>Due: {props.deadline}</p>
      <p className="priority">Priority: {props.priority}</p>
      <p className="description">{props.description}</p>
      <button className="doneButton" onClick={props.markDone}>
        Done
      </button>
      <button className="deleteButton" onClick={props.deleteTask}>
        Delete
      </button>
    </div>
  );
}

export default Task;
