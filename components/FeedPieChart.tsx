'use client'

import { PieChart } from '@mui/x-charts'
import React from 'react'

export const FeedPieChart = () => {
  return (
    <div className='lg:w-1/2 w-full'>
    <PieChart colors={['red', 'white', 'pink']} series={[
      {
        data:[
          { id: 0, value: 40 },
          { id: 0, value: 45 },
          { id: 0, value: 15 }
        ]
      }
    ]}/>
  </div>
  )
}
