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
  const [collapsed, setCollapsed] = useState(false);
  const { pathname } = useLocation();
  // const currentPage = navigationPages.find(page => page.path.startsWith(pathname)) || navigationPages[0];

  return (
    <nav
      className={`relative flex flex-col border-r border-r-major/20 ${collapsed ? "w-[80px] min-w-[80px]" : "w-[320px] min-w-[320px]"}`}
    >
      {/* Mobile only */}
      {/* <div 
        className='left-nav__mobile left-nav__item' 
        onClick={() => setCollapsed(prev => !prev)}
      >
        <div className='md:hidden'>
          <span className='left-nav__icon'><OverviewIcon /></span>
          <span className='left-nav__text'>{currentPage.name}</span>
          <span className='left-nav__dropdown-icon'>
          {collapsed ? <ChevronDownIcon /> : <XIcon width={12} height={12}/>}
          </span>
        </div>
      </div> */}

      <ul className="flex flex-col grow">
        {leftNavbarLinkItems.map((item, index) => (
          <NavLink to={`/dashboard${item.path}`} className="">
            <li
              key={index}
              className={`relative flex group hover:bg-major/20 gap-6 py-6 px-6 items-center text-lg ${"/dashboard" + item.path === pathname ? "bg-major/20" : ""}`}
            >
              <div
                className={`w-[0.25rem] h-[1.75rem] rounded-full bg-major top-[calc(50% - 0.25rem)] left-0 absolute ${"/dashboard" + item.path === pathname ? "flex" : "hidden"} `}
              />
              <span className="left-nav__icon">{item.icon}</span>
              <span className="left-nav__text">{item.name}</span>
            </li>
          </NavLink>
        ))}

        {/* Desktop only */}
        <button
          className="flex items-center justify-center hover:bg-major/20 w-[80px] h-[80px] mt-auto"
          onClick={() => setCollapsed(!collapsed)}
        >
          <div className="left-nav__border"></div>
          <CollapseArrowIcon
            width={24}
            height={24}
            style={{
              transform: `${collapsed ? "rotate(-180deg)" : ""}`,
            }}
          />
        </button>
      </ul>
    </nav>
  );
};
