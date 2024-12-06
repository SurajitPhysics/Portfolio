import React from 'react'
import './ResearchItem.css'
import {Link } from 'react-router-dom';

const ResearchItem = (

    {
        id,img,category,title,year,journal,doi,volume,
    }


) => {
  return (
    <div className='researchItem_MainContainer' key={id}>

        <div className='researchItem_top'>
            <div className='researchItem_top-left'>
                <img className='researchItem_image' src={img} alt='' />
            </div>
            <div className='researchItem_top-right'>
                <div className='researchItem_left_type'>{category}</div>
            </div>
        </div>

        <div className='researchItem-bottom'>
            <div className='researchItem_bottom_title'>{title}</div>
            <div className='researchItem_bottom_Journal'>{journal}</div>
            <div className='researchItem_bottom_child'>
                <div className='researchItem_bottom_child_left'>
                    <div className='researchItem_bottom_volume'><span>Volume : </span>{volume}</div>
                    <div className='researchItem_bottom_year'>{year}</div>
                </div>
                <div className='researchItem_bottom_child_right'>
                    <Link  to={doi} target='_blank' className='researchItem_right_view btns btn' ><span>View/Read</span></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ResearchItem