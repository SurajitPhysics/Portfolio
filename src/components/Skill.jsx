import React from 'react';
import { SkillData } from '../assets/data/SkillData';
import { Fade,Slide } from "react-awesome-reveal";
import './Skill.css';

const Skill = () => {


  return (
    <div className='skill'>
        <Slide direction='up' duration={1800}>
        <div className='skillTitle-section' >
              <p className='subTitle '>my technical level</p>
              <h2 className='mainTitle '>Skills</h2>
        </div>
        </Slide>
        <div className='skill-mainContainer'>

        <Fade duration={1800}>
        {SkillData.map((data) =>{
            return(
                <div className='skill-webApp' key={data.id}>
                    <div className='skill-box'>
                            <Fade cascade direction='left' duration={600}>
                                {data.rowValue.map((item) =>{
                                    return(
                                    <div className='skill-data'key={item.id}>
                                        <i className='skill-icon'><img src={item.icon} alt='' className='skill-icon-image'/></i>
                                        <div className='skill-content'>
                                            <div className='skill-name'>{item.name}</div>
                                            <div className='skill-level'>{item.level}</div>
                                        </div>
                                    </div>
                                        )
                                })}
                            </Fade>
                    </div>
                 </div>

                 )
            })}

        </Fade>
        </div>
    </div>
  )
}

export default Skill