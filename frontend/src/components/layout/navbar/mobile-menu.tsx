import React from "react";
import { navbarLinkItems } from "../../../constants";
import { MenuItem } from "./mobile-menu-item";
import { LogoutButton } from "@components/auth/logout-button";
import { SignOutIcon } from "@components/icons";

interface Props {
  isMenuOpen: boolean;
  toggleIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileMenu = ({ isMenuOpen, toggleIsMenuOpen }: Props) => {
  return (
    <div
      className={`absolute inset-[4.5rem_0rem_auto_auto] bg-primary z-40 rounded-lg shadow-custom w-[15rem] border border-major/50
    ${isMenuOpen ? "block" : "hidden"}
  `}
      onClick={(e) => {
        const target = e.target as HTMLElement;
        if (target.id === "right-menu") return;
        toggleIsMenuOpen((prev) => !prev); // Directly call the function
      }}
    >
      <div className="h-full p-6 flex flex-col grow">
        {Object.values(navbarLinkItems).map((item, index) =>
          item.disabled ? (
            <div key={`${item.name}-${index}`} className="hidden"></div>
          ) : (
            <MenuItem key={`${item.name}-${index}`} {...item} />
          ),
        )}

        <div
          className={`grid grid-cols-[40px_1fr] items-center hover:text-p1 text-muted text-xl hover:text-sage transition-colors duration-200 ease-in-out py-[1rem] w-[12rem] px-2`}
        >
          <span className="flex items-center transition-colors duration-200 ease-in-out">
            <SignOutIcon width="1.5rem" height="1.5rem" />
          </span>
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};
