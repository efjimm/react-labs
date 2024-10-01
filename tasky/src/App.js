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
        done: false,
      },
      {
        id: 2,
        title: "Laundry",
        description: "Fold and put away",
        deadline: "Tomorrow",
        done: false,
      },
      { id: 3, title: "Walk Dog", deadline: "Today", done: false },
    ],
  });

  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({ tasks });
    console.log(`${taskIndex} ${tasks[taskIndex].done}`);
  };

  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task, index) => (
        <Task
          title={task.title}
          description={task.description}
          deadline={task.deadline}
          key={task.id}
          done={task.done}
          markDone={() => doneHandler(index)}
        />
      ))}
    </div>
  );
}

export default App;
