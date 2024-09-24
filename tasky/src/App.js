import Task from "./components/Task";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Empty dishwasher" />
      <Task
        title="Laundry"
        deadline="Tomorrow"
        description="Fold and put away"
      />
      <Task title="Tidy" deadline="Today" />
      <Task
        title="Walk dog"
        deadline="Today"
        description="At least 40 minutes"
      />
    </div>
  );
}

export default App;
