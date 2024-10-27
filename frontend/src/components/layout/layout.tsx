import { type PropsWithChildren, type ReactElement } from "react";
import { NavagationBar } from "./navbar/navagation-bar";
import { Footer } from "./footer";

export const Layout = ({ children }: PropsWithChildren): ReactElement => {
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
        {children}
        <Footer />
      </main>
    </div>
  );
};
