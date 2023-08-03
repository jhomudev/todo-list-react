import './App.css'
import { Plus, Trash } from '@phosphor-icons/react'
import ListTasks from './components/ListTasks'
import { useTasks } from './hooks/useTasks'
import { useState } from 'react'

function App () {
  const { tasks, updateTasks, deleteTask, createTask, toggleCheckTask } = useTasks()
  const [formNewtask, setFormNewtask] = useState('')

  function handleSubmit (e) {
    e.preventDefault()

    const dataForm = new FormData(e.target)
    const objData = Object.fromEntries(dataForm)

    createTask({ descrip: objData.formNewtask })
    setFormNewtask('')
  }

  function handleChange (e) {
    const newValue = e.target.value
    setFormNewtask(newValue)
  }

  return (
    <>
      <main className='w-full min-h-screen bg-gray-100 grid place-items-center'>
        <div className='w-[min(100%,400px)] h-min-32 bg-white p-5 md:p-10 rounded-sm shadow-lg grid gap-3'>
          <h1 className='text-center text-xl font-semibold text-gray-800'>To do list App</h1>
          <p className='text-gray-600'>Write your tasks, check, etc</p>
          <form onSubmit={handleSubmit} className='flex items-center border-blue-600 border-b-2 rounded-sm shadow-md'>
            <input onChange={handleChange} className='w-full indent-3 outline-none caret-blue-600 text-gray-600' name='formNewtask' type='text' placeholder='Type here...' value={formNewtask} />
            <button className='bg-blue-600 hover:bg-blue-800 p-2 text-white'><Plus size={23} weight='bold' /></button>
          </form>
          <ListTasks tasks={tasks} deleteTask={deleteTask} toggleCheckTask={toggleCheckTask} />
          <button onClick={() => { updateTasks([]) }} className='bg-red-600 hover:bg-red-700 p-2 rounded-sm text-white flex items-center justify-center gap-3'>Clear all tasks<Trash size={20} /></button>
        </div>
      </main>
    </>
  )
}

export default App
