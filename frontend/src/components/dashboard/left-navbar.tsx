import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { leftNavbarLinkItems } from "@constants";
import { AuthedNavigationItem, Path } from "@models";
import {
  ChevronDownIcon,
  CollapseArrowIcon,
  OverviewIcon,
  XIcon,
} from "@components/icons";

export const LeftNavbar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const { pathname } = useLocation();
  // const currentPage = navigationPages.find(page => page.path.startsWith(pathname)) || navigationPages[0];

  return (
    <nav
      className={`relative flex flex-col border-r border-r-major/20 ${collapsed ? "w-[6.4rem] min-w-[6.4rem]" : "w-[320px] min-w-[320px]"}`}
    >
      <ul className="flex flex-col grow">
        {leftNavbarLinkItems.map((item, index) => (
          <NavLink to={`/dashboard${item.path}`} className="">
            <li
              key={index}
              className={`relative flex group hover:bg-major/20 gap-6 py-6 px-6 items-center text-lg 
                ${"/dashboard" + item.path === pathname ? "bg-major/20" : ""}
              `}
            >
              <div
                className={`w-[0.25rem] h-[1.75rem] rounded-full bg-major top-[calc(50% - 0.25rem)] left-0 absolute ${"/dashboard" + item.path === pathname ? "flex" : "hidden"} `}
              />
              <span className="flex items-center justify-center w-[3rem] h-[3rem]">
                {item.icon}
              </span>
              <span className={`text-2xl ${collapsed ? "hidden" : "flex"}`}>
                {item.name}
              </span>
            </li>
          </NavLink>
        ))}

        {/* Desktop only */}
        <button
          className="flex items-center justify-center hover:bg-major/20 w-[6.4rem] h-[6.4rem] mt-auto"
          onClick={() => setCollapsed(!collapsed)}
        >
          <div className="left-nav__border"></div>
          <CollapseArrowIcon
            width="3rem"
            height="3rem"
            style={{
              transform: `${collapsed ? "rotate(-180deg)" : ""}`,
            }}
          />
        </button>
      </ul>
    </nav>
  );
};
