import { ReactNode, useState, type ReactElement } from "react";
import {
  // navigationItemsForAuthenticedUsers,
  navigationItemsForHomepage,
} from "@constants";
import { NavLink, useLocation } from "react-router-dom";
// import { useAppSelector } from "@redux/hooks";
import { CompanyLogo } from "@components/layout/navbar/company-logo";
import { CompanyName } from "@components/layout/navbar/company-name";
import { Hamburger } from "@components/layout/navbar/hamburger";
import { Button } from "@components/ui/button";
import { OfflineModeSwitch } from "@components/pwa/offline-mode-switch";
import { capitalizeFirstLetter } from "@utils/capitalizeFirstLetter";
import { MaxWidthWrapper } from "../max-width-wrapper";

export const NavagationBar = (): ReactElement => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const userEmail = useAppSelector((state) => state.user.data.email);

  // TODO isAuth not home...
  if (location.pathname === "/") {
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

        <div>
          <OfflineModeSwitch />
          {/* {userEmail ? (
              <>
                <NavLink to={Path.SETTINGS}>
                  <Button variant="link" color="muted" className="ml-auto px-4">
                    {userEmail}
                  </Button>
                </NavLink>
                <LogoutButton/>
              </>
            )
            : (
              <>
                <NavLink to={Paths.LOGIN}>
                  <Button variant="link" color="muted" className="ml-auto px-4">
                    Login
                  </Button>
                </NavLink>
                <NavLink to={Paths.REGISTER}>
                  <Button color="cta" className="px-4 ">
                    Get Started
                  </Button>
                </NavLink>
              </>
            )} */}
        </div>
      </NavbarWrapper>
    );
  }

  return (
    <>
      <div className="h-[4rem] md:h-[5rem] bg-tarantula text-muted flex font-semibold px-4">
        <div className="flex items-center max-w-7xl w-full mx-auto">
          <CompanyLogo onClick={() => setIsMenuOpen(false)} />

          {/* <WeekNumber /> */}

          <div className="flex space-x-4 ml-auto">
            <Hamburger
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={() => {
                setIsMenuOpen((prevState) => !prevState);
              }}
            />
          </div>
        </div>
      </div>
      {/* <RightNav
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={() => { setIsMenuOpen((prevState) => !prevState) }}
        menuItems={navigationItemsForAuthenticedUsers}
      /> */}
    </>
  );
};

interface NavbarWrapperProps {
  children: ReactNode;
}

const NavbarWrapper = ({ children }: NavbarWrapperProps) => {
  return (
    <div className="h-[4rem] md:h-[5rem] bg-tarantula flex font-[400] text-[16px] px-4 absolute top-0 right-0 left-0">
      <MaxWidthWrapper className="flex items-center justify-between  w-full mx-auto">
        {children}
      </MaxWidthWrapper>
    </div>
  );
};
