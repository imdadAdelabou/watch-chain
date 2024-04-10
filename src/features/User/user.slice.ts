import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MeType, User } from "../../utils/types";

const initialState: User = {
  jwt: "",
  me: {
    account: "",
    picture: "",
  },
  openClassBackDrop: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setJwt: (state, action: PayloadAction<string>) => {
      state.jwt = action.payload;
    },
    setMe: (state, action: PayloadAction<MeType>) => {
      state.me = { ...action.payload };
    },
    setOpenClassBackDrop: (state, action: PayloadAction<string>) => {
      state.openClassBackDrop = action.payload;
    },
  },
});

export const { setJwt, setMe, setOpenClassBackDrop } = userSlice.actions;
export default userSlice.reducer;
