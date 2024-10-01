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
        <br />
        <label>
          Priority:
          <br />
          <select name="priority" onChange={props.change}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default AddTaskForm;
