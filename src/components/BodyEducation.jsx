import './BodyEducation.css'
import EducationItem from './EducationItem';
import { Fade, Slide } from "react-awesome-reveal";
import { EducationData } from '../assets/data/EducationData';

const Education = () => {

  return (

    <div className='education'>
        <Fade direction='up' duration={1850}>
        <div className='education-titleSection' >
            <p className='subTitle educationsub'>my academic background</p>
            <h2 className='mainTitle educationmain'>Qualification</h2>
        </div>
        </Fade>
        <Slide direction='up'  duration={1900}>
                {EducationData.map((item) => {
                    return (
                        <EducationItem item={item} key={item.id}
                        title = {item.title}
                        year = {item.year}
                        instituteName = {item.instituteName}
                        universityName = {item.universityName}
                        subject = {item.subject}
                        cgpa = {item.cgpa} 
                        /> 
                    )
                })}
            </Slide>  
    </div>
  )
}

export default Education;
