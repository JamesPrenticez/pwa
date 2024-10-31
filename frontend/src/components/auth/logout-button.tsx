import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "@redux/services/authApi";
import { Path } from "@models";
import { Button } from "@components/ui/button";

export const LogoutButton = () => {
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout().unwrap();
      navigate(Path.LOGIN);
      console.log("Logout successful. Redirecting...");
    } catch (error: any) {
      console.error("Error during logout:", error);
    }
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
