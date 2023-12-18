'use client'

import { useVideoContext } from "@/context/VideoContext";
import Link from "next/link";
import { LiaDownloadSolid } from "react-icons/lia";
import { FaFileVideo } from "react-icons/fa";
import { FaFileAudio } from "react-icons/fa6";
import { MdDownloadForOffline } from "react-icons/md";


const Table = () => {
  const { result } = useVideoContext();
  const videoData = result.videoData;
  const shouldRenderTable = videoData?.length > 0;

  return shouldRenderTable ? (
    <div className="overflow-auto mt-7 table-auto">
      <table className="min-w-full bg-gray-800 text-white border-3 border-blue-800 border-collapse">
        <thead className='border-2  border-white'>
          <tr className=' bg-blue-600 '>
            <th className="text-lg py-5 px-7">Quality</th>
            <th className="text-lg py-5 px-7">Size</th>
            <th className="text-lg py-5 px-7 ">Link</th>
          </tr>
        </thead>
        <tbody className='border-2  border-white'>
          <tr className=" bg-red-500 text-center font-semibold">
            <td colSpan="3" className="py-2 px-7 text-lg font-semibold">Video + Audio</td>
          </tr>
          {videoData?.filter((video)=>video.hasAudio && video.hasVideo).map((video) => {
            return (
              <tr key={video.url} aria-colspan={2} className='border-2  border-white'>
                <td className="font-semibold py-5 px-7">{video.qualityLabel}</td>
                <td className="font-semibold py-5 px-7">{video.sizeMB=='NaN' ? 'NA' : video.sizeMB+"MB" }</td>
                <td className=" font-semibold text-yellow-400 py-5  px-7 flex justify-center"><Link target="_blank" href={video.url}><MdDownloadForOffline  size={27}/></Link></td>
              </tr>
            );
          })}
          <tr className=" bg-red-500 text-center font-semibold">
            <td colSpan="3" className="py-2 px-7 text-lg font-semibold">Audio Only </td>
          </tr>
          {videoData?.filter((video)=>video.hasAudio && !video.hasVideo).map((video) => {
            return (
              <tr key={video.url} aria-colspan={2} className='border-2  border-white'>
                <td className="font-semibold py-5 px-7">MP3</td>
                <td className="font-semibold py-5 px-7">{video.sizeMB=='NaN' ? 'NA' : video.sizeMB+"MB" }</td>
                <td className=" font-semibold text-yellow-400 py-5 px-7 flex justify-center"><Link target="_blank" href={video.url}><FaFileAudio   size={27}/></Link></td>
              </tr>
            );
          })}
          <tr className=" bg-red-500 text-center font-semibold">
            <td colSpan="3" className="py-2 px-7 text-lg font-semibold">Video Only </td>
          </tr>
          {videoData?.filter((video)=>!video.hasAudio && video.hasVideo).map((video) => {
            return (
              <tr key={video.url} aria-colspan={2} className='border-2  border-white'>
                <td className="font-semibold py-5 px-7">{video.qualityLabel}</td>
                <td className="font-semibold py-5 px-7">{video.sizeMB=='NaN' ? 'NA' : video.sizeMB+"MB" }</td>
                <td className=" font-semibold text-yellow-400 py-5 px-7 flex justify-center"><Link target="_blank" href={video.url}><FaFileVideo  size={27}/></Link></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ) : <></>;
};

export default Table;
