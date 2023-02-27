import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Videos, Sidebar } from "../components";
import { fetchData } from "../utils/fetchData";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  const [selected, setSelected] = useState("ReactJs");
  useEffect(() => {
    fetchData(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <div className="flex w-full px-4">
      <div className="w-2/12">
        <Sidebar selected={selected} setSelected={setSelected} />
      </div>
      <div className="w-10/12">
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default SearchFeed;
