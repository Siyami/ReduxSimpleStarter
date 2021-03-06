import React from 'react';

const VideoDetail = ({ video }) => {
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="videodetail col-md-8">
      <div className="embed-responsive embed-responsive-16by19">
        <iframe className="embed-responsive-item" src={url} ></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoDetail;
