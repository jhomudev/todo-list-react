import React, { useState } from 'react'
import TaskItem from './TaskItem'
import { CaretDown } from '@phosphor-icons/react'
import { useTasks } from '../hooks/useTasks'

function TasksDone () {
  const { tasks, deleteTask, toggleCheckTask } = useTasks()
  const tasksDone = tasks.filter((task) => task.isDone === true)
  const hasTasks = tasksDone.length > 0
  return hasTasks
    ? tasksDone.map(({ id, descrip }) => (<TaskItem
        key={id}
        descrip={descrip} isDone
        deleteTask={() => { deleteTask({ id }) }}
        toggleCheckTask={() => { toggleCheckTask({ id }) }}
                                          />))
    : (<p className='text-sm text-gray-600 p-2'>No tasks done</p>)
}

function TasksToDo () {
  const { tasks, deleteTask, toggleCheckTask } = useTasks()
  const tasksToDo = tasks.filter((task) => task.isDone === false)
  const hasTasks = tasksToDo.length > 0
  return hasTasks
    ? tasksToDo.map(({ id, descrip }) => (<TaskItem
        key={id}
        descrip={descrip}
        deleteTask={() => { deleteTask({ id }) }}
        toggleCheckTask={() => { toggleCheckTask({ id }) }}
                                          />))
    : (<p className='text-sm text-gray-600 p-2'>No tasks to do</p>)
}

function ListTasks () {
  const { tasks } = useTasks()

  const [show, setShow] = useState(true)

  const countTasksDone = tasks.filter((task) => task.isDone === true).length
  const countTasksToDo = tasks.filter((task) => task.isDone === false).length

  function handleShow () {
    setShow(!show)
  }

  return (
    <>
      <div className='list shadow-sm pl-2 pb-1 border-l-purple-800 border-b-purple-800 border-l-[1px] border-b-[1px] rounded-[0_0_0_5px]'>
        <div className='flex items-center'>
          <h3 className='font-semibold text-purple-800'>To do</h3>
          <span className='bg-purple-200 text-purple-800 p-[2px_6px_2px_6px] rounded-full ml-auto text-xs font-semibold'>{countTasksToDo}</span>
        </div>
        <ul className='list grid'>
          <TasksToDo tasks={tasks} />
        </ul>
      </div>
      <div className='list shadow-sm pl-2 pb-1 border-l-green-800 border-b-green-800 border-l-[1px] border-b-[1px] rounded-[0_0_0_5px]'>
        <div className='flex items-center'>
          <h3 className='font-semibold text-green-800 flex items-center gap-3' onClick={handleShow}>Done <CaretDown className={`cursor-pointer transition-all duration-500 ${show ? 'rotate-180' : ''}`} /></h3>
          <span className='bg-green-200 text-green-800 p-[2px_6px_2px_6px] rounded-full ml-auto text-xs font-semibold'>{countTasksDone}</span>
        </div>
        <ul className={`list grid h-auto ${show ? 'max-h-80' : 'max-h-0'} overflow-hidden transition-all duration-300`}>
          <TasksDone tasks={tasks} />
        </ul>
      </div>
    </>

  )
}

export default ListTasks
