import {
  type Dispatch,
  type SetStateAction,
  useEffect,
  PropsWithChildren,
} from "react";
import { CrossIcon } from "@components/icons";
import { twMerge } from "tailwind-merge";

interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  className?: string;
}

export const Modal = ({
  children,
  isOpen,
  setIsOpen,
  className,
}: ModalProps) => {
  useEffect(() => {
    const root = document.getElementById("root");

    if (root && isOpen) {
      const scrollbarWidth = "5px";
      document.body.style.overflow = "hidden";
      root.style.paddingRight = scrollbarWidth;
    } else if (root) {
      document.body.style.overflow = "auto";
      root.style.paddingRight = "";
    }
  }, [isOpen]);

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-glass/80 z-50"
      style={{
        display: isOpen ? "flex" : "none",
      }}
      onClick={() => setIsOpen(false)}
    >
      <div
        className={twMerge(
          "bg-tarantula rounded-md fixed z-50 top-[5%] left-[25%] w-[50%] h-[90%] p-6 border border-grass",
          className,
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <CrossIcon
          className="h-8 w-8 text-muted ml-auto cursor-pointer hover:text-muted/80"
          onClick={() => {
            setIsOpen(false);
          }}
        />
        <div>{children}</div>
      </div>
    </div>
  );
};
