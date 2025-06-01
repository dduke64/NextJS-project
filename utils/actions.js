'use server'
import prisma from '@/utils/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';




export const getAllTasks = async() => {
    return await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
})
}

export const createTask = async(formData) => {
        const content = formData.get('content')
     await prisma.task.create({
  data: {
    content: content,
  },

});
revalidatePath('/tasks')
}

export const deleteTask = async(formData) => {
    const id = formData.get("id");
const deleteTask = await prisma.task.delete({
  where: {
    id: id,
  },
});
revalidatePath('/tasks')
}

export const fetchTask = async(id) => {
return await prisma.task.findUnique({
  where: {
    id: id,
  },
});
}

export const updateTask = async(formData) => {
    const id = formData.get("id");
    const content = formData.get("content");
    const completed = formData.get("completed");
    await prisma.task.update({
  where: {
    id: id,
  },
  data: {
    content,
    completed:completed === 'on'? true: false
  },
});
redirect('/tasks')
}