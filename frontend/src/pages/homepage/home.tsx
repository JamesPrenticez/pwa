import { ReactElement, useEffect } from "react";
import { MaxWidthWrapper } from "@components/layout/max-width-wrapper";
import { BannerWithContent } from "./banner-with-content";

import { Hero } from "./hero";
import { project } from "@constants";
import { ClickCounterButton } from "@components/click-counter";
import { get, StoreName } from "@db";
import { setSpaToken } from "@redux/slices";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@redux/hooks";

export const Home = (): ReactElement => {
  return (
    <div>
      <MaxWidthWrapper className="flex flex-col min-h-[44rem]">
        <Hero />
      </MaxWidthWrapper>

      <BannerWithContent title={project.move}></BannerWithContent>

      <MaxWidthWrapper className="flex flex-col min-h-[44rem]">
        <h1 className="text-sage text-[5rem] my-16 font-light">
          How the platform works
        </h1>

        <div className="flex text-muted h-[50px] gap-4">
          <div className="flex items-center justify-center w-full rounded-full h-full bg-minor/40 p-12">
            <h1 className="text-minor">OFFLINE MODE</h1>
          </div>
          <div className="flex items-center justify-center w-full rounded-full h-full bg-major/40 p-12">
            <h1 className="text-major">OFFLINE MODE</h1>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
