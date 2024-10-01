import type { ReactElement, PropsWithChildren, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const MaxWidthWrapper = ({
  className,
  children,
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>): ReactElement => {
  return (
    <div
      className={twMerge("max-w-7xl mx-auto w-full mt-12 bg-glass", className)}
    >
      {children}
    </div>
  );
};
