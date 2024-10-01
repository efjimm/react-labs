import React from "react";

function AddTaskForm(props) {
  return (
    <div>
      <form onSubmit={props.submit}>
        <label>
          Task title:
          <br />
          <input type="text" name="title" required onChange={props.change} />
        </label>
        <br />
        <label>
          Due date:
          <br />
          <input type="date" name="deadline" required onChange={props.change} />
        </label>
        <br />
        <label>
          Details:
          <br />
          <input type="text" name="description" onChange={props.change} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default AddTaskForm;
