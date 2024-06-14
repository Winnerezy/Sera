import React from 'react'
import { TaskCard } from './TaskCard'

export const Tracker = () => {
  return (
    <div className='flex flex-col gap-y-4'>
      <h3 className='text-2xl tracking-wide text-start font-bold underline'>Daily Tasks</h3>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
    </div>
  )
}
