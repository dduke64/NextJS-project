import React from 'react'
import prisma from '@/utils/db';

const fetchTask = async(id:any) => {
const task = await prisma.task.findUnique({
  where: {
    id: id,
  },
});
}

const SingleTask = async({params}:any) => {
    const task = await fetchTask(params.id)
    console.log(task)
  return (
<div>asd</div>
    )
}

export default SingleTask