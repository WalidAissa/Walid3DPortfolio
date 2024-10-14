import React from 'react'
import {BallCanvas} from "./canvas"
import {ChestCanvas} from "./canvas"
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
      
      
      <div className="flex flex-row flex-wrap justify-center w-full">
      <h3 className={`"text-white font-black md:text-[30px] sm:text-[20px] xs:text-[10px]" text-center pt-20 py-5`}>
            Click on the chest to see more technologies I've mastered!
      </h3>
        <div className="bg-tertiary rounded-2xl sm:w-[260px] w-full h-full shadow-card green-pink-gradient p-[1px]">
        <a href="/Resume_Walid_Aissa_v2024.pdf" download="Resume_Walid_Aissa.pdf">
          <div className='bg-tertiary rounded-[20px] py-5 px-12 h-[200px] flex justify-evenly items-center flex-col'> 
          <ChestCanvas/>
          </div>
        </a>
        </div>
      </div>
      
      
      
      
      </>
  )
}

export default SectionWrapper(Tech, "")