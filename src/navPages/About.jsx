import React from 'react';
import {FaDownload} from 'react-icons/fa6';
import BodyAboutImage from '../assets/images/SG2.jpg';
import Education from '../components/BodyEducation';
import CV from '../assets/data/SurajitCV.pdf';
import Skill from '../components/Skill';
import './About.css';
import { Fade } from "react-awesome-reveal";
import Experience from '../components/Experience';
import EarthScene from '../components/EarthScene';




function About(){



  return (
   <div className='about'>
      <Fade duration={1800}>
      <div className='about-titleSection'>
          <p className='subTitle '>let me introduce myself</p>
          <h2 className='mainTitle '>About me</h2>
      </div>
      </Fade>
    {/* Main Container */}

    <div className='about-container'>

      {/* Container 1  : About Me: */}

      <div className='about-container-1'>
        <div className='about-container-1-left'>
        <Fade duration={1800} direction='up'>
            <p className="about-c1-subheading">
             Hi, I am <span>Dr. Surajit Guin</span>
            </p>
            <h2 className="about-c1-heading">Physicist and Educator</h2>
          </Fade>
            <div className="about-c1-info">
            <Fade duration={2000}>
                <p className='about-c1-para'>
                  Hello, I’m Dr. Surajit Guin, a dedicated physicist and educator with a 
                  passion for unraveling the mysteries of theoretical physics and advancing 
                  knowledge in material science and nanotechnology. I completed my Ph.D. in 
                  Theoretical Physics from Calcutta University, where my research delved into 
                  nanoscale systems and computational analysis.
                  <br />
                  <br />
                  I have consistently demonstrated academic excellence, having qualified prestigious 
                  national examinations like the CSIR-UGC NET (AIR-170) and GATE, along with earning 
                  a Junior Research Fellowship (JRF) from CSIR-UGC. My academic journey is built on a 
                  strong foundation in Physics and Mathematics, with a B.Ed. and M.Sc. in Physics that 
                  have honed both my teaching and analytical skills.
                  <br />
                  My research work has been showcased at various national conferences, 
                  including Energy Frontiers in Material Science and Recent Trends in 
                  Functional Materials. Through these platforms, I’ve had the privilege 
                  to contribute to discussions on innovative concepts like nanoscale Wankel 
                  motors and transition energy structures.
                  <br />
                  <br />
                  As an educator, I serve as a faculty member at AKPC Mahavidyalaya, 
                  where I strive to inspire students to explore the fascinating world 
                  of physics. Teaching has been a rewarding journey that allows me to 
                  bridge the gap between theoretical concepts and practical understanding.
                  <br />
                  <br />
                  Driven by curiosity and a commitment to continuous learning, I aim to 
                  contribute meaningfully to both academia and the scientific community. 
                  Whether through collaborative research or impactful teaching, I am 
                  excited to share my knowledge and passion for the wonders of science.
                </p>
                </Fade>
              </div>
              <Fade duration={2000} >
            <div className='about-c1-button'>
                <a href={CV} download='Soumyadip CV' className='about-cv btns btn'>
                      <span>Download CV <i className='aic'><FaDownload/></i></span> 
                </a>
            </div>
            </Fade>
        </div>

        <div className='about-container-1-right'>
        <div className='about-c1-image'>
                <img className='about-image' src={BodyAboutImage} alt='' />
            </div>
        </div>
      </div>

      {/* Container 2 : My Educational Information */}

      <div className='about-container-2'>
          <Education/>  
      </div> 

      {/* Container 3 : My Experience Information */}

      <div className='about-container-3'>
        <Experience/>  
      </div> 


      {/* Container 4 : My Skills */}

      <div className='about-container-4'>
        <Skill/>
      </div>
    </div>
   </div>
  )
}

export default About