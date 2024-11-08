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

export const LayoutWrapper = ({
  children,
}: PropsWithChildren): ReactElement => {
  return (
    <div className="relative font-outfit flex flex-col h-full max-h-[100dvh] flex-grow overflow-hidden">
      <NavagationBar />

      <main
        className="
        mt-[4rem]
        md:mt-[5rem]
        text-3xl
        bg-tarantula
        text-white
        min-h-screen-4rem
        md:min-h-screen-5rem
        overflow-y-scroll
        "
      >
        <h1 className="text-cyan-400">change this: 2</h1>
        <RefreshPWAButton />
        {children}
        <Footer />
      </main>
    </div>
  );
};
