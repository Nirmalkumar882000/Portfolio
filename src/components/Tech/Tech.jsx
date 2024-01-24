import React from 'react'
import { SectionWrapper } from "../hoc";
import { technologies } from "../../constants";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import BallCanvas from '../canvas/Ball';

const Tech = () => {
  return (
    <>
    <motion.div id="tech" variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText} text-center`}>
          Tools
        </h2>
    </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
        {
            technologies.map((tech)=>(
                <div style={{height:'5rem', width:"5rem"}} key={tech.name}>
                    <BallCanvas icon={tech.icon}/>
                </div>
            ))
        }
        
    </div>
    </>
  )
}

export default Tech
