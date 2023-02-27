import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full py-4 px-2 shadow-sm mb-4">
      <Link to={"/"} className="ml-2 sm:text-xs md:text-2xl w-fit">
        <span className="font-bold">YT</span>
        <span className="font-bold bg-blue-600 p-2 rounded-xl ml-1 text-white">
          Clone
        </span>
      </Link>
      <div className="flex justify-center w-8/12">
        <SearchBar />
      </div>
    </div>
  );
};

export default Navbar;
