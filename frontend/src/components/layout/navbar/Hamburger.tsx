import type { ReactElement } from "react";

interface HamburgerProps {
  isMenuOpen: boolean;
  setIsMenuOpen: () => void;
}

export const Hamburger = ({
  isMenuOpen,
  setIsMenuOpen,
}: HamburgerProps): ReactElement => {
  const baseClass =
    "bg-secondary-muted group-hover:bg-secondary block h-[0.2rem]  rounded transform transition-all duration-200 ease-in-out";

  return (
    <button
      className="outline-none"
      onClick={setIsMenuOpen}
      aria-label="Navigation Menu"
    >
      <div className="block relative group">
        {/* top */}
        <span
          className={`${baseClass} mb-1 w-[30px] ${isMenuOpen && "opacity-0"}`}
        ></span>
        {/* two in the middle */}
        <span
          className={`${baseClass} absolute w-[30px] right-0 ${isMenuOpen && "-rotate-45"}`}
        ></span>
        <span
          className={`${baseClass} absolute w-[30px] right-0 ${isMenuOpen && "rotate-45"}`}
        ></span>
        {/* bottom */}
        <span
          className={`${baseClass} mt-3 ml-auto w-[22px] ${isMenuOpen && "opacity-0"}`}
        ></span>
      </div>
    </button>
  );
};
