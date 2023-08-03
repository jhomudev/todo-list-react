import { useState } from 'react'

export function useTasks () {
  const [tasks, updateTasks] = useState(() => {
    const tasksLS = localStorage.getItem('tasks')
    return tasksLS ? JSON.parse(tasksLS) : []
  })

  const [error, setError] = useState(null)

  function saveTasksLS ({ newValueTasks }) {
    localStorage.setItem('tasks', JSON.stringify(newValueTasks))
  }

  function createTask ({ descrip }) {
    if (descrip === '') {
      setError('Write something')
      return
    }

    setError(null)

    const newTask = {
      id: crypto.randomUUID(),
      descrip,
      isDone: false
    }

    const newValueTasks = [...tasks, newTask]
    updateTasks(newValueTasks)
    saveTasksLS({ newValueTasks })
  }

  function deleteTask ({ id }) {
    const newValueTasks = tasks.filter((task) => task.id !== id)
    updateTasks(newValueTasks)
    saveTasksLS({ newValueTasks })
  }

  function toggleCheckTask ({ id }) {
    const newValueTasks = tasks.map((task) => {
      if (task.id === id) task.isDone = !task.isDone
      return task
    })

    updateTasks(newValueTasks)
    saveTasksLS({ newValueTasks })
  }

  return { error, tasks, updateTasks, createTask, deleteTask, toggleCheckTask, saveTasksLS }
}
