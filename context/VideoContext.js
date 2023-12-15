"use client"
import React, { createContext, useState } from 'react'

export const VideoContext = createContext();

export const VideoProvider = ({children}) => {

    const [result,setResult] = useState([])
  return (
    <VideoContext.Provider  value={{result,setResult}}>
      <div>{children}</div>
    </VideoContext.Provider>
  )
}


