import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "@redux/services";
import { authApi } from "@redux/services/authApi";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { User } from "@models/user";
import { defaultUser } from "@mocks";

export interface UserState {
  data: User | null;
  spaToken: string | null;
  isOnline: boolean;
}

const initialState: UserState = {
  data: null,
  isOnline: false,
  spaToken: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<Partial<User> | null>) => {
      if (action.payload) {
        state.data = state.data
          ? { ...state.data, ...action.payload }
          : (action.payload as User); // Ensures type compatibility
      }
    },
    updateUserField: (
      state,
      action: PayloadAction<{ key: keyof User; value: User[keyof User] }>,
    ) => {
      const { key, value } = action.payload;
      if (state.data && key in state.data) {
        (state.data[key as keyof typeof state.data] as User[keyof User]) =
          value;
      }
    },
    toggleisOnline: (state) => {
      // Only switch to online if there is a internet connection
      if (state.isOnline && navigator.onLine) {
        state.isOnline = false;
      } else {
        state.isOnline = true;
      }
    },
    setSpaToken: (state, action: PayloadAction<string | null>) => {
      state.spaToken = action.payload;
      if (action.payload) {
        // localStorage.setItem(LocalStorageKey.SPA_TOKEN, action.payload);
      } else {
        // localStorage.removeItem(LocalStorageKey.SPA_TOKEN);
      }
    },
    logoutUser(state) {
      state.data = {} as User;
      state.spaToken = null;
      // We dont remove IndexDB data..
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) =>
        userApi.endpoints.getUser.matchFulfilled(action) ||
        authApi.endpoints.login.matchFulfilled(action) ||
        authApi.endpoints.register.matchFulfilled(action),
      (state, action) => {
        // Define how the state should change when any of the above actions match
        state.data = { ...state.data, ...action.payload.data };
      },
    );
  },
});

export const {
  updateUser,
  updateUserField,
  toggleisOnline,
  setSpaToken,
  logoutUser,
} = userSlice.actions;

export default userSlice;
