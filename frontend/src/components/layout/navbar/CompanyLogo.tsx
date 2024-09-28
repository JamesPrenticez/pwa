import Logo from "@components/common/Logo";
import { NavLink } from "react-router-dom";

interface CompanyLogoProps {
  onClick: () => void;
}

export const CompanyLogo = ({ onClick }: CompanyLogoProps) => {
  return (
    <NavLink to="/">
      <div className="flex items-center cursor-pointer">
        <Logo className="w-[33px]" {...{ onClick }} />
      </div>
    </NavLink>
  );
};
