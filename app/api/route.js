import { NextResponse } from "next/server";
import { metadata } from "../layout";
const ytdl = require("ytdl-core");

export async function POST(request) {
  const reqBody = await request.json();
  const videoLink = reqBody.videoLink;
  console.log(videoLink);

  const videoId =  ytdl.getVideoID(videoLink);

  const videoInfo = await ytdl.getInfo(videoId);

  const metaData = {
    embed : videoInfo.videoDetails.embed,
    title : videoInfo.videoDetails.title
  }

  const filteredResponse = videoInfo.formats
    .filter((obj) => obj.url && obj.mimeType)
    .map(
      ({ mimeType, url, qualityLabel, hasAudio, hasVideo, contentLength }) => ({
        mimeType,
        url,
        qualityLabel,
        hasAudio,
        hasVideo,
        sizeMB: (parseInt(contentLength, 10) / (1024 * 1024)).toFixed(2),
        contentLength
      })
    );


    const finalData = {
      metaData,
      videoData : filteredResponse
    }

  return NextResponse.json(finalData);
}
