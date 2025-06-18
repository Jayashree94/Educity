import React from 'react'
import './About.css'
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img}  alt="about_img " className='about-img'></img>
            <img src={play_icon}  alt="play_icon " className='play-img'></img>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's leaders</h2>
            <p>The Public Petition dated 11-11-1839 initiated the establishment of Madras University. It was in January 
                1840 with Mr.George Norton as its President, that the University Board was constituted.</p>
            <p>In 1854 after a lapse of 14 years, the Government of India formulated a systematic educational policy for India and as a sequel to this on 5th September 1857 by an Act of Legislative Council of India, the University was established. 
                The University was organised in the model of London University.</p>
            <p>Madras University is the mother of almost all the old Universities of south India. 
                The University area of jurisdiction has been confined to three districts of Tamil Nadu in recent years.</p>
        </div>
      
    </div>
  )
}

export default About
