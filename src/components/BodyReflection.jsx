import React, { useEffect, useState } from 'react'
import './BodyReflection.css'
import { ReflectionData, ReflectionNavList } from '../assets/data/ReflectionData';
import ReflectionItem from '../components/ReflectionItem'
import { Fade,Slide} from "react-awesome-reveal";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay,  Pagination,Keyboard,  } from 'swiper/modules';

const BodyReflection = () => {



  const [item, setItem] = useState({name: 'Visit'});
  const [data, setData] = useState([]);
  const [active, setActive] = useState(0);
  
  useEffect(() => {
      const newItem = ReflectionData.filter((data)=>{
          return data.category === item.name;
      });
      setData(newItem);
  }, [item]
  );
  
  const handleClick = (x,index)=>{
      setItem({name : x.target.textContent})
      setActive(index)
  };







  return (
    <div className='bodyReflection-main'>
    <Fade direction='up' duration={1850}>
    <div className='bodyReflection-titleSection' >
        <p className='subTitle bodyReflectionsub'>sharing ideas and insights</p>
        <h2 className='mainTitle bodyReflectionmain'>Reflection</h2>
    </div>
    </Fade>
    <div className='bodyReflectionNav'>
    <Slide direction='up'  duration={1600}>
        <div className='bodyReflection__filters' >
            {ReflectionNavList.map((item, index) => {
                return (
                    <span 
                        onClick={(x)=>{
                        handleClick(x,index);
                        }} 
                        className={`${active === index ? 'bodyReflection_active__work' : ''}bodyReflection__items`} key={index}>
                        <i className='bodyReflection_item-icons'>{item.icon}</i>{item.name}
                    </span>   
                )
            })}
        </div>
        </Slide>
        <div className='bodyReflectionNav-content' >

                    <div className='bodyReflection-slider'>
                    <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                      delay: 6800,
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
                    {data.map((data,index)=>{
                                        if(index >=5) return;
                                        return <div className='bodyReflection-item'>
                             <SwiperSlide key={data.id}>
                                <ReflectionItem 
                                    title = {data.title}
                                    year = {data.year}
                                    sponsore = {data.sponsore}
                                    organizer = {data.organizer}
                                    seminar = {data.seminar} 
                                />
                          </SwiperSlide></div>
                                    })}
                      
                    </Swiper>
                    </div>

    </div>
</div>
</div>
)

}

export default BodyReflection