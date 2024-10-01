import { baseApi } from "./baseApi";
import { LoginDetails, RegisterDetails } from "@models/auth";
import { logoutUser } from "@redux/slices";

import type { SuccessResult } from "@models/api";
import type { User } from "@models/user";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<SuccessResult<User>, LoginDetails>({
      query: ({ email, password }) => ({
        url: "/login",
        method: "POST",
        data: {
          email: email,
          password: password,
        },
        queryKey: "getUser",
        providesTags: ["user"],
      }),
    }),
    logout: builder.mutation<SuccessResult<null>, void>({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
      invalidatesTags: ["user"],
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          // After logout succeeds, reset the user state to null
          dispatch(logoutUser());
        } catch (error: any) {
          console.log("Error during logout", error);
        }
      },
    }),
    register: builder.mutation<SuccessResult<User>, RegisterDetails>({
      query: ({ email, password }) => ({
        url: "/register",
        method: "POST",
        data: {
          email: email,
          password: password,
        },
        queryKey: "getUser",
        providesTags: ["user"],
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } =
  authApi;
