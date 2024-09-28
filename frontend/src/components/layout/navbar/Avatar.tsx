import { useAppSelector } from "@redux/hooks";
import { getInitials } from "@utils/getInitials";

interface AvatarProps {
  width?: number;
  height?: number;
}

export const Avatar = ({ width = 50, height = 50 }: AvatarProps) => {
  const user = useAppSelector((state) => state.user);

  return (
    <div className="flex space-x-4 items-center relative text-muted">
      {user.data?.profilePicture ? (
        <div
          className="block rounded-full bg-cover bg-center border-2 overflow-hidden"
          style={{
            width: width,
            height: height,
            backgroundImage: `url("${user.data.profilePicture}")`,
          }}
        />
      ) : user.data?.firstName && user.data?.lastName ? (
        <div
          className="flex justify-center items-center rounded-full border-2 overflow-hidden bg-primary font-bold text-[18px]"
          style={{
            width: width,
            height: height,
          }}
        >
          {getInitials(user.data.firstName, user.data.lastName)}
        </div>
      ) : (
        <div
          className="flex justify-center items-center rounded-full border-2 overflow-hidden bg-red-500 font-bold text-[18px]"
          style={{
            width: width,
            height: height,
          }}
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
