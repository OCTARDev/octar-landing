import { createSlice } from "@reduxjs/toolkit";


interface AppState {
  otpModal:boolean;
  posterModal:boolean;
}

const initialState: AppState = {
  otpModal:false,
  posterModal:false
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    openOTP:(state)=>{
        state.otpModal = true;
    },
    closeOTP:(state)=>{
        state.otpModal = false;
    },
    openPoster:(state)=>{
      state.posterModal = true;
    },
    closePoster:(state)=>{
      state.posterModal = false;
    }
    
  },
});

export const { openOTP , closeOTP , openPoster , closePoster } = appSlice.actions;
export default appSlice.reducer;