import { useState, useEffect } from 'react'


function App() {

  const STORAGE_KEY = "tasks"

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  })

  const [title, setTitle] = useState()

    const uid = () => {
      return Math.random().toString(36).slice(2) + Date.now().toString(36)
    }

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  })

  const addTask = (e) => {
  e.preventDefault()
  
  const trimmedTitle = title.trim()
  if (!trimmedTitle) return

  const newTask = { id: uid(), title: trimmedTitle, done: false }
  setTasks((prev) => [newTask, ...prev])
  setTitle("")
  }

  const toggleTask = (id) => {
    setTasks((prev) => 
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    )
  }

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <>
      <div className="app">
        <h1>Tasks</h1>
        <form onSubmit={addTask} clasName="row">
          <input 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Write a task title" />
            <button type="submit">Add</button>
            </form>

            <p>Left: {tasks.filter((t) => !t.done).length}</p>

            <ul className="list">
              {tasks.map((task) => (
              <li key={task.id} className="item">
                <label>
                  <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => toggleTask(task.id)}
                  />
                  <span className={task.done ? "done" : ""}>{task.title}</span>
                  <button onClick={() => deleteTask(task.id)}>X</button>
                </label>
              </li>
              ))}
            </ul>
       </div>
    </>
  )
}

export default App
