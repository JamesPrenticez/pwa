import { PropsWithChildren } from "react";
import { MaxWidthWrapper } from "@components/layout/max-width-wrapper";

interface BannerProps extends PropsWithChildren {
  title: string;
}

export const BannerWithContent = ({ title, children }: BannerProps) => {
  return (
    <>
      <div
        className="
          relative
          bg-[linear-gradient(to_right,#fe69f1,#b62cf8)] 
          bg-cover
          bg-no-repeat
          h-[8rem]
          md:h-[16rem]
          w-full
          text-primary
          flex
          justify-center
          items-center
          "
      >
        <div className="bg-[url('../assets/triangle-bg.png'),linear-gradient(to_right,#1f1d1e3b,#3d3a3f37)] absolute inset-0 flex items-center justify-center">

        <h1 className="text-2xl text-center md:text-5xl font-[600]">{title}</h1>
        </div>
        <div className="bg-glass opacity-50 flex absolute inset-0" />
      </div>
      <MaxWidthWrapper>{children}</MaxWidthWrapper>
    </>
  );
};
