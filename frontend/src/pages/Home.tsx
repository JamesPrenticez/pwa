import type { ReactElement } from "react";
import { ClickCounterButton } from "@components/click-counter";
import { MaxWidthWrapper } from "@components/layout/max-width-wrapper";
import LogoSVG from "@assets/logo.svg";

export const Home = (): ReactElement => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col justify-center items-center p-4">
        <img
          width={180}
          src={LogoSVG}
          className="logo react"
          alt="React logo"
        />

        <h1 className="text-red-500 font-bold">PWA</h1>

        <div className="card">
          <ClickCounterButton />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};
