import React, { useMemo, useState } from "react"
import TodoCard from './ToDoCard'
import styles from './ToDoList.module.css'

export default function TodoList ({
  initialTodos = [],
  initialFilter = "all", // all || active || done 
}) {
  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState(initialFilter)
  const [title, setTitle] = useState("")

 const filtered = useMemo(() => {
  if (filter === "active") return todos.filter((t) => !t.done);
  if (filter === "done") return todos.filter((t) => t.done);
  return todos;
}, [todos, filter]);

  const addTodo = (e) => {
    e.preventDefault()
    const trimmed = title.trim()
    if (!trimmed) return;
    setTodos((prev) => [
      { id: crypto.randomUUID(), title: trimmed, done: false },
      ...prev
    ])
    setTitle("")
  }

  const toggleTodo = (id) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done }: t ))
    )
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <>
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.title}>Todos</span>
          <select
            className={styles.select}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="done">Done</option>
          </select>       
      </div>

      <form className={styles.form} onSubmit={addTodo}>
        <input 
          className={styles.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a Todo"/>
        <button className={styles.button} type="submit">
          Add
        </button>
      </form>

      {filtered.length === 0 ? (
        <div className={styles.empty}>No Todos</div>
      ) : (
        <div className={styles.list}>
          {filtered.map((t) => (
            <TodoCard
            key={t.id}
            title={t.title}
            done={t.done}
            onToggle={() => toggleTodo(t.id)}
            onDelete={() => deleteTodo(t.id)}
            />
          ))}
        </div>
      )}
    </div>
    </>
  )
}