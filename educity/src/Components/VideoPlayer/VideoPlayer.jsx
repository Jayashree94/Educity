import React, { useRef } from 'react';
import './VideoPlayer.css'
import video_play_back from "../../assets/videoplayback.mp4";

const VideoPlayer = ({playVideo, setPlayVideo}) => {

const player = useRef(null);

const closePlayer=(e)=>{
    if(e.target === player.current){
        setPlayVideo(false);
    }

}

  return (
    <div className={`video-player ${playVideo?"" : 'hide'}`} ref={player} onClick={closePlayer}>
        <video src= {video_play_back} alt="video-player" autoPlay muted controls></video>
      
    </div>
  )
}

export default VideoPlayer
