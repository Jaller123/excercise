import React from 'react'
import { useState } from 'react'

const ToDoList = () => {

    const [task, setTask] = useState([])
    const [newTask, setNewTask] = useState('')

    const handleInputChange = (e) => {
        setNewTask(e.target.value)
    }

    const addTask = () => {
      if (newTask.trim() === '') return
      setTask(prev => [...prev, newTask])  
      setNewTask('')
    }

    const deleteTask = (index) => {
      const upDatedTasks = task.filter((_, i) => i !== index)
      setTask(upDatedTasks)
    }

    const moveTaskUp = (index) => {

    }

    const moveTaskDown = (index) => {

    }
 
  return ( 
    <div>
      <h1>To-Do List</h1>
      <input className="task-input" value={newTask} onChange={handleInputChange}></input>
      <button className = "add-task-Button" onClick={addTask}>Add Task</button><button>➕</button>
      
      <ol>
        {task.map((task, index) => 
        <li key={index}>
          <span className="text">{task}</span>
          <button className="delete-button" onClick={() =>deleteTask(index)} >❌</button>
          <button className="moveup-button" onClick={() =>moveTaskUp(index)} >⬆️</button>
          <button className="movedown-button" onClick={() =>moveTaskDown(index)} >⬇️</button>
        </li>
        )} 
      </ol>

    </div>
  )
}

export default ToDoList