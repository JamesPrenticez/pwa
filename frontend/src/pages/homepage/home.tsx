import { ReactElement } from "react";
import { MaxWidthWrapper } from "@components/layout/max-width-wrapper";
import { BannerWithContent } from "./banner-with-content";

import { Hero } from "./hero";
import { project } from "@constants";

export const Home = (): ReactElement => {
  return (
    <div>
      <MaxWidthWrapper className="flex flex-col min-h-[44rem]">
        <Hero />
      </MaxWidthWrapper>

      <BannerWithContent title={project.move}></BannerWithContent>
    </div>
  );
};
