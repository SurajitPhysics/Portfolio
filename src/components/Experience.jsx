import './Experience.css'
import ExperienceItem from './ExperienceItem';
import { Fade, Slide } from "react-awesome-reveal";
import { ExperienceData } from '../assets/data/ExperienceData';

const Experience = () => {

  return (

    <div className='experience'>
        <Fade direction='up' duration={1850}>
        <div className='experience-titleSection' >
            <p className='subTitle experiencesub'>my professional journey</p>
            <h2 className='mainTitle experiencemain'>Experience</h2>
        </div>
        </Fade>
        <Slide direction='up'  duration={1900}>
                {ExperienceData.map((item) => {
                    return (
                        <ExperienceItem item={item} key={item.id}
                        title = {item.title}
                        duration = {item.duration}
                        institute = {item.institute}
                        universityName = {item.universityName}
                        subject = {item.nature}
                        /> 
                    )
                })}
            </Slide>  
    </div>
  )
}

export default Experience;
