"use client"
import React from 'react'
import prisma from '@/utils/db';

const createTask = async(info:string) => {
const task = await prisma.task.create({
  data: {
    content: {info},
  },
});
}

const TaskForm = () => {
  return (
    <div>Create a new task</div>
  )
}

export default TaskForm