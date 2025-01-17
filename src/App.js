//import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import TaskInput from "./TaskInput";
import Tasklist from "./Tasklist";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState(""); //this is the text in the task object

  const handleNewTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  console.log(tasks);
  return (
    <div className="App">
      <h2>Task Manager</h2>
      <TaskInput
        handleNewTask={handleNewTask}
        setNewTask={setNewTask}
        newTask={newTask}
      />
      <Tasklist
        tasks={tasks}
        toggleTaskCompletion={toggleTaskCompletion}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
