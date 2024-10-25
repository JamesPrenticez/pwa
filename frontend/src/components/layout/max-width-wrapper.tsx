import type { ReactElement, PropsWithChildren, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const MaxWidthWrapper = ({
  className,
  children,
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>): ReactElement => {
  return (
    <div className={twMerge("max-w-[90rem] mx-auto w-full", className)}>
      {children}
    </div>
  );
};
