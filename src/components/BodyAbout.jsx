import React from 'react'
import './BodyAbout.css'
import {Link } from 'react-router-dom'
import BodyAboutImage from '../assets/images/SG4.jpg'
import { Fade } from "react-awesome-reveal";

function BodyAbout() {

  return (
    <div className='bodyAbout'>
            <Fade duration={1850} direction='up'>
            <div className='bodyAbout-titleSection'>
                <p className='subTitle bdyaboutsub'>Let me introduce myself</p>
                <h2 className='mainTitle'>About Me</h2>
            </div>
            </Fade>

        <div className='bodyAbout-container'>
        <Fade duration={1850}>
            <div className='bodyAbout-left'>
                <img className='bodyAbout-image' src={BodyAboutImage} alt='' />
            </div>
        </Fade>
            <div className='bodyAbout-right'>
                <Fade duration={1850} direction='up'>
                <p className='bodyAbout-paragraph'>I’m Dr. Surajit Guin, a physicist and educator specializing in theoretical physics and nanotechnology. With a Ph.D. from Calcutta University and a passion for research and teaching, I aim to inspire the next generation of scientists while exploring the fascinating world of physics, <Link to='/about'> and many more...</Link></p>
                </Fade>
                <div className='bodyAbout-button'>
                <Fade duration={1850} direction='up'>
                    <Link to='/about' className='bodyabt-readMore btns'><span>Read More</span></Link>
                    <Link to='/research'  className='bodyabt-github btns'><span>Research</span></Link>
                    </Fade>
                </div>
            </div>

        </div>
     </div>
  )

}

export default BodyAbout