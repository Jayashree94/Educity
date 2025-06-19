import React, { useRef} from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user1 from '../../assets/user-1.png';
import user2 from '../../assets/user-2.png';
import user3 from '../../assets/user-3.png';
import user4 from '../../assets/user-4.png';
import "react-router-dom";



const Testimonials = () => {
    const slider = useRef();
    let tx=0;

    const slideForward = () => {
        if(tx > -50){
            tx -=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
          if (tx === -50) {
            tx = 25
        }
    }

    const slideBackward = () => {
         if(tx < 0){
            tx +=25;
        }
         slider.current.style.transform = `translateX(${tx}%)`;

    }


  return (
    <div className='testimonials'> 
    <img src={next_icon} alt="next_icon" className='next-btn' onClick={slideForward}></img>
    <img src={back_icon} alt="back_icon" className='back-btn' onClick={slideBackward}></img>
    <div className='slider'>
        <ul ref ={slider}>
            <li>
                <div className="slide">
                    <div className="user_info">
                        <img src={user1} alt="user_1" ></img>
                        <div>
                            <h3>William Jackson</h3>
                            <span>Educity, USA</span>
                        </div>
                    </div>
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum veniam corrupti, 
                        incidunt labore possimus, aut maiores, architecto quae in eius hic libero earum deserunt. 
                        Earum, totam deserunt! Vero, enim dicta.</p>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="user_info">
                        <img src={user2} alt="user_2" ></img>
                        <div>
                            <h3>William Jackson</h3>
                            <span>Educity, USA</span>
                        </div>
                    </div>
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum veniam corrupti, 
                        incidunt labore possimus, aut maiores, architecto quae in eius hic libero earum deserunt. 
                        Earum, totam deserunt! Vero, enim dicta.</p>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="user_info">
                        <img src={user3} alt="user_3" ></img>
                        <div>
                            <h3>William Jackson 3 </h3>
                            <span>Educity, USA</span>
                        </div>
                    </div>
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum veniam corrupti, 
                        incidunt labore possimus, aut maiores, architecto quae in eius hic libero earum deserunt. 
                        Earum, totam deserunt! Vero, enim dicta.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user_info">
                        <img src={user4} alt="user_4" ></img>
                        <div>
                            <h3>William Jackson 4</h3>
                            <span>Educity, USA</span>
                        </div>
                    </div>
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum veniam corrupti, 
                        incidunt labore possimus, aut maiores, architecto quae in eius hic libero earum deserunt. 
                        Earum, totam deserunt! Vero, enim dicta.</p>
                </div>
            </li>
        </ul>
    </div>
      
    </div>
  )
}

export default Testimonials
