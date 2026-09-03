import { useState } from 'react'
import './App.css'



function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function renameTask(id) {
  const newName = prompt("Enter the new task name:");

  if (newName && newName.trim() !== "") {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, text: newName.trim() }
          : task
      )
    );
  }
}


  function completeTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  return (
    <div className="container">
      <h1>My To-Do List</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="task-list">
        {tasks.map((task) => (
          <div className="task" key={task.id}>
            <span
              className={task.completed ? "completed" : ""}
              onClick={() => completeTask(task.id)}
            >
              {task.text}
            </span>

            <div className="task-buttons">
  <button onClick={() => renameTask(task.id)}>
    Update
  </button>

  <button onClick={() => deleteTask(task.id)}>
    Delete
  </button>
</div>
          </div>
        ))}
      </div>
    </div>
  );

}

export default App
