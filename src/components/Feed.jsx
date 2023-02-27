import React, { useEffect, useState } from "react";

import { fetchData } from "../utils/fetchData";
import { Sidebar, Videos } from "../components";

const Feed = () => {
  const [videos, setVideos] = useState([]);
  const [selected, setSelected] = useState("ReactJs");
  useEffect(() => {
    fetchData(`search?part=snippet&q=${selected}`).then((data) =>
      setVideos(data.items)
    );
  }, [selected]);

  return (
    <div className="flex flex-col md:flex-row w-full px-4">
      <div className="flex w-full h-fit md:w-2/12 border-r-2">
        <Sidebar selected={selected} setSelected={setSelected} />
      </div>
      <div className="w-full md:w-10/12">
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default Feed;
