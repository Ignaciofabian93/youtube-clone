import React from "react";

import { VideoCard, ChannelCard } from "../components";

const Videos = ({ videos }) => {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {videos.map((item, index) => (
        <div key={index}>
          {<VideoCard video={item} />}
          {/* {<ChannelCard channelDetail={item} />} */}
        </div>
      ))}
    </div>
  );
};

export default Videos;
