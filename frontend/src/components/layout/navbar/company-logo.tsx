import type { ReactElement } from "react";
import { Logo } from "@components/common/logo";
import { NavLink } from "react-router-dom";

interface CompanyLogoProps {
  onClick: () => void;
}

export const CompanyLogo = ({ onClick }: CompanyLogoProps): ReactElement => {
  return (
    <NavLink to="/">
      <div className="flex items-center cursor-pointer">
        <Logo className="w-[33px]" {...{ onClick }} />
      </div>
    </NavLink>
  );
};
