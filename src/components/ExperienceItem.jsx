import React from 'react';
import './ExperienceItem.css';
import {FaRegCalendarAlt} from 'react-icons/fa';
import {Slide } from "react-awesome-reveal";

function ExperienceItem(

  {
    id,title,duration,institute,nature,
  }

) {

  return (
    <Slide direction='up' duration={1600} >
    <div className='experienceItem' key={id} >
          <div className='experienceItem-box'>
            <div className='experienceItem-content'>
              <div className='experienceItem-border'>
                <div className='experienceItem__content'>
                  <div className='experienceItem-year'><i><FaRegCalendarAlt/></i>{duration}</div>
                  <h2 className='experienceItem-degree'>{title}</h2>
                  <div className='experienceItem-institute'>{institute}</div>
                  <span className='experienceItem-cgpa'>{nature}</span>
                </div>
              </div>
            </div>
          </div>
      </div>
      </Slide>
  )
}

export default ExperienceItem