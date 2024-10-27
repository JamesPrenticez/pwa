import React from "react";
import { useAppSelector } from "@redux/hooks";
import { MaxWidthWrapper } from "@components/layout/max-width-wrapper";

export const Settings = () => {
  const userEmail = useAppSelector((state) => state.user.data);
  console.log(userEmail);
  return (
    <MaxWidthWrapper>
      Settings
      <h1 className="text-major">{userEmail.email}</h1>
    </MaxWidthWrapper>
  );
};
