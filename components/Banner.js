import Image from "next/image";
import React from "react";


const Banner = () => {

  
  return (
    <div className="mt-7 mx-2 flex items-center justify-center flex-col">
      <div className="flex flex-col-reverse sm:flex-row items-center px-2 justify-center gap-5 font-semibold text-[40px] sm:text-[100px]  text-white ">YouTube <span className="flex justify-center w-15 sm: w-full" ><Image  src='/asset/youtube.png'   width='100' height='100' alt="youtube-logo" /></span>  </div>
      <span className="text-gradient font-semibold text-center text-[40px] sm:text-[100px]  text-[100px] ">
        Video Downloader
      </span>
    </div>
  );
}; 

export default Banner;
