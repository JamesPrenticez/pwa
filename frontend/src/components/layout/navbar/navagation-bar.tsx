import { ReactNode, useState, type ReactElement } from "react";
import {
  // navigationItemsForAuthenticedUsers,
  navigationItemsForHomepage,
} from "@constants";
import { NavLink, useLocation } from "react-router-dom";
// import { useAppSelector } from "@redux/hooks";
import { CompanyLogo } from "./company-logo";
import { CompanyName } from "./company-name";
// import { HamburgerMenu } from "./hamburger-menu";
import { Button } from "@components/ui/button";
import { OfflineModeSwitch } from "@components/pwa/offline-mode-switch";
import { capitalizeFirstLetter } from "@utils/capitalizeFirstLetter";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { Path } from "@models";
import { useAppSelector } from "@redux/hooks";

export const NavagationBar = (): ReactElement => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userEmail = useAppSelector((state) => state.user.data.email);

  // TODO isAuth not home...
  if (["/", "/register", "/login", "/test"].includes(location.pathname)) {
    return (
      <NavbarWrapper>
        <div className="flex">
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

          {userEmail ? (
            <>
              <NavLink to={Path.SETTINGS}>
                <Button variant="link" color="muted" className="ml-auto px-4">
                  {userEmail}
                </Button>
              </NavLink>
              {/* <LogoutButton/> */}
            </>
          ) : (
            <>
              <NavLink to={Path.LOGIN}>
                <Button variant="link" color="muted" className="ml-auto px-4">
                  Login
                </Button>
              </NavLink>
              <NavLink to={Path.REGISTER}>
                <Button color="cta" className="px-4 ">
                  Get Started
                </Button>
              </NavLink>
            </>
          )}
        </div>
      </NavbarWrapper>
    );
  }

  return (
    <NavbarWrapper>
      <div className="h-[4rem] md:h-[5rem] bg-tarantula text-muted flex font-semibold px-4">
        <div className="flex items-center max-w-7xl w-full mx-auto">
          <CompanyLogo onClick={() => setIsMenuOpen(false)} />

          {/* <WeekNumber /> */}

          {/* <div className="flex space-x-4 ml-auto">
            <HamburgerMenu
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={() => {
                setIsMenuOpen((prevState) => !prevState);
              }}
            />
          </div> */}
        </div>
      </div>
      {/* <RightNav
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={() => { setIsMenuOpen((prevState) => !prevState) }}
        menuItems={navigationItemsForAuthenticedUsers}
      /> */}
    </NavbarWrapper>
  );
};

interface NavbarWrapperProps {
  children: ReactNode;
}

const NavbarWrapper = ({ children }: NavbarWrapperProps) => {
  return (
    <div className="h-[4rem] md:h-[5rem] bg-tarantula flex font-[400] px-4 absolute top-0 right-[4px] md:right-[16px] left-0">
      <MaxWidthWrapper className="flex items-center justify-between  w-full mx-auto">
        {children}
      </MaxWidthWrapper>
    </div>
  );
};
