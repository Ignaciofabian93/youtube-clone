import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex relative w-full max-w-lg">
      <input
        type="search"
        placeholder="Buscar..."
        className="bg-gray-100 rounded-full pl-14 pr-4 py-1 absolute right-0 -top-4 w-full"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <BiSearch size={18} className="absolute left-4 -top-2" />
    </form>
  );
};

export default SearchBar;
