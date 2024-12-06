import React from 'react'
import './ReflectionItem.css'

function ReflectionItem (


    {
        id,title,year,organizer,sponsore,seminar,
    }





){



  return (
    <div className='reflectionItem_mainContainer' key={id}>
        <div className='reflectionItem_title'>{title}</div>
        <div className='reflectionItem_semniar'>{seminar}</div>
        <div className='reflectionItem_sponsore'><span>Sponsored by : </span>{sponsore}</div>
        <div className='reflectionItem_organize'><span>Organized by : </span>{organizer}</div>
        <div className='reflectionItem_date'>{year}</div>
    </div>
  )
}

export default ReflectionItem