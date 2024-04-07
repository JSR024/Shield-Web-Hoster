'use client'

import {motion} from 'framer-motion'

const Btn = ({className, children}) => {
  return (
    <motion.button className={className} whileHover={{scale:1.2}} whileTap={{scale:0.9}} transition={{type:'spring', stiffness:400, damping:17}}>
        {children}
    </motion.button>
  )
}

export default Btn