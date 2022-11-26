import { useState } from "react";


function App() {
  const [task, setTask] = useState("")
  const [complete, setComplete] = useState([])
  const [inComplete, setInComplete] = useState([])

  const addTask = () => {
    setInComplete((tasks) => [...tasks, task]);
    setTask("")
  }

  const removeHandler = (index) => {
    const newTask = inComplete.filter((_, i) => i !== index)
    setInComplete(newTask)
  }

  const completeHandler = (task, index) => {
    const newTask = inComplete.filter((_, i) => i !== index)
    setInComplete(newTask)
    setComplete((tasks) => [...tasks, task]);
  }
  const undoHandler = (task, index) => {
    const newTask = complete.filter((_, i) => i !== index)
    setComplete(newTask)
    setInComplete((tasks) => [...tasks, task]);
  }

  return (
    <div className="todo-wrapper">
      <section className="task">
        <input value={task}  onChange={(e) => setTask(e.target.value)} /><button disabled={!task} onClick={addTask}>Add</button>
      </section>
      <p>Todo</p>
      <section className="tasks-list">
        {inComplete.map((task, i) => {
          return <div className="task"><span>{task}</span><button onClick={() => completeHandler(task, i)}>Complete</button> <button onClick={() => removeHandler(i)}>Remove</button></div>
        })}
      </section>
      <p>Completed Task</p>
      <section className="tasks-list">
     
        {complete.map((task, i) => {
          return <div className="task"><span>{task}</span><button onClick={() => undoHandler(task, i)}>Undo</button></div>
        })}
      </section>
    </div >
  );
}

export default App;
