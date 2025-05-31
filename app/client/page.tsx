'use client'
import React, { useState } from 'react'


const Client = () => {
    const [counter, setCounter] = useState(0)

  return (
    <div>
      <h1 className='text-7xl'>Client</h1>
        <p>{counter}</p>
        <button className='btn' onClick={()=>setCounter(counter + 1)}>increase count</button>
                <button className='btn' onClick={()=>setCounter(counter - 1)}>decrease count</button>

    </div>
  )
}

export default Client