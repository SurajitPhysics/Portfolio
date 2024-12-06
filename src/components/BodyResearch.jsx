import React from 'react'
import './BodyResearch.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay,  Pagination,Keyboard,  } from 'swiper/modules';
import {ResearchData} from '../assets/data/ResearchData'
import { Fade} from "react-awesome-reveal";
import ResearchItem from '../components/ResearchItem'

const BodyResearch = () => {
  return (
    <div className='bodyResearch'>
        <div className='bodyResearch-container'>
        <Fade direction='up' duration={1850}>
            <div className='bodyResearch-titleSection' >
                <p className='subTitle'>my scholarly contributions</p>
                <h2 className='mainTitle'>Research</h2>
            </div>
        </Fade>
        <Fade duration={1850}>
        <div className='bodyResearch-slider'>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2800,
          disableOnInteraction: false,
        }}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          
          dynamicBullets: true,
        }}


        modules={[Autoplay,Keyboard,  Pagination]}
        className="mySwiper"
      >
        {ResearchData.map((data,index)=>{
                            if(index >=5) return;
                            return <div className='bodyResearch-item'>
                             <SwiperSlide key={data.id}>
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
                          </SwiperSlide></div>
                        })}
                      
        </Swiper>
        </div>
        </Fade>

      </div>

    </div>
  )
}

export default BodyResearch