"use client";

import { AuthedNavigationItem } from "@/models";
import { capitalizeFirstLetter } from "@utils/capitalizeFirstLetter";
import { NavLink } from "react-router-dom";

export const MenuItem = (item: AuthedNavigationItem) => {
  return (
    <NavLink
      to={item.path}
      className={`grid grid-cols-[40px_1fr] items-center hover:text-p1 text-muted text-xl hover:text-sage transition-colors duration-200 ease-in-out py-[1rem] w-[12rem] px-2`}
    >
      {item.icon !== "" && (
        <span className="flex items-center">{item.icon}</span>
      )}
      <p className="flex">{item.name.toUpperCase()}</p>
    </NavLink>
  );
};
