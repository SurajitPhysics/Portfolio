import React, { useEffect, useState } from 'react'
import './Reflection.css'
import { ReflectionData, ReflectionNavList } from '../assets/data/ReflectionData';
import ReflectionItem from '../components/ReflectionItem'
import { Fade,Slide} from "react-awesome-reveal";

const Reflection = () => {



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
    <div className='reflection-main'>
    <Fade direction='up' duration={1850}>
    <div className='reflection-titleSection' >
        <p className='subTitle reflectionsub'>sharing ideas and insights</p>
        <h2 className='mainTitle reflectionmain'>Reflection</h2>
    </div>
    </Fade>
    <div className='reflectionNav'>
    <Slide direction='up'  duration={1600}>
        <div className='reflection__filters' >
            {ReflectionNavList.map((item, index) => {
                return (
                    <span 
                        onClick={(x)=>{
                        handleClick(x,index);
                        }} 
                        className={`${active === index ? 'reflection_active__work' : ''}reflection__items`} key={index}>
                        <i className='reflection_item-icons'>{item.icon}</i>{item.name}
                    </span>   
                )
            })}
        </div>
        </Slide>
        <div className='reflectionNav-content' >
        {data.map((item) =>{
            return(
            <span>
                <Fade direction='in'  duration={1950}>
                <ReflectionItem item={item} key={item.id}
                title = {item.title}
                year = {item.year}
                sponsore = {item.sponsore}
                organizer = {item.organizer}
                seminar = {item.seminar} 
                />
                </Fade>
            </span>
            )
        })}
    </div>
</div>
</div>
)

}

export default Reflection