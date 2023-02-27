import React from "react";

import { categories } from "../utils/constants";

const Sidebar = ({ selected, setSelected }) => {
  return (
    <ul className="sidebar-items flex items-center w-full md:flex-col">
      {categories.map((items) => (
        <li
          key={items.name}
          onClick={() => setSelected(items.name)}
          className="sidebar-item m-1 hover:bg-blue-600 hover:text-white cursor-pointer transition-all"
        >
          {items.name}
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
