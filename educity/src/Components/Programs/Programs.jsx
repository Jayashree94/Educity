import React from 'react'
import './Programs.css'
import program1 from "../../assets/program-1.png"
import program2 from "../../assets/program-2.png"
import program3 from "../../assets/program-3.png"
import program_icon1 from "../../assets/program-icon-1.png"
import program_icon2 from "../../assets/program-icon-2.png"
import program_icon3 from "../../assets/program-icon-3.png"

const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
        <img src={program1} alt='program1-img'></img>
        <div className="caption">
            <img src={program_icon1} alt="program_icon1" />
            <p>Graduation Degree</p>
        </div>
        </div>
        <div className="program">
        <img src={program2} alt='program2-img'></img>
        <div className="caption">
            <img src={program_icon2} alt="program_icon2" />
            <p>Master Degree</p>
        </div>
        </div>
        <div className="program">
        <img src={program3} alt='program3-img'></img>
        <div className="caption">
            <img src={program_icon3} alt="program_icon3" />
            <p>Post Graduation</p>
        </div>
        </div>
    </div>
  )
}

export default Programs
