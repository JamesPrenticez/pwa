import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "@redux/services/authApi";
import { Path } from "@models";
import { Button } from "@components/ui/button";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { logoutUser } from "@redux/slices";

export const LogoutButton = () => {
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const isOnline = useAppSelector((state) => state.user.isOnline);
  const dispatch = useAppDispatch();

  async function handleLogout() {
    if (isOnline) {
      try {
        await logout().unwrap();
        navigate(Path.LOGIN);
        console.log("Logout successful. Redirecting...");
      } catch (error: any) {
        console.error("Error during logout:", error);
      }
    }

    dispatch(logoutUser());
  }

  return (
    <Button
      color="error"
      variant="link"
      className="text-inherit text-xl flex items-center w-full px-0 "
      onClick={handleLogout}
    >
      LOGOUT
    </Button>
  );
};
