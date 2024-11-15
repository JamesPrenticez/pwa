import { ReactNode, useState, type ReactElement } from "react";
import { navigationItemsForHomepage } from "@constants";
import { NavLink, useLocation } from "react-router-dom";
import { CompanyLogo } from "./company-logo";
import { CompanyName } from "./company-name";
import { Button } from "@components/ui/button";
import { OfflineModeSwitch } from "@components/pwa/offline-mode-switch";
import { capitalizeFirstLetter } from "@utils/capitalizeFirstLetter";
import { Path } from "@models";
import { useAppSelector } from "@redux/hooks";
import { Avatar } from "./avatar-button";
import { MobileMenu } from "./mobile-menu";
import { InstallPWAButton } from "@components/pwa/install-pwa-button";

export const NavagationBar = (): ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userData = useAppSelector((state) => state.user.data);

  return (
    <NavbarWrapper>
      <div className="flex hover:text-red-400">
        <CompanyLogo onClick={() => setIsMenuOpen(false)} />
        <CompanyName />
      </div>

      <ul className="flex space-x-4">
        {navigationItemsForHomepage.map((page, index) => (
          <li key={page.name + "-" + index}>
            <NavLink to={page.path} tabIndex={-1}>
              <Button variant="link" color="muted" className="p-0">
                {capitalizeFirstLetter(page.name)}
              </Button>
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="flex">
        <OfflineModeSwitch />

        {userData ? (
          <div>
            <Avatar onClick={() => setIsMenuOpen((prev) => !prev)}>
              <MobileMenu
                isMenuOpen={isMenuOpen}
                toggleIsMenuOpen={setIsMenuOpen}
              />
            </Avatar>
          </div>
        ) : (
          <>
            <NavLink to={Path.LOGIN}>
              <Button variant="link" color="muted" className="ml-auto px-4">
                Login
              </Button>
            </NavLink>
            <InstallPWAButton />
          </>
        )}
      </div>
    </NavbarWrapper>
  );
};

interface NavbarWrapperProps {
  children: ReactNode;
}

const NavbarWrapper = ({ children }: NavbarWrapperProps) => {
  return (
    <div className="h-[6rem] md:h-[8rem] bg-tarantula flex font-[400] px-[1.5rem] absolute top-0 left-0 right-0">
      <div className="flex items-center justify-between w-full">{children}</div>
    </div>
  );
};
