import React from "react";
import { useAppSelector } from "@redux/hooks";
import { MaxWidthWrapper } from "@components/layout/max-width-wrapper";
import { UserSettings } from "./user-settings";

export const Settings = () => {
  const userEmail = useAppSelector((state) => state.user.data);
  console.log(userEmail);
  return (
    <MaxWidthWrapper>
      <UserSettings />
    </MaxWidthWrapper>
  );
};
