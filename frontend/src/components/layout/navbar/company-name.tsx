import type { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { Path } from "@models/paths";

export const CompanyName = () => {
  return (
    <NavLink to={Path.HOME}>
      <h1 className="cursor-pointer text-[20px] ml-4 text-white font-[600] hover:text-muted transition-colors duration-100 ease-in-out">
        SELF <span className="font-[200]">REGULATOR</span>
      </h1>
    </NavLink>
  );
};
