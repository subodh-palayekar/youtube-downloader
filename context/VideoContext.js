"use client"
import React, { createContext, useContext, useState } from 'react'

export const VideoContext = createContext();

export const VideoProvider = ({children}) => {

    const [result,setResult] = useState([]);
    const [loading,setLoading] = useState(false);
  return (
    <VideoContext.Provider  value={{result,setResult ,loading,setLoading}}>
      <div>{children}</div>
    </VideoContext.Provider>
  )
}

export const useVideoContext =()=>{
  return useContext(VideoContext);
}

