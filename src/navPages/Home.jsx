import React from 'react';
import Body from '../components/Body';
import BodyAbout from '../components/BodyAbout';
import Education from '../components/BodyEducation';
import Skill from '../components/Skill';
import Achievement from '../components/Achievement';
import BodyTestimonial from '../components/BodyTestimonial';
import BodyContact from '../components/BodyContact';
import BodyResearch from '../components/BodyResearch';
import BodyExperience from '../components/Experience';
import BodyReflection from '../components/BodyReflection';


function Home() {
  return (
    <>
        <Body/>
        <BodyAbout/>
        <Education/>
        <BodyResearch/>
        <Achievement/>
        <BodyExperience/>
        <BodyReflection/>
        <Skill/>
        <BodyTestimonial/>
        <BodyContact/>
    </>
  )
}

export default Home