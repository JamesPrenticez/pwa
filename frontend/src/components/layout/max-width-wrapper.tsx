import type { ReactNode } from "react";

interface MaxWidthWrapperProps {
  children: ReactNode;
}

export const MaxWidthWrapper = ({ children }: MaxWidthWrapperProps) => {
  return (
    <div className="max-w-7xl mx-auto w-full mt-12 bg-glass">{children}</div>
  );
};
