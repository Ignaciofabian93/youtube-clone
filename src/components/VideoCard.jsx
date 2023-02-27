import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Link to={`/video/${videoId}`} className="">
      <div className="video-card cursor-pointer mb-4">
        <img src={snippet?.thumbnails?.high?.url} className="card-img mb-2" />
        <h6 className="text-md mb-4">{snippet?.title.slice(0, 30)}</h6>
        <p className="text-sm">{snippet?.channelTitle}</p>
      </div>
    </Link>
  );
};

export default VideoCard;
