import React, { useState } from "react";
import Task from "./components/Task";
import "./App.css";

function App() {
  const [taskState, setTaskState] = useState({
    tasks: [
      { title: "Dishes", description: "Empty Dishwasher", deadline: "Today" },
      {
        title: "Laundry",
        description: "Fold and put away",
        deadline: "Tomorrow",
      },
      { title: "Walk Dog", deadline: "Today" },
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
        />
      ))}
    </div>
  );
}

export default App;
