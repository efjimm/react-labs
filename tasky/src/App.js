import React, { useState } from "react";
import Task from "./components/Task";
import "./App.css";

function App() {
  const [taskState, setTaskState] = useState({
    tasks: [
      {
        id: 1,
        title: "Dishes",
        description: "Empty Dishwasher",
        deadline: "Today",
      },
      {
        id: 2,
        title: "Laundry",
        description: "Fold and put away",
        deadline: "Tomorrow",
      },
      { id: 3, title: "Walk Dog", deadline: "Today" },
    ],
  });

  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task) => (
        <Task
          title={task.title}
          description={task.description}
          deadline={task.deadline}
          key={task.id}
        />
      ))}
    </div>
  );
}

export default App;
