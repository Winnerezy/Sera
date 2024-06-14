'use client'

import { Card, CardBody } from '@chakra-ui/react'
import { motion } from "framer-motion"

export const TaskCard = () => {
  return (
    <Card className='max-w-[700px] md:max-w-none w-full h-[300px] rounded-[20px] shadow-lg border p-4 cursor-pointer'>
        <motion.h5
            whileHover={{ accentColor: 'red' }}
            className='text-xl font-semibold tracking-wide'
        >
            lorem5 vpieshowlnv
             wenvoewuvow vwo
        </motion.h5>
        <CardBody className='font-light tracking-wider'>
            Lorem ipsum dolor sit amet consectetur.
            Lorem ipsum dolor sit amet consectetur.
            Lorem ipsum dolor sit amet consectetur.
        </CardBody>
    </Card>
  )
}
