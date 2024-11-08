import type { ReactElement } from "react";
import { useAppSelector } from "@redux/hooks";
import { getInitials } from "@utils/getInitials";

interface AvatarProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  children: React.ReactNode;
}

export const Avatar = ({ onClick, children }: AvatarProps): ReactElement => {
  const user = useAppSelector((state) => state.user);

  return (
    <div
      className="flex space-x-4 items-center relative text-muted select-none cursor-pointer"
      onClick={onClick}
    >
      {user.data?.profilePicture ? (
        <div
          className="
            block
            rounded-full
            bg-cover
            bg-center
            border-2
            border-gray-200
            hover:border-sage
            transition-colors
            duration-200
            ease-in-out
            overflow-hidden
            w-[2.8rem] 
            h-[2.8rem]
          "
          style={{
            backgroundImage: `url("${user.data.profilePicture}")`,
          }}
        />
      ) : user.data?.firstName && user.data?.lastName ? (
        <div
          className="
            flex
            justify-center
            items-center
            rounded-full
            border-2
            overflow-hidden 
            bg-primary
            font-bold
            text-[18px]
            w-[2.8rem] 
            h-[2.8rem]
            "
        >
          {getInitials(user.data.firstName, user.data.lastName)}
        </div>
      ) : (
        <div
          className="
            flex
            justify-center
            items-center
            rounded-full
            border-2
            overflow-hidden
            bg-red-500
            font-bold
            text-[18px]
            w-[2.8rem]
            h-[2.8rem]
          "
        >
          N/A
        </div>
        // <div
        //   className="block rounded-full bg-cover bg-center border-2 overflow-hidden"
        //   style={{
        //     width: width,
        //     height: height,
        //     backgroundImage: `url("avatar.png")`
        //   }}
        // />
      )}
      {children}
      {/* <AvatarBadge /> */}
    </div>
  );
};

// const AvatarBadge = () => {
//   return (
//     <div className="absolute -right-[15px] -bottom-[10px] w-8 h-8">
//       <img src="./badges/30day.svg" width="100%" height="100%" alt="" />
//     </div>
//   )

// };
