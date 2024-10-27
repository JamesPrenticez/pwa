import React, { ReactElement } from "react";
// import { ClickCounterButton } from "@components/click-counter";
import { MaxWidthWrapper } from "@components/layout/max-width-wrapper";
import { BannerWithContent } from "./banner-with-content";

import StretchIcon from "../../assets/images/stretch.svg?react";
import WeightsIcon from "../../assets/images/weights.svg?react";
import RunIcon from "../../assets/images/run.svg?react";
import MapSVG from "../../assets/images/map.svg?react";
import { Hero } from "./hero";
import { project } from "@constants";

export const Home = (): ReactElement => {
  return (
    <div>
      {/* <MaxWidthWrapper className="flex flex-col min-h-[50rem]">
      <div className="flex flex-col justify-center items-center p-4 grow">
        <h1 className="text-red-500 font-bold mb-4">PWA</h1>

        <div className="border-sage border-2 p-4 rounded-lg">
          <ClickCounterButton />
        </div>
      </div>
    </MaxWidthWrapper> */}

      <MaxWidthWrapper className="flex flex-col min-h-[44rem]">
        <Hero />
      </MaxWidthWrapper>

      <BannerWithContent title={project.move}></BannerWithContent>
{/* 
      <MaxWidthWrapper className="flex flex-col min-h-[50rem]">
        <div className="grid grid-cols-3 gap-10">
          <div className="flex flex-col items-center border-2 rounded">
            <StretchIcon
              width={100}
              height={100}
              className="text-purple-500 transform scale-x-[-1]"
            />
            <h1>Flexablity</h1>
          </div>

          <div className="flex flex-col items-center border-2 rounded">
            <WeightsIcon width={100} height={100} className="text-purple-500" />
            <h1>Strength</h1>
          </div>

          <div className="flex flex-col items-center border-2 rounded">
            <RunIcon width={100} height={100} className="text-purple-500" />
            <h1>Cardiovascular</h1>
          </div>
        </div>
      </MaxWidthWrapper> */}

      {/* <div>
        <h1>Connect with others around the world!</h1>
        <p>
          Join our global community and surround yourself with like minded
          individuals.
        </p>

        <MapSVG width={400} height={200} />
      </div> */}
    </div>
  );
};
