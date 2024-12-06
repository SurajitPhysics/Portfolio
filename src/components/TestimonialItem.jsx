import React from 'react';
import './TestimonialItem.css';
import {FaQuoteLeft} from 'react-icons/fa';

function BodyTestimonialItem(
  {
    img,
    name,
    profile,
    institute,
    about  
  }
) {
  return (
    <div className='ttestimonialItem-container'>
        <div className='ttestimonialItem-box'>

            <div className='ttestimonialItem-imgBox'>
              <img src={img} alt=''/>
            </div>

            <p className='ttestimonialItem-about'>{about}</p>
            
            <div className='ttestimonialItem-bottom'>
                <div className='ttestimonialItem-bottom-left'>
                    <h4 className='t-name'>{name}</h4>
                    <h4 className='t-profile'>{profile}</h4>
                    <h4 className='t-ins'>{institute}</h4>
                </div>
                <div className='ttestimonialItem-bottom-right'><i className='ttestimonialItem-bottom-right-icon'><FaQuoteLeft/></i></div>
            </div>

        </div>
      </div>
  )
}

export default BodyTestimonialItem