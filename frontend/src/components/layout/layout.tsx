import { type PropsWithChildren, type ReactElement } from "react";
import { Navbar } from "./navbar/navbar";
import { Footer } from "./footer";

export const Layout = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <div className="relative font-outfit ">
      <Navbar />
      <main className="h-screen-4rem md:h-screen-5rem overflow-y-auto flex flex-col bg-white relative bg-[url('../assets/triangle-bg.png'),linear-gradient(to_right,#3d853c,#16221a)] bg-cover bg-no-repeat">
        {children}
      </main>
      <Footer />
    </div>
  );
};
