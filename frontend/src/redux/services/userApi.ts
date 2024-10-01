import { updateUserField, userSlice } from "@redux/slices";
import { RootState } from "@redux/store";
import { getUserId } from "./getUserId";
import { baseApi } from "@redux/services/baseApi";

import type { SuccessResult } from "@models/api";
import type { User } from "@models/user";

// TODO typesafe url params with an interface
const user_id = getUserId();

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<SuccessResult<User>, void>({
      query: () => ({
        url: `user/${user_id}`,
        method: "GET",
        queryKey: "getUser",
        providesTags: ["user"],
      }),
    }),
    updateUserDetails: builder.mutation<
      User,
      Partial<User> | { key: keyof User; value: any }
    >({
      query: (update) => ({
        url: "user",
        method: "PUT",
        data: "key" in update && {
          [update.key]: update.value,
        },
      }),
      async onQueryStarted(update, { dispatch, queryFulfilled, getState }) {
        // Optimistic Updating
        // Save the current user state before the update
        const previousUser = (getState() as RootState).user.data;

        // Check if the update contains a single field or multiple fields
        if ("key" in update) {
          // Single Field at a time
          dispatch(updateUserField(update));
        } else {
          // All fields at once
          dispatch(userSlice.actions.updateUser(update));
        }

        try {
          // Wait for the query to be fulfilled
          await queryFulfilled;
        } catch {
          // If the query fails, roll back to the previous state
          dispatch(userSlice.actions.updateUser(previousUser));
        }
      },
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserDetailsMutation } = userApi;
