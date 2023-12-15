import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="mt-7 flex items-center justify-center flex-col">
      <div className="flex items-center  gap-5 font-black text-[100px]  text-white ">YouTube <Image  src='/asset/youtube.png'  width='100' height='100' alt="youtube-logo" /> </div>
      <span className=" font-black text-center text-[100px]  text-blue-500 ">
        Video Downloader
      </span>
    </div>
  );
}; 

export default Banner;
