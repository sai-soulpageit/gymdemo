import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className="Programs" id='programs'>
        
        {/* for heading of programs */}

        <div className="Programs-header">
            <span className='stroke-text'>Explore our</span>
            <span>programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>

        <div className="program-categories">
          {programsData.map((program)=>(
            <div className='category'>
              {program.image}
              <span>{program.heading}</span>
              <span>{program.details}</span>
                 <div className='join-now'>
                    <span>Join now</span>
                    <img src={RightArrow} alt="rightarrow" />
                 </div>
            </div>
          ))}
        </div>
        
    </div>
  )
}

export default Programs