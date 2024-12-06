import React from 'react'
import './Achievement.css'
import { ExamData, AwardData } from '../assets/data/AchievementData';
import { Fade, Slide } from "react-awesome-reveal";

const Achievement = () => {
  return (
    <div className='achievement'>
        <Fade direction='up' duration={1850}>
        <div className='achievement_Title_section' >
              <p className='subTitle '>milestones I've reached</p>
              <h2 className='mainTitle '>Achievement</h2>
        </div>
        </Fade>
    <div className='achievement_mainContainer'>
            <div className='achievement_left'>
            <Fade direction='up' duration={1850}>
                <div className='achievement_left_title '>Tests</div>
            </Fade>
                {ExamData.map((data) =>{
                    return(
                    <Slide direction='up'  duration={1900}>
                    <div className='achievement_left_list_container'>
                        <div className='achievement_left_list_left'>
                            <div className='achievement_left_list_left_icon'>{data.icon}</div>
                        </div>
                        <div className='achievement_left_list_right'>
                            <div className='achievement_left_list_right_title'>{data.name}</div>
                            <div className='achievement_left_list_right_child'>
                                <div className='achievement_left_list_right_child_organizer'>{data.organizer}</div>
                                <div className='achievement_left_list_right_child_year'>{data.year}</div>
                            </div>
                            <div className='achievement_left_list_right_rank'>{data.Rank}</div>
                        </div>
                    </div>
                    </Slide>
                    )
                })}
            </div>
            <div className='achievement_right'>
                <Fade direction='up' duration={1850}>
                    <div className='achievement_right_title'>Awards</div>
                </Fade>
                {AwardData.map((data) =>{
                    return(
                    <Slide direction='up'  duration={1900}>
                    <div className='achievement_right_list_container'>
                        <div className='achievement_right_list_left'>
                            <div className='achievement_right_list_left_icon'>{data.icon}</div>
                        </div>
                        <div className='achievement_right_list_right'>
                            <div className='achievement_right_list_right_title'>{data.name}</div>
                            <div className='achievement_right_list_right_child'>
                                <div className='achievement_right_list_right_child_organizer'>{data.sponsored}</div>
                                <div className='achievement_right_list_right_child_year'>{data.year}</div>
                            </div>
                            <div className='achievement_right_list_right_sponsore'>{data.authority}</div>
                        </div>
                    </div>
                    </Slide>
                    )
                })}
        </div>
    </div>



    </div>
  )
}

export default Achievement