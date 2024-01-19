import React from "react";
import "./Education.scss";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { educations } from "../../constants";



const FeedBackCard =({
  index,
  branch,marks,
  name,degree,year,image,
})=>(
  <motion.div 
  variants={fadeIn("", "spring", index * 0.5, 0.75)}
  className='Box2 p-5 rounded-3xl xs:w-[320px] w-full'
  >

<div className='flex flex-col items-center justify-between gap-1 mt-7'>
        <img
          src={image}
          alt={`feedback_by-${name}`}
          width="80" height="80"
          className='object-cover rounded-full'
        />
        <div className='flex flex-col flex-1 mt-3'>
          <p className='text-center text-white font-medium text-[16px]'>
            <span className='text-center blue-text-gradient'>{name}</span> 
          </p>
          <p className='text-center mt-1 text-secondary text-[12px]'>
            {year}
          </p>
        </div>

        <p className='text-white font-black text-[48px]'>"</p>

        <div className='mt-1'>
      <p className='text-center text-white tracking-wider text-[18px]'>{degree}</p>
      <p className='mt-3 text-center pink-text-gradient'>{branch}</p>
      <p className='mt-3 text-center green-text-gradient'>{marks}</p>

    </div>

      </div>

  </motion.div>
)






function Education() {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}> Education Details</p>
          <h2 className={styles.heroHeadText}>Education.</h2>
        </motion.div>
      </div>

      <div className={`-mt-20 justify-center pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>

        {
          educations.map((education,index)=>(
            <FeedBackCard key={education.name} index={index} {...education}/>
          ))
        }

      </div>
    </div>
  );
}

export default Education;
