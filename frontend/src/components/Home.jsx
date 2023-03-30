import React from 'react'
import bgVideo from '../assets/vid1.mp4' 
export default function Home() {
  return (
    <>
    <video
      src={bgVideo}
      autoPlay
      loop
      muted
    ></video>
    </>
  )
}
