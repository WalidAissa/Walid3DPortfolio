import React from 'react'
import {BallCanvas} from "./canvas"
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants/constants'
import {motion} from "framer-motion"
import {fadeIn, textVariant} from '../utils/motion'
import {styles} from '../styles'

const Tech = () => {
  return (

    <>
    
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
      Languages | Frameworks | Tools</p>
      <h2 className={styles.sectionHeadText}>
      Technical Skills.</h2>
      </motion.div>
      
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="mt-10 w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon}></BallCanvas>
            <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} text-center`}>
            {technology.name}
            </p>
            </motion.div>
          </div>
        ))}
      </div>
      
      </>
  )
}

export default SectionWrapper(Tech, "")