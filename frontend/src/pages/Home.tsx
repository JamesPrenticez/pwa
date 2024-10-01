import type { ReactElement } from "react";
import { ClickCounterButton } from "@components/click-counter";
import { MaxWidthWrapper } from "@components/layout/max-width-wrapper";

export const Home = (): ReactElement => {
  return (
    <MaxWidthWrapper className="flex flex-col min-h-[40rem]">
      <div className="flex flex-col justify-center items-center p-4 grow">
        <h1 className="text-red-500 font-bold mb-4">PWA</h1>

        <div className="border-sage border-2 p-4 rounded-lg">
          <ClickCounterButton />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};
