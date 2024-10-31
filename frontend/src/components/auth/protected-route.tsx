import { useEffect, useState, type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "@redux/hooks";
import { get, StoreName } from "@db";
import { setSpaToken, updateUser } from "@redux/slices";
import { useDispatch } from "react-redux";
import { User } from "@models";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch();
  const { spaToken, data } = useAppSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  const [showInfoLoading, setShowInfoLoading] = useState(false);

  useEffect(() => {
    const fetchSpaTokenAndUserData = async () => {
      try {
        // Check if the SPA token is already set in the Redux store
        if (!spaToken) {
          const tokens = await get<{ key: string; value: string }>(
            StoreName.SPA_TOKEN,
          );
          const fetchedSpaToken =
            tokens.find((item) => item.key === "spa_token")?.value || null;
          dispatch(setSpaToken(fetchedSpaToken));

          setShowInfoLoading(true);
          setTimeout(() => {
            setShowInfoLoading(false);
          }, 2000);

          const userData = await get<User>(StoreName.USER_DATA);
          dispatch(updateUser(userData[0]));
        }
      } catch (err) {
        console.error("Error retrieving SPA Token:", err);
      } finally {
        setLoading(false);
      }
    };

    // Only fetch if user data is not loaded yet
    if (!data) {
      fetchSpaTokenAndUserData();
    } else {
      setLoading(false); // Skip loading if user data is already available
    }
  }, [dispatch, spaToken, data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (showInfoLoading) {
    return <div>Loading your information...</div>;
  }

  if (!spaToken) {
    console.log("No SPA token");
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
