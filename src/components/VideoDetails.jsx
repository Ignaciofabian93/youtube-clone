import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/fetchData";
import ReactPlayer from "react-player";
import { BiLike } from "react-icons/bi";

const VideoDetails = () => {
  const [videoDetails, setVideoDetails] = useState();
  const { id } = useParams();
  console.log({ id });

  useEffect(() => {
    fetchData(`videos?part=contentDetails,snippet,statistics&id=${id}`).then(
      (data) => setVideoDetails(data.items[0])
    );
  }, [id]);

  // if (!videoDetails?.snippet) return <Loader />;

  console.log("data: ", videoDetails);

  // const { snippet, statistics } = videoDetails;

  return (
    <div className="flex flex-col items-center w-11/12 h-screen mx-auto">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
        className="react-player"
        controls
      />
      <div className="flex w-full justify-between">
        <div className="flex flex-col w-full mt-4">
          <h2 className="text-2xl mb-4">{videoDetails?.snippet?.title}</h2>
          <h3 className="text-xl">{videoDetails?.snippet?.channelTitle}</h3>
        </div>
        <div className="flex w-fit h-fit mt-4">
          <div className="flex items-center mr-4">
            <BiLike size={16} />
            <p className="mx-2">{videoDetails?.statistics?.likeCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
