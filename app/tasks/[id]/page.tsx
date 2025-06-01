import React from 'react'
import { fetchTask, updateTask } from '@/utils/actions';



const SingleTask = async({params}:any) => {
    const task = await fetchTask(params.id)
    console.log(task)
  return (
<div>
    <p>Task ID: {task?.id}</p>
    <p>Task Content: {task?.content}</p>

    <h2>Edit Task:</h2>
            <form action={updateTask}
            className='max-w-sm p-12 border border-base-300 rounded-lg'>
                <input type="hidden" name="id" value={task?.id}></input>
                <input type='text' 
                defaultValue={task?.content}
                className='input input-bordered join-item'
                placeholder='type here' 
                name='content' 
                required></input>
                <div className='form-control'>
                    <label htmlFor='completed' className='label cursor-pointer'>
                        <span className='label-text'>completed</span>
                        <input type='checkbox' defaultChecked={task?.completed} id="completed" name="completed" className='checkbox checkbox-primary checkbox-sm'></input>
                    </label>
                </div>
                <button type="submit" className='btn btn-primary btn-block btn-sm'>Edit Task</button>
        </form>
</div>
    )
}

export default SingleTask