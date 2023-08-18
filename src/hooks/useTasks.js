import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

export function useTasks () {
  const { tasks, createTask, deleteTask, clearTasks, toggleCheckTask, error } = useContext(TaskContext)

  return {
    tasks,
    createTask,
    deleteTask,
    clearTasks,
    toggleCheckTask,
    error
  }
}
