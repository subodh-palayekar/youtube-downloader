import { NextResponse } from 'next/server';
const ytdl = require('@distube/ytdl-core');

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const videoLink = reqBody.videoLink;

    if (!videoLink) {
      return NextResponse.json(
        { error: 'Video link is missing' },
        { status: 400 }
      );
    }

    const videoId = ytdl.getVideoID(videoLink);
    const videoInfo = await ytdl.getInfo(videoId);

    const metaData = {
      embed: videoInfo.videoDetails.embed,
      title: videoInfo.videoDetails.title,
    };

    const filteredResponse = videoInfo.formats
      .filter((obj) => obj.url && obj.mimeType)
      .map(
        ({
          mimeType,
          url,
          qualityLabel,
          hasAudio,
          hasVideo,
          contentLength,
        }) => ({
          mimeType,
          url,
          qualityLabel,
          hasAudio,
          hasVideo,
          sizeMB: contentLength
            ? (parseInt(contentLength, 10) / (1024 * 1024)).toFixed(2)
            : null,
          contentLength,
        })
      );

    const finalData = {
      metaData,
      videoData: filteredResponse,
    };

    return NextResponse.json(finalData);
  } catch (error) {
    console.error('Error fetching video info:', error);
    if (error instanceof ytdl.VideoError) {
      return NextResponse.json(
        { error: 'Invalid YouTube video link or video not accessible.' },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'An error occurred while processing the request.' },
      { status: 500 }
    );
  }
}
