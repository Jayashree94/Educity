import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';


const App = () => {

  const[playVideo, setPlayVideo] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
      <Title subTitle ="Our Program" Title="What We Offer"/>
      <Programs />
      <About setPlayVideo = {setPlayVideo}/>
      <Title subTitle ="Gallery" Title="Campus Photos"/>
      <Campus />
      <Title subTitle ="TESTIMONIALS" Title="What Student Says"/>
      <Testimonials/>
      <Title subTitle ="CONTACT US" Title="Get in Touch"/>
      <ContactUs/>
      <Footer/>
      </div>
      <VideoPlayer playVideo = {playVideo} setPlayVideo={setPlayVideo}/>
    </div>
  )
}

export default App
