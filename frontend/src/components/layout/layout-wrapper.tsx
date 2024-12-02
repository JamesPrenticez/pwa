import {
  useEffect,
  useRef,
  useState,
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
  const isDashboardRoute = pathname.startsWith("/dashboard");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative font-outfit flex flex-col h-full max-h-[100dvh] flex-grow overflow-hidden">
      <NavagationBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="flex w-full h-full mt-[6rem] md:mt-[8rem] min-h-screen-6rem md:min-h-screen-8rem">
        {<LeftNavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}

        <main
          className="
            w-full
            text-3xl
            bg-tarantula
            text-white
            min-h-screen-6rem 
            md:min-h-screen-8rem
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
