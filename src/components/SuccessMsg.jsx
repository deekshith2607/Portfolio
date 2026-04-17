import React from 'react'
import { motion } from 'motion/react'

const SuccessMsg = () => {
  return (
    < motion.div className='px-4 py-2 bg-gray-700  w-full rounded flex items-center justify-center '
      initial={{ opacity: 0, y: 50 }}   // before visible
      whileInView={{ opacity: 1, y: 0 }} // when in view
    
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true }} >
      <p className="text-green-400 text-center font-mono text-sm">
              ✅ Message sent successfully!
            </p>
    </motion.div>
  )
}

export default SuccessMsg
