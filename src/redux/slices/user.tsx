import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface User {
  name: string;
  id:number;
  email:string;
  email_verified_at:string | null;
  remember_token:string | null;
  media:string | null;
}

interface UserState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  initialized: boolean;
}

const initialState: UserState = {
  user: null,
  accessToken: "",
  refreshToken: "",
  initialized: false
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser:(state,action)=>{
      
      const {token , user } = action.payload;
      state.user = user;
      state.accessToken = token;
      state.initialized = true;
    },
    logOut:(state)=>{
      state.user = null
      state.accessToken = null;
      state.refreshToken = null;
      state.initialized = true;
      Cookies.remove("user");
      window.location.reload();
    },
    setInitialized(state) {
      state.initialized = true;
    },
  },
});

export const { setUser , logOut , setInitialized} = userSlice.actions;
export default userSlice.reducer;