import React from 'react'
import TaskList from '../component/TaskList'
import TaskForm from '../component/TaskForm'

const Tasks = () => {
  return (
    <div>
      <h1 className='text-7xl'>Tasks</h1>
      <TaskForm />
      <TaskList />
    </div>
  )
}

export default Tasks