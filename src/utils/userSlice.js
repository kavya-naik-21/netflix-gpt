import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (store, action) => {
      return action.payload;
    },
    removeUser: (store) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
