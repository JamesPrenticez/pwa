import { useEffect, useState, type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "@redux/hooks";
import { get, getById, StoreName } from "@db";
import { setSpaToken, updateUser } from "@redux/slices";
import { useDispatch } from "react-redux";
import { User } from "@models";
import { MaxWidthWrapper } from "@components/layout/max-width-wrapper";
import { Loading } from "@components/common/loading";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch();
  const { spaToken, data } = useAppSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  const [showInfoLoading, setShowInfoLoading] = useState(false);

  useEffect(() => {
    const fetchSpaTokenAndUserData = async () => {
      try {
        // Check if the SPA token is already set in the Redux store
        console.log("here");
        if (!spaToken) {
          const existingSPAToken = await getById<{ token: string }>(
            StoreName.SPA_TOKEN,
            "spa_token",
          );
          console.log("existing:", existingSPAToken);
          if (!existingSPAToken) return;

          const fetchedSpaToken = existingSPAToken.token;

          dispatch(setSpaToken(fetchedSpaToken));

          setShowInfoLoading(true);
          setTimeout(() => {
            setShowInfoLoading(false);
          }, 2000);

          const userData = await get<User>(StoreName.USER_DATA);
          dispatch(updateUser(userData[0]));
        } else {
          console.log("there is a spa token already just fetch user data");
          console.log(data);
        }
      } catch (err) {
        console.error("Error retrieving SPA Token:", err);
      } finally {
        setLoading(false);
      }
    };

    // Only fetch if user data is not loaded yet
    if (!data) {
      console.log("start fetch");
      fetchSpaTokenAndUserData();
    } else {
      setLoading(false); // Skip loading if user data is already available
    }
  }, [dispatch, spaToken, data]);

  if (loading) {
    return <MaxWidthWrapper>Loading...</MaxWidthWrapper>;
  }

  if (showInfoLoading) {
    return (
      <MaxWidthWrapper className="text-muted text-md min-h-screen-6rem flex items-center justify-center">
        <h1 className="-mt-[4rem]">Loading your information...</h1>
      </MaxWidthWrapper>
    );
  }

  if (!spaToken) {
    console.log("No SPA token");
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
