import {
  useEffect,
  useRef,
  type PropsWithChildren,
  type ReactElement,
} from "react";
import { NavagationBar } from "./navbar/navagation-bar";
import { Footer } from "./footer";
import { RefreshPWAButton } from "@components/pwa/refresh-pwa-button";
import { InstallPWAButton } from "@components/pwa/install-pwa-button";
import { LeftNavbar } from "@components/dashboard/left-navbar";
import { useLocation } from "react-router-dom";
import { Path } from "@models";

export const LayoutWrapper = ({
  children,
}: PropsWithChildren): ReactElement => {
  const { pathname } = useLocation();
  const isHomePage = pathname === Path.HOME;
  console.log(pathname);

  return (
    <div className="relative font-outfit flex flex-col h-full max-h-[100dvh] flex-grow overflow-hidden">
      <NavagationBar />
      <div className="flex w-full h-full mt-[4rem] md:mt-[5rem] min-h-screen-4rem md:min-h-screen-5rem">
        {!isHomePage && <LeftNavbar />}

        <main
          className="
            w-full
            text-3xl
            bg-tarantula
            text-white
            min-h-screen-4rem 
            md:min-h-screen-5rem
            overflow-y-scroll
          "
        >
          {children}
          <Footer />
          <RefreshPWAButton />
        </main>
      </div>
    </div>
  );
};
