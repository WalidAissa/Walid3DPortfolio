import React from 'react'
import {Tilt} from "react-tilt"
import {motion} from "framer-motion"
import {styles} from '../styles'
import {info} from '../constants/constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5*index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
          options={{
          max:45,
          scale:1,
          speed:450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        > 
        <img src={icon} alt={title}
        className="w-18 h-20 object-contain"/>
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Here's a little bit about me</p>
        <h2 className={styles.sectionHeadText}>
          Introduction.</h2>
      </motion.div>

      <motion.p
      variants={fadeIn("","",0.1,1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Currently enrolled in a Bachelor of Computer Engineering at McGill University 🎓, my interests range from the fields of study of my degree (hardware/software development 👨🏽‍💻, telecommunications 📡, robotics 🤖, medical technologies 🫀, automotive and aerospace industry 🚀) to anything that involves creation.

      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {info.map((i, index) =>(
          <ServiceCard key={i.title} index={index} {...i}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")