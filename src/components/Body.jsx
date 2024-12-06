import React from 'react';
import './Body.css';
import CV from '../assets/data/SurajitCV.pdf';
import Typical from 'react-typical';
import tstImage from '../assets/images/SG3.jpg';
import {FaWhatsapp,FaDownload} from 'react-icons/fa6';
import { SiGooglescholar } from "react-icons/si";
import { BiLogoLinkedin,BiLogoFacebook } from "react-icons/bi";






export default function Body() {

  return (
    <div className='mainHome'>
  <div className='container'>
      <div className='left-container'>
      <div className='home-titleSection'>
                    <p className='subTitle homesubTitle' data-aos="slide-left">Hello, It's Me</p>
                    <h2 className='mainTitle homemainTitle' data-aos="slide-right">Dr. Surajit Guin</h2>
                </div>
                <div className='home-typical'>
                  <span>And, I'm a </span>
                  <span><Typical steps={[
                    "Theoretical Physicist",
                    1000,
                    "Educator",
                    1000, 
                    "Professor",
                    1000,
                    "Researcher",
                    1000,
                    "Science Enthusiast",
                    1000,
                    "Nanotechnology Explorer",
                    1000,
                    "Lifelong Learner",
                    1000,
                    ]}loop={Infinity}/></span>
                </div>
                <p className='home-paragraph' data-aos="slide-left">Advancing theoretical physics, exploring nanotechnology, and inspiring the next generation of scientists through research, teaching, and innovation.</p>
                <div className='home-social'>
                  <ul>
                    <li className='bds-li'><a href="https://api.whatsapp.com/send?phone=+916291893304&text=I'd like to connect with you" target='blank' rel='' ><FaWhatsapp className='socialicon s1' /></a></li>
                    <li className='bds-li'><a href='https://www.facebook.com/surajit.guin.39/' target='blank' rel='' ><BiLogoFacebook className='socialicon s3' /></a></li>
                    <li className='bds-li'><a href='https://in.linkedin.com/in/surajit-guin-174220238' target='blank' rel='' ><BiLogoLinkedin className='socialicon s2' /></a></li>
                    <li className='bds-li'><a href='https://scholar.google.com/citations?user=2rsKIFwAAAAJ&hl=en' target='blank' rel=''  ><SiGooglescholar className='socialicon s4' /></a></li>
                  </ul>
                </div>
                <div className='home-button'>
                  <a href={CV} download='Soumyadip Cv' className='home-cv btns'>
                      <span>Download CV <i className='bic'><FaDownload/></i> </span>
                      
                  </a>
                </div>
            </div>
            <div className='right-container' >
              <div className='right-container-design'>
                <div className='rbox'>
                    <div className='ct'>
                    <img className='ctimg' src={tstImage} alt='' data-aos="slide-right"/>
                    </div>
                </div>
              </div>
            </div>
            <div className='right-container1' >
              <div className='right-container-design1'>
                <div className='circle1'></div>
                <div className='circle1'></div>
              </div>
            </div>
    </div>
                
        </div>   
        
  )
}
