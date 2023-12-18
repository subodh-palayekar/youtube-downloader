'use client'

import { useVideoContext } from "@/context/VideoContext";
import Card from "./Card";



const Info = () => {

  const {result} = useVideoContext();
  
  const iframeUrl = result.metaData?.embed.iframeUrl;
  const title = result.metaData?.title
 const showImg = iframeUrl? false : true;

  return showImg ? (
    <Card/>
  ):(
  <div className="flex flex-col justify-center sm:w-[461px] sm:h-[394px]  w-[305px] h-[390px] mt-8 gap-8">
        <iframe className="w-full h-full" src={iframeUrl}></iframe>
        <span className="text-center text-2xl font-poppins font-semibold text-white">{title}</span>
    </div>
  )
};

export default Info;
