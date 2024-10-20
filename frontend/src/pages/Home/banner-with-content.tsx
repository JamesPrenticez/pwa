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
          bg-[url('../assets/triangle-bg.png'),linear-gradient(to_right,#3d853c,#75cf75)] 
          bg-cover
          bg-no-repeat
          h-[16rem]
          w-full
          text-primary
          flex
          justify-center
          items-center
          "
      >
        <h1 className="text-5xl font-[600]">{title}</h1>
        <div className="bg-glass opacity-50 flex absolute inset-0" />
      </div>
      <MaxWidthWrapper>{children}</MaxWidthWrapper>
    </>
  );
};
