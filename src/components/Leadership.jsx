import React from 'react'
import {Tilt} from "react-tilt"
import {motion} from "framer-motion"
import {styles} from '../styles'
import {services} from '../constants/constants'
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
        className="w-16 h-16 object-contain"/>
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const Leadership = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          But I'm more than a Developer</p>
        <h2 className={styles.sectionHeadText}>
          Leadership.</h2>
      </motion.div>

      <motion.p
      variants={fadeIn("","",0.1,1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
As a Student Representative for the Electrical, Computer, Software Engineering Student Society 🧑‍🎓, I planned events to enhance the student experience and represented my peers at council meetings. <br></br><br></br>As a Trustee for the Engineering Undergraduate Society ⚙️, I manage a $500,000 budget and ensure the society's accountability. <br></br><br></br>At Penrose Partners 🌐, I've helped high-profile clients like the Government of Bermuda and Nayms refine their strategies, driving significant growth 📈. <br></br><br></br>In my role as Director of Marketing for the McGill Product Management Association 📊, I lead initiatives to promote product management across campus. <br></br><br></br>These experiences have sharpened my leadership, communication, and strategic skills, extending my impact beyond software development 💻.      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) =>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Leadership, "leadership")