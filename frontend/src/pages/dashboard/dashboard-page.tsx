import React from "react";
import { useAppSelector } from "@redux/hooks";
import { UserSettings } from "./user-settings";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "@components/auth/protected-route";
import { Path } from "@models";
import { TimerPage } from "@pages/timer/timer-page";
import { HomeScreen } from "@components/dashboard/home-screen";
import { NotFound } from "@pages/errors/404";
import { HabitsPage } from "@pages/habits/habits-page";

export const Dashboard = () => {
  // const userEmail = useAppSelector((state) => state.user.data);
  // console.log(userEmail);

  return (
    <>
      <Routes>
        <Route
          path={"/"}
          element={
            // <ProtectedRoute>
            <HomeScreen />

            // </ProtectedRoute>
          }
        />
        <Route path={Path.HABITS} element={<HabitsPage />} />
        <Route path={Path.TIMER} element={<TimerPage />} />
        <Route
          path={Path.SETTINGS}
          element={
            <ProtectedRoute>
              <UserSettings />
            </ProtectedRoute>
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};
