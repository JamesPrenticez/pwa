import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { type IUser } from "@models";
import { userApi } from "@redux/services";

export interface UserState {
  data: IUser;
  spaToken: string | null;
  isOnline: boolean;
}

const initialState: UserState = {
  data: {
    id: "",
    email: "test",
    dateCreated: null,
    lastModified: null,
    type: null,
  },
  isOnline: false,
  spaToken: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<Partial<IUser> | null>) => {
      if (state.data) {
        state.data = { ...state.data, ...action.payload };
      }
    },
    updateUserField: (
      state,
      action: PayloadAction<{ key: keyof IUser; value: any }>,
    ) => {
      const { key, value } = action.payload;
      if (key in state.data) {
        (state.data as any)[key] = value; // Use type assertion to narrow down the type
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
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      userApi.endpoints.getUser.matchFulfilled,
      (state, action) => {
        state.data = action.payload.data;
      },
    );
  },
});

export const { updateUser, updateUserField, toggleisOnline } =
  userSlice.actions;

export default userSlice;
