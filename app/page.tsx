import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div className='w-sm'>
      <h1 className='text-5xl'>Home Page</h1>
      <p className='text-xl p-4'>This is my Next.js app that showcases a few different features.</p>
      <ul className='list-disc'>
        <li className='list-row'>Client-side counter: This is a simple useState page with a counter that works on client side</li>
        <li className='list-row'>API calls Drinks: This page makes a call to a free drinks API, and displays the response in a simple two column grid. Clicking on a single drink takes you to a page that shows dynamic routing.</li>
        <li className='list-row'>CRUD tasks: This page uses Prisma and SQLite to create a simple to-do list that you can add, edit, and delete from. The edit button also takes you to a individual task page showcasing dynamic routes again.</li>
        <li className='list-row'>Parallel with PPR: This page has three slots, two of which are static and one is dynamic. Showcasing Parallel routing and Partial Pre-rendering all in one. The number of notifications is from an API and changes every refresh.</li>
      </ul>
    </div>
  )
}

export default HomePage