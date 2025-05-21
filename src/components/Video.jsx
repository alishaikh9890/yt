import React, { useRef, useState } from 'react'
import YouTube from 'react-youtube';

const Video = ({ vidId, title, thumb }) => {

    const [playing, setPlaying] = useState(true)
    const playerRef = useRef(null);


    const onReady = (e) => {
        playerRef.current = e.target;
        playerRef.current.mute()
    }



    const handleMouseEnter = () => {
        if(playerRef.current)
        {
            setPlaying(false)
            playerRef.current.playVideo()
        }
    }



    const handleMouseLeave = () => {
        if(playerRef.current)
        {
            setPlaying(true)
            playerRef.current.pauseVideo()
        }
    }



    const opts = {
        width: '100%',
        height:'100%',
       playerVars: {
                autoplay: 0,        // Autoplay the video
                mute: 1,            // Start muted (required for autoplay to work in most browsers)
                controls: 1,      // Show player controls
                modestbranding: 1,  // Minimal YouTube branding
    },
    };






    return (
        // <div className='border border-red-500 w-full aspect-video max-w-mdrounded-2xl overflow-hidden'>
        <div  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  className={ `relative cursor-pointer aspect-video overflow-hidden ${playing && `rounded-2xl`}` }>
          { playing &&   <img src={thumb.high.url} className='absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-300' /> }

            <YouTube style={{aspectRatio:"5/2.81", cursor:"pointer"}} videoId={vidId} opts={opts} onReady={onReady}  />
        </div>
        // </div>
    )
}

export default Video 