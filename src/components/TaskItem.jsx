import { X } from '@phosphor-icons/react'

function TaskItem ({ descrip = 'Any Task', isDone, deleteTask, toggleCheckTask }) {
  return (
    <li className={`p-2 flex gap-3 items-center text-gray-800 ${isDone ? 'opacity-50' : ''} rounded-md hover:bg-gray-200`}>
      <button onClick={toggleCheckTask} className={`rounded-full border-2 p-2 ${isDone ? 'bg-green-800 border-green-800' : 'bg-purple-200 border-purple-800'}`} /> <p className={`${isDone ? 'line-through' : ''}`}>{descrip}</p>
      <button onClick={deleteTask} className='ml-auto hover:text-red-500 hover:font-bold'><X /></button>
    </li>
  )
}

export default TaskItem
