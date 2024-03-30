import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MeType, User } from "../../utils/types";

const initialState: User = {
  jwt: "",
  me: {
    account: "",
    picture: "",
  },
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
  },
});

export const { setJwt, setMe } = userSlice.actions;
export default userSlice.reducer;
