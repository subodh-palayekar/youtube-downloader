import { NextResponse } from "next/server";
const ytdl = require("ytdl-core");

export async function POST(request) {
  const reqBody = await request.json();
  const videoLink = reqBody.videoLink;
  console.log(videoLink);

  const videoId =  ytdl.getVideoID(videoLink);

  const videoInfo = await ytdl.getInfo(videoId);

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
      })
    );

  return NextResponse.json(filteredResponse);
}
