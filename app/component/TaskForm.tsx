import React from 'react'
import {createTask} from '../../utils/actions'


const TaskForm = () => {
  return (
    <div>Create a new task
        <form action={createTask}>
            <div className='join w-full'>
                <input type='text' className='input input-bordered join-item w-full'
                 placeholder='type here' name='content' required></input>
                 <button type="submit" className='btn btn-primary join-item'>Create Task</button>
            </div>
        </form>
    </div>
  )
}

export default TaskForm