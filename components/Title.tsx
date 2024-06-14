'use client'

import { motion } from "framer-motion"

export const Title = ({ title }: { title: string }) => {
  return (
    <motion.h3 className='text-3xl font-[900] tracking-wide cursor-pointer'
        initial={{ scale: 1 }}
        whileTap={{ scale: 1.1 }}
    >
        { title }
    </motion.h3>
  )
}
