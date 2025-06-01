'use client'
import React from 'react'
import prisma from '@/utils/db';
const deleteTask = async(id:any) => {
const task = await prisma.task.findUnique({
  where: {
    id: id,
  },
});
}

const DeleteForm = (id:any) => {
  return (
    <button onClick={(e:any)=>deleteTask(id)}>delete task</button>
  )
}

export default DeleteForm