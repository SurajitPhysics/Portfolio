import React from 'react'
import './Research.css'
import ResearchItem from '../components/ResearchItem'
import {ResearchData} from '../assets/data/ResearchData';
import {Slide,Fade } from "react-awesome-reveal";

const Research = () => {
  return (
    <div className='research'>
          <Slide direction='up' duration={1800}>
              <div className='researchTitle-section' >
                  <p className='subTitle '>my scholarly contributions</p>
                  <h2 className='mainTitle '>Research</h2>
              </div>
          </Slide>
          <div className='navpage_research_item'>
            {ResearchData.map((data) =>{
              return(
              <Fade direction='in' duration={1950}>
              <ResearchItem 
              id={data.id}
              img={data.img}
              category={data.category}
              title={data.title}
              year={data.year}
              journal={data.journal}
              doi={data.doi}
              volume={data.volume}
              />
              </Fade>
              )
            })}
          </div>
    </div>
  )
}

export default Research