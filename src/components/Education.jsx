import React from 'react'
import "./Education.scss"
import {motion} from "framer-motion"
import {styles} from "../styles"
import { educations } from '../constants'
// import { fadeIn, textVariant } from "../utils/motion";







const FeedbackCard =({
  index,
  branch,
  marks,
  name,
  degree,
  year,
  image,
})=>(
  <motion.div 
  variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='Box2 p-5 rounded-3xl xs:w-[320px] w-full'
  >
    <div className='mt-7 flex flex-col justify-between items-center gap-1' >
    <img
          src={image}
          alt={`feedback_by-${name}`}
          width="80" height="80"
          className='rounded-full object-cover'
        />

    </div>

  </motion.div>
)


function Education() {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
        <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>

        <motion.div >
          <p className={styles.sectionSubText}>Education Details</p>
          <h2 className={styles.sectionHeadText}>Education.</h2>
        </motion.div>
        </div>

        <div className={`-mt-20 justify-center pb-14 ${styles.paddingX} flex flex-wrap gap-7`} >

          {
            educations.map((education,index)=>(
             <FeedbackCard key={education.name} index={index} {...education}/>
            ))
          }

        </div>

    </div>
  )
}

export default Education
